
export const sendMessage = async (text: string, threadId: string | undefined, messageId: string) => {
    try {
        const thread_id = threadId || '';
  
        const response = await fetch('/api/assistant/sendMessage', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inquiry: text,
            threadId: thread_id,
            messageId: messageId,
          }),
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error occurred. Invalid Response:', response.status, errorText);
          return;
        }
  
        const result = await response.json();

        return result
    } catch (error) {
    console.log(error);
  } 
};
