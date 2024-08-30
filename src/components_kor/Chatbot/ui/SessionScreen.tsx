// import React, { useState } from 'react' 
// import styled from 'styled-components'
// import { useSessionState } from '../hook/use-session-state'
// import { MdDeleteForever } from "react-icons/md";
// import { IconButton } from '@chakra-ui/react';
// import { truncate } from '../util/utils';

// type sessionScreenProps = {
//     setSessionId: (sessionId: number) => void;
//     viewAll: boolean;
//     setViewAll: (viewAll: boolean) => void;
//     areYouSure: boolean;
//     setAreYouSure: (areYouSure: boolean) => void;
// }
// const SessionScreen = ({ setSessionId, viewAll, setViewAll, areYouSure, setAreYouSure } : sessionScreenProps ) => {
//     const [ selectedSession, setSelectedSession ] = useState(0)
//     const {
//             handleDelete,
//             sessions,
//             initializeSession, } = useSessionState(setAreYouSure)

//     return (
//         <>
//         {areYouSure && 
//             <AreYouSurePopup>
//                 <div>
//                 Are you sure you want to delete this chat?
//                 <br/>
//                 <DeleteChatButton onClick={() => {handleDelete(selectedSession)}}>
//                     Delete Chat
//                 </DeleteChatButton>
//                 <CancelButton onClick={() => {setAreYouSure(false)}}>
//                     Cancel 
//                 </CancelButton>
//                 </div>
//             </AreYouSurePopup>
//         }
//         {viewAll &&
//             <ViewAllWrapper>
//             <div className='upper'>
//             {   
//                 sessions.toReversed().map((session) => (
                    
//                     <SessionButton key={session.sessionId} onClick={() => setSessionId(session.sessionId)}>
//                         <div>
//                         {truncate(session.sessionName, 60)}
//                         <IconButton
//                             className="delete-button"
//                             aria-label="delete button"
//                             icon={<MdDeleteForever size={'1.2rem'}/>}
//                             onClick={(e) => {
//                                 setSelectedSession(session.sessionId)
//                                 setAreYouSure(true); 
//                                 if (e.stopPropagation) e.stopPropagation();
//                             }}
//                             _hover= {{ color: 'red' }}
//                             margin= {'0.3rem'}
//                             />
//                         </div>
//                         <span>{new Date(session.sessionId).toLocaleString()}</span>
//                     </SessionButton>
//                 ))
//             }
//             </div>

//             <div className='lower'>
//             <NewChatButton onClick={() => {
//                 const newSessionId = initializeSession();
//                 setSessionId(newSessionId);
//             }}>
//             +
//             New Chat Session
//             </NewChatButton>
//             </div>
//             </ViewAllWrapper>
//         }
//         {!areYouSure && !viewAll && 
//             <SessionScreenWrapper> 
//             <NewChatButton onClick={() => {
//                 const newSessionId = initializeSession();
//                 setSessionId(newSessionId);
//             }}>
//                 +
//                 New Chat Session
//             </NewChatButton>

//             {   
//                 sessions.toReversed().slice(0, 3).map((session) => (
//                     <SessionButton key={session.sessionId} onClick={() => setSessionId(session.sessionId)}>
//                         <div>
//                         {truncate(session.sessionName, 60)}
//                         <IconButton
//                             className="delete-button"
//                             aria-label="delete button"
//                             icon={<MdDeleteForever size={'1.2rem'}/>}
//                             onClick={(e) => {
//                                 setSelectedSession(session.sessionId)
//                                 setAreYouSure(true); 
//                                 if (e.stopPropagation) e.stopPropagation();
//                             }}
//                             _hover= {{ color: 'red' }}
//                             margin= {'0.3rem'}
//                             />
//                         </div>
//                         <span>{new Date(session.sessionId).toLocaleString()}</span>
//                     </SessionButton>
//                 ))
//             }
//             {
//                 sessions.length > 3 &&
//                 <ViewAllButton onClick={() => {setViewAll(true)}}>View All Chats</ViewAllButton>
//             }
//         </SessionScreenWrapper>
//         }
//         </>
//     )
// }

// export default SessionScreen

// const SessionScreenWrapper = styled.div`
//   display: flex;
//   z-index: 999;
//   border-radius: 0px 0px 20px 20px;
//   position: absolute;
//   height: 25.5rem;
//   width: 100%;
//   flex-direction: column;
//   align-items: center;

//   background-color: #f8f9fa;
// `;

// const NewChatButton = styled.button`
//   background-color: #edc844;
//   width: 95%;
//   color: black;
//   height: 4.2rem;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   margin: 0.5rem auto 0.5rem auto;
  
//   &:hover {
//     background-color: #f8c81d;
//   }
// `;

// const SessionButton = styled.button`
//   display: flex;
//   flex-direction: column;
//   background-color: #ffffff;
//   color: #333;
//   border: 1px solid #ddd;
//   padding: 7px 14px;
//   border-radius: 5px;
//   width: 95%;
//   margin: 0.1rem auto 0.1rem auto;
//   text-align: left;
//   text-wrap: wrap;
//   word-wrap: break-word;
//   word-break: break-all;
//   cursor: pointer;
//   font-size: 1rem;
//   font-weight: 500;

//   div {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//   }

//   span {
//     font-weight: 100;
//     font-size: 0.7rem; 
//   }

//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

// const ViewAllButton = styled.button`
//   background-color: #ccc;
//   color: black;
//   border: none;
//   padding: 5px 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: px;
//   margin: auto;

//   &:hover {
//     background-color: #aaa;
//   }
// `;

// const AreYouSurePopup = styled.div`
//   position: fixed;
//   border-radius: 0px 0px 20px 20px;
//   width: 100%;
//   height: 25.5rem;
//   display: flex;
//   z-index: 1000;
//   align-items: center;
//   justify-content: center;
//   backdrop-filter: blur(20px);

//   div{
//     border: 1px solid #ddd;
//     padding: 1rem;
//     border-radius: 10px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     z-index: 1000;
//     width: 300px;
//     text-align: center;
//   }

// `;

// const DeleteChatButton = styled.button`
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 14px;
//   cursor: pointer;
//   margin-top: 20px;
//   margin-right: 20px; 
  
//   &:hover {
//     background-color: #c82333;
//   }
// `;

// const CancelButton = styled.button`
//   background-color: #6c757d;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 14px;
//   cursor: pointer;
//   margin-top: 10px;

//   &:hover {
//     background-color: #5a6268;
//   }
// `;

// const ViewAllWrapper = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   border-radius: 0px 0px 20px 20px;
//   height: 25.5rem;
//   width: 100%;
//   z-index: 999;
//   background-color: #f8f9fa;

//   .upper {
//     display: flex;
//     width: 100%;
//     position: absolute;
//     height: 18rem;
//     flex-direction: column;
//     overflow-y: scroll;
//     border-bottom: 1px solid rgba(0,0,0,0.2);
//      &::-webkit-scrollbar {
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
//   }

//   .lower {
//     display: flex;
//     position: fixed;
//     width: 100%;
//     padding: 1rem;
//     bottom: 0;
//     backgroundColor: white;
//     border-radius: 0px 0px 20px 20px;
//   }
// `;

export {}