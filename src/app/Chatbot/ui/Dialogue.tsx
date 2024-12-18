'use client';

import styled from 'styled-components';
import { Center, Icon as ChakraIcon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import {
  MdPerson,
  MdSettings,
  MdSend,
  MdOutlineThumbUp,
  MdOutlineThumbDown,
  MdThumbDown,
  MdThumbUp,
  MdRefresh,
} from 'react-icons/md';

import SinusodialLoader from './SinusodialLoader';

import { getUniqueId } from '../util/utils';
import Markdown from 'react-markdown'
import { IconButton } from '@chakra-ui/react';
import useDialogueState from '../hook/use-dialogue-state';
import { useSuggestions } from '../hook/use-suggestions';
import { suggestedQuestionsList1, suggestedQuestionsList2 } from '../config/suggestion-questions';
import { useFeedback } from '../hook/use-feedback';
import { useState, useEffect } from 'react';
import useAppStore from '../util/appstore';
import { FeedbackScreen } from './FeedbackScreen';
import { Message as MessageType } from '../util/appstore';
import MyIcon from './MyIcon';
import { PALETTE } from '@/app/utils/theme';

type dialogueProps = {
  isOpen: boolean;
  isExpanded: boolean;
  isMobile: boolean;
  isMounted:boolean;
  setIsMounted: (isMounted: boolean) => void;
}

const Dialogue = ({ isOpen, isExpanded, isMobile, isMounted, setIsMounted }: dialogueProps) => {
  const threadId = useAppStore((state) => state.threadId);

  const {
    suggestedQuestions,
    suggestedQuestion1,
    suggestedQuestion2,
    setSuggestedQuestions,
    setsuggestedQuestion1,
    setsuggestedQuestion2,
  } = useSuggestions();

  const {
    isFeedbackScreenOpen,
    setIsFeedbackScreenOpen,
    feedbackInput,
    setFeedbackInput,
    setFeedback,
    handleFeedbackSubmit,
  } = useFeedback();

  const {
    messageItems,
    inputRef,
    loading,
    lastMessageId,
    submitAssistant,
    setLastMessageId,
    resetScroll,
    messageRef,
    followUpQuestion,
    setInputText,
    inputText,
    refreshConversation
  } = useDialogueState({ isMounted, setIsMounted });

  const handleGoodResponse = (message: MessageType) => {
    message.good_clicked = true;
    setLastMessageId('');
    resetScroll();
  };

  const handleBadResponse = async (message: MessageType) => {
    message.bad_clicked = true;
    setIsFeedbackScreenOpen(true);
    setFeedback({ feedbackThread: threadId, feedbackId: message.id, feedbackMessage: '' });
    setLastMessageId('');
    resetScroll();
  };

  const handleSuggestedQuestion = (question: string | undefined) => {
    if (!loading) {
      const updatedQuestion = question || "";
      setInputText(updatedQuestion);
      submitAssistant(updatedQuestion);
      setSuggestedQuestions(false);
    }
  };

  useEffect(() => {
    if (!isOpen || !isExpanded) {
      setIsFeedbackScreenOpen(false);
    }
  }, [isOpen, isExpanded, setIsFeedbackScreenOpen])

  return (
    <DialogueWrapper $isExpanded={isExpanded} $isMobile={isMobile}>
      {isFeedbackScreenOpen && (
        <FeedbackScreenWrapper $isMobile={isMobile} className="animated fadeInLeft">
          <FeedbackScreen 
          feedbackInput= {feedbackInput} 
          setFeedbackInput= {setFeedbackInput} 
          threadId= {threadId || ""}
          handleFeedbackSubmit= {handleFeedbackSubmit}
           />
          </FeedbackScreenWrapper>
      )}
      <MessagesArea ref={messageRef} $suggestedQuestions={suggestedQuestions} $isMobile={isMobile}>
        {messageItems?.map((message) => (
          <div key={message.id} className="logo-message">
            {message.role === 'assistant' && (
              <MyIcon
                fontSize={'2rem'}
                sx={{
                  marginRight: '0.5rem',
                }}
              />
            )}
            {message.role === 'function' && (
              <ChakraIcon
                as={MdSettings}
                fontSize={'2rem'}
                sx={{
                  marginRight: '0.5rem',
                }}
              />
            )}
            {message.role === 'user' && (
              <ChakraIcon
                as={MdPerson}
                fontSize={'2rem'}
                sx={{
                  marginRight: '0.5rem',
                }}
              />
            )}
            <Message>
              <Role>
                <span className="roles">
                  {message.role === 'user' ? 'USER' : 'GPT ME'} •{' '}
                </span>
                <span className="time">
                  {('0' + new Date(message.created_at * 1000).getHours()).slice(-2)} :
                  {('0' + new Date(message.created_at * 1000).getMinutes()).slice(-2)}
                </span>
              </Role>
              {message.content && <Markdown>{message.content}</Markdown>}
              {!!followUpQuestion && message.id === lastMessageId && (
                <SuggestedQuestion
                  key={getUniqueId()}
                  style={{ marginLeft: '0px' }}
                  onClick={() => handleSuggestedQuestion(followUpQuestion)}
                >
                  {followUpQuestion}
                </SuggestedQuestion>
              )}
              {message.role === 'assistant' &&
                (message.good_clicked || message.bad_clicked || message.id === lastMessageId) && (
                  <Rating $goodClicked={message.good_clicked || false} $badClicked={message.bad_clicked || false}>
                    <IconButton
                      className="rating good-response"
                      aria-label="Good Response"
                      icon={message.good_clicked ? <MdThumbUp /> : <MdOutlineThumbUp />}
                      onClick={() => {
                        handleGoodResponse(message);
                      }}
                      marginRight={'0.3rem'}
                      _hover= {{ bg: 'transparent' }}
                      size={"1.5rem"}
                    />
                    <IconButton
                      className="rating bad-response"
                      aria-label="Bad Response"
                      icon={message.bad_clicked ? <MdThumbDown /> : <MdOutlineThumbDown />}
                      onClick={() => {
                        handleBadResponse(message);
                      }}
                      marginRight={'0.3rem'}
                      _hover= {{ bg: 'transparent' }}
                      size={"1.5rem"}
                    />
                  </Rating>
                )}
            </Message>
          </div>
        ))}
        {loading && <SinusodialLoader />}
      </MessagesArea>
      {suggestedQuestions && (
        <SuggestedQuestionsArea>
          <SuggestedQuestion
            onClick={() => {
              handleSuggestedQuestion(suggestedQuestion1);
              setsuggestedQuestion1(
                suggestedQuestionsList1[Math.floor(Math.random() * suggestedQuestionsList1.length)]
              );
            }}
          >
            {suggestedQuestion1}
          </SuggestedQuestion>
          <SuggestedQuestion
            onClick={() => {
              handleSuggestedQuestion(suggestedQuestion2);
              setsuggestedQuestion2(
                suggestedQuestionsList2[Math.floor(Math.random() * suggestedQuestionsList2.length)]
              );
            }}
          >
            {suggestedQuestion2}
          </SuggestedQuestion>
        </SuggestedQuestionsArea>
      )}
      <Center as="form" w="97%" p={'0.3rem'}>
        <InputGroup alignItems={'center'}>
          <Input
            ref={inputRef}
            placeholder="Type in message"
            disabled={loading}
            fontFamily={'League-Spartan-minor'}
            fontSize={'1rem'}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setSuggestedQuestions(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                submitAssistant(inputText);
              }
            }}
            _hover={{ borderColor: `${PALETTE.PRIMARY.DEFAULT}`, boxShadow: 'none' }}
            _active={{ borderColor: `${PALETTE.PRIMARY.DEFAULT}`, boxShadow: 'none' }}
            _focus={{ borderColor: `${PALETTE.PRIMARY.DEFAULT}`, boxShadow: 'none' }}
            bg={PALETTE.SECONDARY.LIGHT}
            width={'100%'}
            height={'1.5rem'}
            padding={'0.5rem'}
            pr="5rem"
            overflow="hidden"
            sx={{
              '&::-webkit-scrollbar': {
                width: '0px',
                background: 'transparent',
              },
            }}
          />
          <InputRightElement>
            <IconButton
              aria-label="refresh conversation"
              icon={<MdRefresh size={'1.2rem'}/>}
              onClick={() => {refreshConversation()}}
              backgroundColor= {PALETTE.PRIMARY.LIGHT}
              _hover={{ bg: `${PALETTE.PRIMARY.DEFAULT}` }}
              _active={{ bg: `${PALETTE.PRIMARY.DEFAULT}` }}
              _focus={{ boxShadow: 'none' }}
              color= {PALETTE.BLACK}
              cursor={'pointer'}
              padding={'0.3rem'}
              size={'0.5rem'}
              margin={'0.3rem 0.3rem 0 0'}
            />
            <IconButton
              aria-label="send message"
              icon={<MdSend />}
              isDisabled={loading || inputText.length === 0}
              onClick={() => submitAssistant(inputText)}
              backgroundColor= {PALETTE.PRIMARY.LIGHT}
              _hover={{ bg: `${PALETTE.PRIMARY.DEFAULT}` }}
              _active={{ bg: `${PALETTE.PRIMARY.DEFAULT}` }}
              _focus={{ boxShadow: 'none' }}
              color= {PALETTE.BLACK}
              cursor={'pointer'}
              padding={'0.5rem'}
              size={'0.5rem'}
              margin={'0.3rem 0.3rem 0 0'}
            />
          </InputRightElement>
        </InputGroup>
      </Center>
    </DialogueWrapper>
  );
};

export default Dialogue;

const DialogueWrapper = styled.div<{ $isExpanded: boolean, $isMobile: boolean }>`
  transition: ease all 0.7s;
  background-color: ${PALETTE.WHITE};
  color: black;
  height: ${(props) => (props.$isMobile ? (props.$isExpanded ? '80vh' : '0rem') : props.$isExpanded ? '25.5rem' : '0rem')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: grid;
  @keyframes fadeInLeft {
    from {
      transform: translate3d(140px, 0, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  .animated {
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }

  .fadeInLeft {
    opacity: 0;
    animation-name: fadeInLeft;
  }
`;

const MessagesArea = styled.div<{ $suggestedQuestions: boolean, $isMobile: boolean }>`
  height: ${(props) => (props.$isMobile ? (props.$suggestedQuestions ? '62vh' : '70vh') : props.$suggestedQuestions ? '18rem' : '22rem')};
  width: ${(props) => (props.$isMobile ?  '98vw' : '19.5rem' )};
  overflow-y: scroll;
  overflow-wrap: break-word;
  line-height: 1rem;
  margin-left: 4px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${PALETTE.PRIMARY.DEFAULT};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${PALETTE.SECONDARY.LIGHT};
    border-radius: 5px;
  }
  .logo-message {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const Message = styled.div`
  font-size: 0.9rem;

  a {
    margin: 2px;
    color: ${PALETTE.PRIMARY.DEFAULT};
    cursor: pointer;
  }

  .rating {
    background-color: ${PALETTE.WHITE};
  }

  p {
    margin: auto;
  }
`;

const Role = styled.div`
  .time {
    font-size: 0.8em;
  }
  .roles {
    font-size: 1em;
    font-weight: 600;
  }
`;

const Clickable = styled.div`
  margin: 2px;
  color: ${PALETTE.PRIMARY.DEFAULT};
  cursor: pointer;
`;

export const SuggestedQuestion = styled.div`
  position: relative;
  background-color: ${PALETTE.SECONDARY.LIGHT};
  width: fit-content;
  margin: 4px;
  padding: 5px 7px;
  box-shadow: -5px 5px ${PALETTE.PRIMARY.DARK};
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: ${PALETTE.SECONDARY.DEFAULT};
  }
`;

const SuggestedQuestionsArea = styled.div`
  display: flex;
  justify-self: start;
  position: relative;
  flex-direction: column;
  margin-left: 4px;
  flex-grow: 10;
  justify-content: start;
`;

const Rating = styled.div<{ $goodClicked: boolean; $badClicked: boolean }>`
  transition: all 2s smooth;
  .good-response {
    display: ${(props) => (!props.$badClicked ? 'intial' : 'none')};
    color: ${(props) => (props.$goodClicked ? '#00ff00' : '')};
    padding-right: ${(props) => (!props.$goodClicked ? '0.3rem' : 'initial')};
    border: none;
    margin-top: 0.3rem;

    &:hover {
      color: #00ff00;
      cursor: ${(props) => (!props.$goodClicked ? 'pointer' : 'initial')};
    }
  }

  .bad-response {
    display: ${(props) => (!props.$goodClicked ? 'initial' : 'none')};
    color: ${(props) => (props.$badClicked ? '#ff0000' : '')};
    padding-left: ${(props) => (!props.$badClicked ? '0.3rem' : 'initial')};
    margin-top: 0.3rem;
    border: none;

    &:hover {
      color: #ff0000;
      cursor: ${(props) => (!props.$badClicked ? 'pointer' : 'initial')};
    }
  }
`;

const FeedbackScreenWrapper = styled.div<{ $isMobile: boolean }>`
  background-color: ${PALETTE.WHITE};
  position: absolute;
  height: ${(props) => (props.$isMobile ? '80vh' : '25.5rem')};
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  .question-area {
    margin-left: 0.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-flow: row wrap;
  }
  p {
    font-size: 0.9rem;
    margin: 1rem 1rem 0.7rem 1rem;
    line-height: 1.2rem;
  }
`
