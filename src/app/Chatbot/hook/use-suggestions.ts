
import { useEffect, useState } from 'react';
import { suggestedQuestionsList1, suggestedQuestionsList2 } from '../config/suggestion-questions';

export const useSuggestions = () => {
  const [suggestedQuestions, setSuggestedQuestions] = useState(true);
  const [suggestedQuestion1, setsuggestedQuestion1] = useState(suggestedQuestionsList1[Math.floor(Math.random() * suggestedQuestionsList1.length)]);
  const [suggestedQuestion2, setsuggestedQuestion2] = useState(suggestedQuestionsList2[Math.floor(Math.random() * suggestedQuestionsList2.length)]);

  return {
    suggestedQuestions,
    suggestedQuestion1,
    suggestedQuestion2,
    setSuggestedQuestions,
    setsuggestedQuestion1,
    setsuggestedQuestion2,
  };
};
