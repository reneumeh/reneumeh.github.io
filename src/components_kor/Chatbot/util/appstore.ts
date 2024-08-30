// import { create } from 'zustand'
// import { persist, createJSONStorage } from 'zustand/middleware'
// import { getUniqueId } from './utils';
// import { produce } from 'immer';

// export type ToolOutput = {
//     tool_call_id: number;
//     tool_name: string;
//     tool_args: any;
//     output: any;
// }
// export type Message = {
//     id: string; 
//     content: string;
//     created_at: number;
//     role: string;
//     good_clicked?: boolean;
//     bad_clicked?: boolean;
//     tool_output?: ToolOutput[];
//     followup_question?: string;
// }

// type Session = {
//     messages: Message[];
//     threadId: string;
//     runId: string;
//     sessionId: number;
//     sessionName?: string;
// }

// interface AppState {
//     sessions: Session[];
//     addMessage: (currentSessionId: number, newMessage: Message ) => void;
//     clearMessages: (currentSessionId: number) => void;
//     setThreadId: (currentSessionId: number, id: string) => void;
//     setRunId: (currentSessionId: number, id: string) => void;
//     setSessionName: (currentSessionId: number, name: string) => void;
//     initializeSession: () => number;
//     deleteSession: (sessionId: number) => void;
// }

// export const APP_STORAGE_KEY = 'colabot-storage'

// const useAppStore = create<AppState>()(
//     persist(
//         (set, get) => ({
//             sessions: [],

//             addMessage: (currentSessionId, newMessage ) => {
//                 const sessions = get().sessions;
//                 const session = sessions.find(({ sessionId }) => sessionId === currentSessionId);
                
//                 if (session) {
//                     const messages = session.messages.slice(0);
//                     messages.push(newMessage);

//                     set({
//                         sessions: produce(sessions, draft => {
//                             const targetSession = draft.find(({ sessionId }) => sessionId === currentSessionId);
//                             if (targetSession) {
//                                 targetSession.messages = messages;
//                             }
//                         }),
//                     });
//                 }
//             },

//             clearMessages: (currentSessionId) => {
//                 set({
//                     sessions: produce(get().sessions, draft => {
//                         const session = draft.find(({ sessionId }) => sessionId === currentSessionId);
//                         if (session) {
//                             session.messages = [];
//                         }
//                     }),
//                 });
//             },

//             setThreadId: (currentSessionId, id) => {
//                 set({
//                     sessions: produce(get().sessions, draft => {
//                         const session = draft.find(({ sessionId }) => sessionId === currentSessionId);
//                         if (session) {
//                             session.threadId = id;
//                         }
//                     }),
//                 });
//             },

//             setSessionName: (currentSessionId, name) => {
//                 set({
//                     sessions: produce(get().sessions, draft => {
//                         const session = draft.find(({ sessionId }) => sessionId === currentSessionId);
//                         if (session) {
//                             session.sessionName = name;
//                         }
//                     }),
//                 });
//             },

//             setRunId: (currentSessionId, id) => {
//                 set({
//                     sessions: produce(get().sessions, draft => {
//                         const session = draft.find(({ sessionId }) => sessionId === currentSessionId);
//                         if (session) {
//                             session.runId = id;
//                         }
//                     }),
//                 });
//             },

//             initializeSession: () => {
//                 const newSession = {
//                     sessionId: new Date().getTime(),
//                     messages: [],
//                     threadId: '',
//                     runId: '',
//                     sessionName: 'Empty Chat',
//                 };

//                 set({
//                     sessions: [...get().sessions, newSession]
//                 });
//                 return newSession.sessionId
//             },

//             deleteSession: (sessionId) => {
//                 set({
//                     sessions: produce(get().sessions, draft => {
//                         const index = draft.findIndex(({ sessionId: id }) => id === sessionId);
//                         if (index !== -1) {
//                             draft.splice(index, 1); 
//                         }
//                     }),
//                 });
//             },

//         }),
//         {
//             name: APP_STORAGE_KEY,
//             storage: createJSONStorage(() => localStorage),
//             version: 1,
//         }
//     )
// )

// export default useAppStore;

export {}