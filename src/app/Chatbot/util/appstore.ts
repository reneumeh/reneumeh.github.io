import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Message = {
    id: string; 
    content: string;
    created_at: number;
    role: string;
    good_clicked?: boolean;
    bad_clicked?: boolean;
    followup_question?: string;
}

interface AppState {
    messages: Message[];
    threadId: string;
    runId: string;
    mode: number;
    addMessage: (newMessage: Message) => void;
    clearMessages: () => void;
    setThreadId: (id: string) => void;
    setRunId: (id: string) => void;
    setMode: (n: number) => void;
}

export const APP_STORAGE_KEY = 'colabot-storage'

const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            
            messages: [],
            threadId: '',
            runId: '',
            mode: 0,
            
            addMessage: (newmessage) => {
                
                let messages = get().messages.slice(0)
                messages.push(newmessage)
                
                set({
                    messages: messages
                })
            },
            clearMessages: () => set({ messages: [] }),
            setThreadId: (id) => set({ threadId: id }),
            setRunId: (id) => set({ runId: id }),
            setMode: (n) => set({ mode: n }),
            
        }),
        {
            name: APP_STORAGE_KEY,
            storage: createJSONStorage(() => localStorage),
            version: 1,
        }
    )
)

export default useAppStore