// import { useState } from "react";
// import useAppStore from "../util/appstore";
// import { deleteThread } from "../api/delete-thread";

// export const useSessionState = ( setAreYouSure: (areYouSure: boolean) => void ) =>{
//     const sessions = useAppStore((state) => state.sessions);

//     const deleteSession = useAppStore((state) => state.deleteSession);
//     const initializeSession = useAppStore((state) => state.initializeSession);

//     const removeThread = async (session) => {
//         const threadId = session.threadId
//         await deleteThread(threadId)

//         // const startingMessage = {
//         //   id: getUniqueId(),
//         //   created_at: Math.floor(new Date().getTime() / 1000),
//         //   role: 'assistant',
//         //   content:
//         //     'Hello, my name is SPACEBOT. I am here to answer your questions about SPACEMAP and satellite collisions. How can I help you today?',
//         // };
//         // setMessageItems((prev) => [...prev, startingMessage]);
//         // addMessage(startingMessage);
//     };

//     const handleDelete = (selectedSession: number) => {
//         const sessionToDelete = sessions.find((session) => session.sessionId === selectedSession);
//         removeThread(sessionToDelete)
//         if (sessionToDelete) {
//             deleteThread(sessionToDelete.threadId);
//             deleteSession(selectedSession);
//         }
//         setAreYouSure(false)
//     };

//     return {
//         sessions,
//         handleDelete,
//         initializeSession,
//         setAreYouSure,
//     }
// }
export {}
