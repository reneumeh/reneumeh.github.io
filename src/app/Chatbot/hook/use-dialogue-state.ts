import { useState, useEffect, useRef } from 'react';
import useAppStore, { Message } from '../util/appstore';
import { getUniqueId } from '../util/utils';
import { AssistantStream } from 'openai/lib/AssistantStream.mjs';
import { TextDelta } from 'openai/resources/beta/threads/messages.mjs';

interface dialogueProps {
  isMounted: boolean,
  setIsMounted: (isMounted: boolean) => void,
}
const useDialogueState = ({ isMounted, setIsMounted }: dialogueProps) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageItems, setMessageItems] = useState<Message[]>([]);
  const [lastMessageId, setLastMessageId] = useState('');
  const [followUpQuestion, setFollowUpQuestion] = useState('')
  const isFollowUpRef = useRef(false);

  /*
    =====================================
    === STORE VARIABLES AND FUNCTIONS ===
    =====================================
  */
  const threadId = useAppStore((state) => state.threadId);
  const setThreadId = useAppStore((state) => state.setThreadId);
  const setMessages = useAppStore((state) => state.setMessages);
  const storedMessages = useAppStore((state) => state.messages);
  const clearMessages = useAppStore((state) => state.clearMessages);

  /*
    =======================
    == THREAD MANAGEMENT ==
    =======================
  */
  const createThread = async () => {
    setLoading(true)
    const res = await fetch(`/api/threads`, {
      method: "POST",
    });
    const data = await res.json();
    setThreadId(data.threadId);
    setLoading(false)
  };

  const removeThread = async () => {
    setLoading(true);
    await fetch(`/api/threads/${threadId}`, {
      method: 'DELETE',
    }).then(() => {
      setThreadId('');
    setMessageItems([]);
    clearMessages(); 
    setFollowUpQuestion('')
    setLoading(false);
    })  
  };

  const refreshConversation = async () => {
    await removeThread()
    await createThread()
    const startingMessage = createMessage('assistant', 'Hello, Rene cannot come to the phone right now, but he made me to answer anything you need to know about him.')
    appendMessage(startingMessage) 
  } 
  /*
    =======================
    = MESSAGE MANAGEMENT ==
    =======================
  */

  const createMessage = (role: 'user' | 'assistant', content: string) : Message =>{
    const message = {
      id: getUniqueId(),
      created_at: Math.floor(new Date().getTime() / 1000),
      role: role,
      content: content,
      good_clicked: false,
      bad_clicked: false,
    };
    return message
  }

  const appendMessage = (message : Message) => {
    setMessageItems((prev) => [...prev, message]);
  };

  const appendToLastMessage = (addition : string | undefined) => {
    if (addition) {
      setMessageItems((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        const updatedLastMessage = {
          ...lastMessage,
          content: lastMessage.content + addition,
        };
        return [...prevMessages.slice(0, -1), updatedLastMessage];
      });
    }
  };

  const appendToFollowUpQuestion = (addition: string | undefined) => {
    if (addition) {
      setFollowUpQuestion((prev) => prev + addition)
    }
  }

  /*
    =======================
    = HANDLE MESSAGE SEND =
    =======================
  */

  const resetScroll = () => {
    setTimeout(() => {
      if (messageRef?.current) {
        messageRef.current.scrollTop = messageRef.current.scrollHeight + 24;
      }
    }, 100);
  };

  const handleReadableStream = (stream: AssistantStream) => {
    stream.on("textCreated", handleTextCreated);
    stream.on("textDelta", handleTextDelta);

    // events without helpers yet (e.g. requires_action and run.done)
    stream.on("event", (event) => {
      if (event.event === "thread.run.completed") handleRunCompleted();
    });
  };

  const handleTextCreated = () => {
    const newAssistantMessage = createMessage('assistant', '')
    appendMessage(newAssistantMessage);
    setLastMessageId(newAssistantMessage.id);
  };

  const handleTextDelta = (delta : TextDelta) => {
    resetScroll();
    if (delta.value?.includes('¶')) {
      isFollowUpRef.current = true; 
      return;
    }
    if (delta.value?.includes('†source】')) {
      return
    } 
    else {
      if (delta.value && isFollowUpRef.current) {
      appendToFollowUpQuestion(delta.value)
      return
    }
    if (delta.value && !isFollowUpRef.current) {
      appendToLastMessage(delta.value)
      return
    }} 
  };

  const handleRunCompleted = () => {
    setLoading(false);
    setMessageItems(prevMessages => {
      setMessages(prevMessages);
      return prevMessages;
    });
  };
  


  const submitAssistant = async (inputText: string) => {
    if (inputText.trim() === '' || loading) return;
    setLoading(true);
    inputRef.current?.blur();
    setInputText('');
    setLastMessageId('');
    setFollowUpQuestion('')
    isFollowUpRef.current = false
    
    const newUserMessage = createMessage('user', inputText)
    appendMessage(newUserMessage)
    resetScroll()

    const response = await fetch(
      `/api/threads/${threadId}/messages`,
      {
        method: "POST",
        body: JSON.stringify({
          content: inputText,
        }),
      }
    );
    const stream = AssistantStream.fromReadableStream(response.body as ReadableStream);
    handleReadableStream(stream);}

  /*
    =======================
    ======= ON START ======
    =======================
  */
  useEffect(() => {
    setMessageItems(storedMessages);
    if (storedMessages.length < 1 && !isMounted) {
      createThread()
      const startingMessage = createMessage('assistant', 'Hello, Rene cannot come to the phone right now, but he made me to answer anything you need to know about him.')
      appendMessage(startingMessage) 
      setIsMounted(true)
    } 
  }, [isMounted]);

  return {
    setLoading,
    loading,
    submitAssistant,
    removeThread,
    setLastMessageId,
    messageItems,
    lastMessageId,
    inputRef,
    messageRef,
    resetScroll,
    followUpQuestion,
    setInputText,
    inputText,
    refreshConversation
  };
};

export default useDialogueState;
