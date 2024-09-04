import { useState, useEffect, useRef } from 'react';
import useAppStore, { Message } from '../util/appstore';
import { getUniqueId } from '../util/utils';

import useIsOpen from './use-is-open';
import { deleteThread } from '../api/delete-thread';
import { sendMessage } from '../api/send-message';
import { useSuggestions } from './use-suggestions';

type dialogueStateProps = {
  isMounted: boolean,
  setMounted: (isMounted: boolean) => void,
  inputText: string,
  setInputText: (inputText: string) => void,
}

const useDialogueState = ({ isMounted, setMounted, inputText, setInputText } : dialogueStateProps) => {
  const { isOpen } = useIsOpen();
  const { setSuggestedQuestions } = useSuggestions()
  const messageRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [messageItems, setMessageItems] = useState<Message[]>([]);
  const [lastMessageId, setLastMessageId] = useState('');

  const threadId = useAppStore((state) => state.threadId);
  const setThreadId = useAppStore((state) => state.setThreadId);

  const inputRef = useRef<HTMLInputElement>(null);

  const storedMessages = useAppStore((state) => state.messages);
  const addMessage = useAppStore((state) => state.addMessage);
  const clearMessages = useAppStore((state) => state.clearMessages);

  

  const removeThread = async () => {
    setLoading(true);
    await deleteThread(threadId)
    setLoading(false);
    setThreadId('');
    setMessageItems([]);
    clearMessages();

    const startingMessage = {
      id: getUniqueId(),
      created_at: Math.floor(new Date().getTime() / 1000),
      role: 'assistant',
      content:
        'Hello, my name is SPACEBOT. I am here to answer your questions about SPACEMAP and satellite collisions. How can I help you today?',
    };
    setMessageItems((prev) => [...prev, startingMessage]);
    addMessage(startingMessage);
};

    const resetScroll = () => {
      setTimeout(() => {
        if (messageRef?.current) {
          messageRef.current.scrollTop = messageRef.current.scrollHeight + 24;
        }
      }, 100);
    };

  const submitAssistant = async (inputText: string) => {
    if (inputText.trim() === '' || loading) return;

    setLastMessageId('');
    setLoading(true);
    const text = inputText;
    setInputText('');
    inputRef.current?.blur();

    const messageId = getUniqueId();

    const newUserMessage = {
      id: messageId,
      created_at: Math.floor(Date.now() / 1000),
      role: 'user',
      content: text,
    };

    setMessageItems((prev) => [...prev, newUserMessage]);
    addMessage(newUserMessage);

    resetScroll();

    const result = await sendMessage(text, threadId, messageId)

    setThreadId(result.threadId);

      if (result.messages.length > 0) {
        const newMessages = result.messages
          .filter((msg: any) => !msg.metadata?.id || msg.metadata.id !== messageId)
          .map((msg: any) => ({
            id: msg.id,
            created_at: msg.created_at,
            role: msg.role,
            content: msg.content[0].text.value.split("¶")[0],
            tool_output: result.outputs,
            followup_question: msg.content[0].text.value.split("¶")[1],
            good_clicked: false,
            bad_clicked: false,
          }));

        setLastMessageId(result.messages[0].id);
        setMessageItems((prev) => [...prev, ...newMessages]);
        newMessages.forEach((newMsg: Message) => addMessage(newMsg));
      } else {
        const newMessage = {
          id: getUniqueId(),
          created_at: Math.floor(new Date().getTime() / 1000),
          role: 'assistant',
          content: '',
          tool_output: result.outputs,
          good_clicked: false,
          bad_clicked: false,
        };

        setLastMessageId(newMessage.id);
        setMessageItems((prev) => [...prev, newMessage]);
      }
      resetScroll();
      setLoading(false)
  }

  useEffect(() => {
    setMounted(true);
    clearMessages();
    removeThread();
  }, []);

  useEffect(() => {
    if (isOpen && isMounted) {
      removeThread();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      setMessageItems(storedMessages);
    }
    if (storedMessages.length < 1) {
      const startingMessage = {
        id: getUniqueId(),
        created_at: Math.floor(new Date().getTime() / 1000),
        role: 'assistant',
        content:
          'Hello, my name is SPACEBOT. I am here to answer your questions about SPACEMAP and satellite collisions. How can I help you today?',
      };
      setMessageItems((prev) => [...prev, startingMessage]);
      addMessage(startingMessage);
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
  };
};

export default useDialogueState;
