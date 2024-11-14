import { PrimaryButton } from "@/app/components/BoxButton";
import styled from "styled-components";
import { SuggestedQuestion } from "./Dialogue";
import { MdSentimentDissatisfied } from "react-icons/md";
import { Icon as ChakraIcon, Input } from '@chakra-ui/react';
import { PALETTE } from "@/app/utils/theme";

type FeedbackScreenProps = {
    feedbackInput: string,
    setFeedbackInput: (input: string) => void,
    handleFeedbackSubmit: (threadId: string) => void,
    threadId: string,
}

export const FeedbackScreen = ({ feedbackInput, setFeedbackInput, handleFeedbackSubmit, threadId }: FeedbackScreenProps) => {
    const suggestedFeedback = ["Incorrect Information", "Empty Table", "No reponse given", "Other"]
    return (
        <>
          <ChakraIcon
            as={MdSentimentDissatisfied}
            fontSize={'5rem'}
            color={'rgba(0, 0, 0, 0.6)'}
            marginTop={'1.5rem'}
          />
          <p>
            We are sorry that this response was unsatisfactory.
            <br />
            Please select/enter the problem with this response.
          </p>
          <Input
            value={feedbackInput}
            borderColor={'rgba(0,0,0,0.3)'}
            lineHeight={'2rem'}
            borderWidth={'1px'}
            onChange={(e) => {
              setFeedbackInput(e.target.value);
            }}
            fontFamily={'League-Spartan-minor'}
            width={'90%'}
            borderRadius="7px"
            placeholder="What went wrong?"
            pl={'5px'}
            mb={'0.7rem'}
            fontSize={'0.9rem'}
            _active={{ borderColor: `${PALETTE.PRIMARY.DEFAULT}`, boxShadow: 'none' }}
            _focus={{ borderColor: `${PALETTE.PRIMARY.DEFAULT}`, boxShadow: 'none' }}
          ></Input>
          <div>
            {suggestedFeedback.map((suggestion, index) => 
            <SuggestedQuestion
              key={index}
              style={{ fontSize: '0.9rem' }}
              onClick={() => {
                setFeedbackInput(suggestion);
              }}
            >
              {suggestion}
            </SuggestedQuestion>)}
          </div>
          <PrimaryButton className="feedback button" onClick={() => {handleFeedbackSubmit(threadId)}}>
            Submit Feedback
          </PrimaryButton>
          </>
    )
}
       