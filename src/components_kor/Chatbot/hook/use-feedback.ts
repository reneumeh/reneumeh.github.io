// import { useState } from 'react';
// import useAppStore, { Message } from '../util/appstore';

// export const useFeedback = () => {
//   const [isFeedbackScreenOpen, setIsFeedbackScreenOpen] = useState(false);
//   const [feedbackInput, setFeedbackInput] = useState('');
//   const [feedback, setFeedback] = useState({
//     feedbackId: undefined,
//     feedbackThread: undefined,
//     feedbackMessage: undefined,
//   });

//   const setThreadId = useAppStore((state) => state.setThreadId);

//   const handleFeedbackSubmit = async (threadId) => {
//     const updatedFeedback = { ...feedback, feedbackMessage: feedbackInput };
//     setFeedback(updatedFeedback);
//     setIsFeedbackScreenOpen(false);

//     try {
//       const response = await fetch('/api/service/assistant/negativeFeedback', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           threadId: updatedFeedback.feedbackThread,
//           messageId: updatedFeedback.feedbackId,
//           feedback: updatedFeedback.feedbackMessage,
//         }),
//       });

//       if (response.ok) {
//         console.log('Feedback submitted successfully');
//       } else {
//         console.error('Error submitting feedback', await response.json());
//       }
//     } catch (error) {
//       console.error('Error submitting feedback', error);
//     }

//     setFeedbackInput('');
//     setFeedback({ feedbackId: '', feedbackMessage: '', feedbackThread: '' });
//   };

//   return {
//     isFeedbackScreenOpen,
//     setIsFeedbackScreenOpen,
//     feedbackInput,
//     setFeedbackInput,
//     feedback,
//     setFeedback,
//     handleFeedbackSubmit,
//   };
// };

export {}