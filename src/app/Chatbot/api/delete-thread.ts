
export const deleteThread = async (threadId: string) => {
    try {
        const response = await fetch('/api/assistant/removeThread', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Context-Type': 'application/json',
          },
          body: JSON.stringify({ threadId: threadId }),
        });
  
        if (!response.ok) {
          console.log('Error occured while deleting thread', response.status);
        }
      } catch (error) {
        console.log(error);
      } 
};
