// import { useState, useEffect, useRef } from 'react';
// import useAppStore from '../util/appstore';
// import { getUniqueId } from '../util/utils';

// import { useInteractObjectStore } from '@/shared/stores';
// import useIsOpen from './use-is-open';
// import { deleteThread } from '../api/delete-thread';
// import { sendMessage } from '../api/send-message';
// import { useSuggestions } from './use-suggestions';


// const useDialogueState = ({ sessionId, isMounted, setMounted, inputText, setInputText, loading, setLoading }) => {
//   const messageRef = useRef(null);

//   const [messageItems, setMessageItems] = useState([]);
//   const [lastMessageId, setLastMessageId] = useState('');

//   const session = useAppStore((state) => state.sessions.find((session) => session.sessionId === sessionId));
//   const threadId = session?.threadId;
//   const storedMessages = session?.messages;

//   console.log(storedMessages)

//   const setThreadId = useAppStore((state) => state.setThreadId);
//   const addMessage = useAppStore((state) => state.addMessage);
//   const setSessionName = useAppStore((state) => state.setSessionName);

//   const inputRef = useRef(null);

//     const resetScroll = () => {
//       setTimeout(() => {
//         if (messageRef.current) {
//           messageRef.current.scrollTop = messageRef.current.scrollHeight + 24;
//         }
//       }, 100);
//     };

//   const submitAssistant = async (inputText) => {
//     if (inputText.trim() === '' || loading) return;

//     setLastMessageId('');
//     setLoading(true);
//     const text = inputText;
//     setSessionName(sessionId, text)
//     setInputText('');
//     inputRef.current.blur();

//     const messageId = getUniqueId();

//     const newUserMessage = {
//       id: messageId,
//       created_at: Math.floor(Date.now() / 1000),
//       role: 'user',
//       content: text,
//     };

//     setMessageItems((prev) => [...prev, newUserMessage]);
//     addMessage(sessionId, newUserMessage);

//     resetScroll();

//     const result = await sendMessage(text, threadId, messageId)

//     setThreadId(sessionId, result.threadId);

//       if (result.messages.length > 0) {
//         const newMessages = result.messages
//           .filter((msg) => !msg.metadata?.id || msg.metadata.id !== messageId)
//           .map((msg) => ({
//             id: msg.id,
//             created_at: msg.created_at,
//             role: msg.role,
//             content: msg.content[0].text.value.split("¶")[0],
//             tool_output: result.outputs,
//             followup_question: msg.content[0].text.value.split("¶")[1],
//             good_clicked: false,
//             bad_clicked: false,
//           }));

//         setLastMessageId(result.messages[0].id);
//         setMessageItems((prev) => [...prev, ...newMessages]);
//         newMessages.forEach((newMsg) => addMessage(sessionId, newMsg));
//       } else {
//         const newMessage = {
//           id: getUniqueId(),
//           created_at: Math.floor(new Date().getTime() / 1000),
//           role: 'assistant',
//           content: '',
//           tool_output: result.outputs,
//           good_clicked: false,
//           bad_clicked: false,
//         };

//         setLastMessageId(newMessage.id);
//         setMessageItems((prev) => [...prev, newMessage]);
//         addMessage(sessionId, newMessage)
//       }
//       resetScroll();
//       setLoading(false)
//   }

//   // useEffect(() => {
//   //   setMounted(true);
//   //   clearMessages(sessionId);
//   //   removeThread();
//   // }, []);

//   // useEffect(() => {
//   //   if (isOpen && isMounted) {
//   //     removeThread();
//   //   }
//   // }, [isOpen]);

//   useEffect(() => {
//       setMessageItems(storedMessages);
//     if (storedMessages?.length < 1) {
//       const startingMessage = {
//         id: getUniqueId(),
//         created_at: Math.floor(new Date().getTime() / 1000),
//         role: 'assistant',
//         content:
//           'Hello, my name is SPACEBOT. I am here to answer your questions about SPACEMAP and satellite collisions. How can I help you today?',
//       };
//       setMessageItems((prev) => [...prev, startingMessage]);
//       addMessage(sessionId, startingMessage);
//     }
//   }, [isMounted, sessionId, storedMessages, addMessage]);

//   return {
//     setLoading,
//     loading,
//     submitAssistant,
//     //removeThread,
//     setLastMessageId,
//     messageItems,
//     lastMessageId,
//     inputRef,
//     messageRef,
//     resetScroll,
//     sessionId,
//     threadId,
//     setMessageItems,
//   };
// };

// export default useDialogueState;
export {}
