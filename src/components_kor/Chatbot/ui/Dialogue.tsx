// 'use client';

// import styled from 'styled-components';
// import { Center, Icon as ChakraIcon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

// import {
//   MdPerson,
//   MdSettings,
//   MdSend,
//   MdOutlineThumbUp,
//   MdOutlineThumbDown,
//   MdThumbDown,
//   MdThumbUp,
//   MdSentimentDissatisfied,
// } from 'react-icons/md';
// import Markdown from 'react-markdown';

// import SinusodialLoader from './SinusodialLoader';
// import ConjunctionBox from './ConjunctionBox';
// import CompanyIcon from './CompanyIcon';

// import { getUniqueId, truncate } from '../util/utils';

// import { IconButton } from '@chakra-ui/react';
// import { PrimaryButton } from '@/shared/ui/button/button';
// import { conjunctionToolList } from '../util/utils';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/shared/redux/config/configureStore';
// import useDialogueState from '../hook/use-dialogue-state';
// import { useSuggestions } from '../hook/use-suggestions';
// import { suggestedQuestionsList1, suggestedQuestionsList2 } from '../config/suggestion-questions';
// import { useFeedback } from '../hook/use-feedback';
// import { useState, useRef } from 'react';
// import useAppStore from '../util/appstore';
// import { FeedbackScreen } from './FeedbackScreen';

// import { Message as MessageType } from '../util/appstore';
// import { useFocus } from '../hook/use-focus';
// import SessionScreen from './SessionScreen';

// type dialogueProps = {
//   isOpen: boolean;
//   isExpanded: boolean;
//   sessionId: number;
//   loading: boolean;
//   setLoading: (loading: boolean) => void;
// }

// const Dialogue = ({ isOpen, isExpanded, sessionId, loading, setLoading }: dialogueProps) => {
//   console.log(sessionId)
//   const { user, login } = useSelector((state: RootState) => state.login);
//   const [inputText, setInputText] = useState('');
//   const [isMounted, setMounted] = useState(false);

//   const {
//     suggestedQuestions,
//     suggestedQuestion1,
//     suggestedQuestion2,
//     setSuggestedQuestions,
//     setsuggestedQuestion1,
//     setsuggestedQuestion2,
//   } = useSuggestions();

//   const {
//     isFeedbackScreenOpen,
//     setIsFeedbackScreenOpen,
//     feedbackInput,
//     setFeedbackInput,
//     feedback,
//     setFeedback,
//     handleFeedbackSubmit,
//   } = useFeedback();

//   const {
//     messageItems,
//     inputRef,
//     lastMessageId,
//     submitAssistant,
//     setLastMessageId,
//     resetScroll,
//     messageRef,
//     threadId,
//     setMessageItems,
//   } = useDialogueState({ isMounted, setMounted, inputText, setInputText, sessionId, loading, setLoading });
//   console.log(messageItems)

//   const { focus_satellites, focus_conjunction, focus_satellite } = useFocus();

//   const handleGoodResponse = (item: MessageType) => {
//     const updatedItem = { ...item, good_clicked: true };
//     const updatedMessageItems = messageItems.map((msg) =>
//       msg.id === item.id ? updatedItem : msg
//     );
//     setMessageItems(updatedMessageItems);
//     resetScroll();
//     setLastMessageId('');
//   };

//   const handleBadResponse = async (item: MessageType) => {
//     const updatedItem = { ...item, bad_clicked: true };
//     const updatedMessageItems = messageItems.map((msg) =>
//       msg.id === item.id ? updatedItem : msg
//     );
//     setMessageItems(updatedMessageItems);
//     setIsFeedbackScreenOpen(true);
//     resetScroll();
//     setFeedback({ feedbackThread: threadId, feedbackId: item.id, feedbackMessage: '' });
//     setLastMessageId('');
//   };

//   const handleSuggestedQuestion = (question) => {
//     if (!loading) {
//       setInputText(question);
//       submitAssistant(question);
//       setSuggestedQuestions(false);
//     }
//   };

//   return (
//     <DialogueWrapper isExpanded={isExpanded}>
//       {isFeedbackScreenOpen && (
//         <FeedbackScreenWrapper className="animated animatedFadeInUp fadeInLeft">
//           <FeedbackScreen 
//           feedbackInput= {feedbackInput} 
//           setFeedbackInput= {setFeedbackInput} 
//           threadId= {threadId}
//           handleFeedbackSubmit= {handleFeedbackSubmit}
//            />
//           </FeedbackScreenWrapper>
//       )}
//       <MessagesArea ref={messageRef} suggestedQuestions={suggestedQuestions}>
//         {messageItems?.map((item) => (
//           <div key={item.id} className="logo-message">
//             {item.role === 'assistant' && (
//               <CompanyIcon
//                 fontSize={'2rem'}
//                 sx={{
//                   marginRight: '0.5rem',
//                 }}
//               />
//             )}
//             {item.role === 'function' && (
//               <ChakraIcon
//                 as={MdSettings}
//                 fontSize={'2rem'}
//                 sx={{
//                   marginRight: '0.5rem',
//                 }}
//               />
//             )}
//             {item.role === 'user' && (
//               <ChakraIcon
//                 as={MdPerson}
//                 fontSize={'2rem'}
//                 sx={{
//                   marginRight: '0.5rem',
//                 }}
//               />
//             )}
//             <Message>
//               <Role>
//                 <span className="roles">
//                   {item.role === 'user' ? (login ? truncate(user.nickname, 10) : 'USER') : 'SPACEBOT'} •{' '}
//                 </span>
//                 <span className="time">
//                   {('0' + new Date(item.created_at * 1000).getHours()).slice(-2)} :
//                   {('0' + new Date(item.created_at * 1000).getMinutes()).slice(-2)}
//                 </span>
//               </Role>
//               {item.content && <Markdown>{item.content}</Markdown>}
//               {item.content.includes('SPACEMAP') && (
//                 <a href="https://spacemap42.com" target="_blank">
//                   Visit SPACEMAP website
//                 </a>
//               )}
//               {item.tool_output &&
//                 item.tool_output.map((tool_results) => {
//                   if (
//                     conjunctionToolList.includes(tool_results.tool_name) &&
//                     tool_results.output.conjunctions
//                   ) {
//                     return (
//                       <ConjunctionBox
//                         conjunction_data={tool_results.output.conjunctions}
//                         onClicker={focus_conjunction}
//                       />
//                     );
//                   }
//                   if (
//                     conjunctionToolList.includes(tool_results.tool_name) &&
//                     !tool_results.output.conjunctions
//                   ) {
//                     return (
//                     <p>There were no conjunctions involving this satellite</p>
//                     );
//                   }
//                   if (
//                     !conjunctionToolList.includes(tool_results.tool_name) &&
//                     tool_results.tool_name == "get_single_satellite_norad_id" && tool_results.output
//                   ) {
//                     return (
//                       <Clickable onClick={() => focus_satellite(tool_results.output)}>
//                         View {tool_results.tool_args.satelliteName}
//                       </Clickable>
//                     );
//                   }
//                   if (
//                     !conjunctionToolList.includes(tool_results.tool_name) &&
//                     tool_results.tool_name ==="get_multiple_satellites" && tool_results.output[0].id
//                   ) {
//                     return (
//                       <Clickable onClick={() => focus_satellites(tool_results.output.map(obj => obj.id), tool_results.tool_args)}>
//                         View Satellites
//                       </Clickable>
//                     );
//                   }
//                   return null;
//                 })}
//               {item.followup_question && item.id === lastMessageId && (
//                 <SuggestedQuestion
//                   key={getUniqueId()}
//                   style={{ marginLeft: '0px' }}
//                   onClick={() => handleSuggestedQuestion(item.followup_question)}
//                 >
//                   {item.followup_question}
//                 </SuggestedQuestion>
//               )}
//               {item.role === 'assistant' &&
//                 (item.good_clicked || item.bad_clicked || item.id === lastMessageId) && (
//                   <Rating goodClicked={item.good_clicked} badClicked={item.bad_clicked}>
//                     <IconButton
//                       className="rating good-response"
//                       aria-label="Good Response"
//                       icon={item.good_clicked ? <MdThumbUp /> : <MdOutlineThumbUp />}
//                       onClick={() => {
//                         handleGoodResponse(item);
//                       }}
//                       marginRight={'0.3rem'}
//                       _hover= {{ bg: 'transparent' }}
//                       size={"1.5rem"}
//                     />
//                     <IconButton
//                       className="rating bad-response"
//                       aria-label="Bad Response"
//                       icon={item.bad_clicked ? <MdThumbDown /> : <MdOutlineThumbDown />}
//                       onClick={() => {
//                         handleBadResponse(item);
//                       }}
//                       marginRight={'0.3rem'}
//                       _hover= {{ bg: 'transparent' }}
//                       size={"1.5rem"}
//                     />
//                   </Rating>
//                 )}
//             </Message>
//           </div>
//         ))}
//         {loading && <SinusodialLoader />}
//       </MessagesArea>
//       {suggestedQuestions && (
//         <SuggestedQuestionsArea>
//           <SuggestedQuestion
//             onClick={() => {
//               handleSuggestedQuestion(suggestedQuestion1);
//               setsuggestedQuestion1(
//                 suggestedQuestionsList1[Math.floor(Math.random() * suggestedQuestionsList1.length)]
//               );
//             }}
//           >
//             {suggestedQuestion1}
//           </SuggestedQuestion>
//           <SuggestedQuestion
//             onClick={() => {
//               handleSuggestedQuestion(suggestedQuestion2);
//               setsuggestedQuestion2(
//                 suggestedQuestionsList2[Math.floor(Math.random() * suggestedQuestionsList2.length)]
//               );
//             }}
//           >
//             {suggestedQuestion2}
//           </SuggestedQuestion>
//         </SuggestedQuestionsArea>
//       )}
//       <Center as="form" onSubmit={submitAssistant} w="100%" p={'0.3rem'}>
//         <InputGroup alignItems={'center'}>
//           <Input
//             ref={inputRef}
//             placeholder="Type in message"
//             disabled={loading}
//             value={inputText}
//             onChange={(e) => {
//               setInputText(e.target.value);
//               setSuggestedQuestions(false);
//             }}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter' && !e.shiftKey) {
//                 submitAssistant(inputText);
//               }
//             }}
//             borderRadius="25px"
//             _active={{ borderColor: "#F8C81D", boxShadow: 'none' }}
//             _focus={{ borderColor: "#F8C81D", boxShadow: 'none' }}
//             bg="#D9D9D9"
//             // isFullWidth
//             width={'100%'}
//             height={'2.5rem'}
//             padding={'0.5rem'}
//             pr="2.5rem"
//             pb="9px"
//             overflow="hidden"
//             sx={{
//               '&::-webkit-scrollbar': {
//                 width: '0px',
//                 background: 'transparent',
//               },
//             }}
//           />
//           <InputRightElement>
//             <IconButton
//               aria-label="send message"
//               icon={<MdSend />}
//               isDisabled={loading || inputText.length === 0}
//               onClick={() => submitAssistant(inputText)}
//               backgroundColor="#F8C81D"
//               _hover={{ bg: '#F8C81D' }}
//               _active={{ bg: '#F8C81D' }}
//               _focus={{ boxShadow: 'none' }}
//               color="#000"
//               sx={{ transform: 'rotate(-45deg)' }}
//               cursor={'pointer'}
//               borderRadius={'50%'}
//               padding={'0.5rem'}
//               size={'0.5rem'}
//             />
//           </InputRightElement>
//         </InputGroup>
//       </Center>
//     </DialogueWrapper>
//   );
// };

// export default Dialogue;

// const DialogueWrapper = styled.div<{ isExpanded: boolean }>`
//   transition: ease all 1s;
//   background-color: #fff;
//   color: black;
//   height: 25.5rem;
//   border-radius: 0px 0px 20px 20px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   display: ${(props) => (props.isExpanded ? 'grid' : 'none')};
//   @keyframes fadeInLeft {
//     from {
//       transform: translate3d(140px, 0, 0);
//     }

//     to {
//       transform: translate3d(0, 0, 0);
//       opacity: 1;
//     }
//   }

//   .animated {
//     animation-duration: 0.5s;
//     animation-fill-mode: both;
//   }

//   .animatedFadeInUp {
//     opacity: 0;
//   }

//   .fadeInLeft {
//     opacity: 0;
//     animation-name: fadeInLeft;
//   }
// `;

// const MessagesArea = styled.div<{ suggestedQuestions: boolean }>`
//   height: ${(props) => (props.suggestedQuestions ? '15rem' : '20rem')};
//   overflow-y: scroll;
//   overflow-wrap: break-word;
//   line-height: 1rem;
//   width: 97%;
//   margin-left: 4px;
//   &::-webkit-scrollbar {
//     width: 5px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: #f8c81d;
//     border-radius: 5px;
//   }
//   &::-webkit-scrollbar-track {
//     background-color: #ddd;
//     border-radius: 5px;
//   }
//   .logo-message {
//     display: flex;
//     margin-top: 5px;
//     margin-bottom: 5px;
//   }
// `;

// const Message = styled.div`
//   font-size: 0.9rem;

//   a {
//     margin: 2px;
//     color: #edc844;
//     cursor: pointer;
//   }

//   .rating {
//     background-color: #ffffff;
//   }
// `;

// const StyledInput = styled.div`
//   & .chakra-input {
//     scrollbar-width: none;
//   }

//   .chakra-input__inner {
//     border-radius: 35px;
//     scrollbar-width: none;
//   }

//   & .chakra-input__group:focus-within {
//     border-color: #edc844;
//   }
// `;

// const Role = styled.div`
//   .time {
//     font-size: 0.8em;
//   }
//   .roles {
//     font-size: 1em;
//     font-weight: 600;
//   }
// `;

// const Clickable = styled.div`
//   margin: 2px;
//   color: #edc844;
//   cursor: pointer;
// `;

// export const SuggestedQuestion = styled.div`
//   position: relative;
//   background-color: #ddd;
//   width: fit-content;
//   margin: 4px;
//   font-family: helvetica;
//   padding: 5px 7px;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 0.9rem;
//   &:hover {
//     background-color: #ccc;
//   }
// `;

// const SuggestedQuestionsArea = styled.div`
//   display: flex;
//   justify-self: start;
//   position: relative;
//   flex-direction: column;
//   margin-left: 4px;
//   flex-grow: 10;
//   justify-content: start;
// `;

// const Rating = styled.div<{ goodClicked: boolean; badClicked: boolean }>`
//   transition: all 2s smooth;
//   .good-response {
//     display: ${(props) => (!props.badClicked ? 'intial' : 'none')};
//     color: ${(props) => (props.goodClicked ? '#00ff00' : '')};
//     padding-right: ${(props) => (!props.goodClicked ? '0.3rem' : 'initial')};
//     margin-top: 0.3rem;

//     &:hover {
//       color: #00ff00;
//       cursor: ${(props) => (!props.goodClicked ? 'pointer' : 'initial')};
//     }
//   }

//   .bad-response {
//     display: ${(props) => (!props.goodClicked ? 'initial' : 'none')};
//     color: ${(props) => (props.badClicked ? '#ff0000' : '')};
//     padding-left: ${(props) => (!props.badClicked ? '0.3rem' : 'initial')};
//     margin-top: 0.3rem;

//     &:hover {
//       color: #ff0000;
//       cursor: ${(props) => (!props.badClicked ? 'pointer' : 'initial')};
//     }
//   }
// `;

// const FeedbackScreenWrapper = styled.div`
//   background-color: #fff;
//   position: absolute;
//   height: 25.5rem;
//   border-radius: 0px 0px 20px 20px;
//   overflow: hidden;
//   z-index: 999;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   div {
//     margin-left: 0.5rem;
//     display: flex;
//     flex-flow: row wrap;
//   }
//   .feedback.button {
//     color: black;
//     margin-top: 1rem;
//     font-size: 0.9rem;
//   }
//   p {
//     font-size: 0.9rem;
//     margin: 1rem 1rem 0.7rem 1rem;
//     line-height: 1.2rem;
//   }
// `
export {}