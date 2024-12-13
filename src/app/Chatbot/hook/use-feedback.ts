import { useState } from 'react';
import emailjs from '@emailjs/browser';
import useAppStore from '../util/appstore';
import { toast } from 'react-toastify';

export const useFeedback = () => {
  const [isFeedbackScreenOpen, setIsFeedbackScreenOpen] = useState(false);
  const [feedbackInput, setFeedbackInput] = useState('');
  const [feedback, setFeedback] = useState({
    feedbackId: "",
    feedbackThread: "",
    feedbackMessage: "",
  });
  const messages = useAppStore.getState().messages

  const handleFeedbackSubmit = async () => {
    const updatedFeedback = { ...feedback, feedbackMessage: feedbackInput };
    setFeedback(updatedFeedback);
    setIsFeedbackScreenOpen(false);

    const templateParams = {
        messages: JSON.stringify(messages),
        messageId: updatedFeedback.feedbackId,
        feedback: updatedFeedback.feedbackMessage, 
    }
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_OPTIONS as string)
    await emailjs
    .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_FEEDBACK_TEMPLATE_ID as string,
        templateParams,
    ).then(() =>
      {toast('Feedback sent successfully!')}
    )

    setFeedbackInput('');
    setFeedback({ feedbackId: '', feedbackMessage: '', feedbackThread: '' });
  };

  return {
    isFeedbackScreenOpen,
    setIsFeedbackScreenOpen,
    feedbackInput,
    setFeedbackInput,
    feedback,
    setFeedback,
    handleFeedbackSubmit,
  };
};
