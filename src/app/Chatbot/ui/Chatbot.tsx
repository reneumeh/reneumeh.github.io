import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dialogue from './Dialogue';
import useIsOpen from '../hook/use-is-open';
import useIsExpanded from '../hook/use-is-expanded';
import { Box, IconButton } from '@chakra-ui/react';
import { MdCloseFullscreen, MdHorizontalRule, MdOpenInFull } from 'react-icons/md';
import useIsMobile from '@/app/hooks/useIsMobile';
import { PALETTE } from '@/app/utils/theme';
import Image from 'next/image';

const Chatbot = () => {
  const isMobile = useIsMobile();
  const { isExpanded, setIsExpanded } = useIsExpanded();
  const { isOpen, setIsOpen } = useIsOpen();

  const onClose = () => {
    setIsOpen(false);
    setIsExpanded(false);
    };

  const onShrink = () => {
    setIsExpanded(false)
  };

  const onExpand = () => {
    setIsExpanded(true)
};



  useEffect(() => {
    if(isMobile) {
      setIsOpen(false)
     } ;
  }, [isMobile, setIsOpen]);

  return (
    <Box pointerEvents={'auto'} zIndex={100}>
          <ChatbotWrapper isMobile={isMobile} isExpanded={isExpanded} isOpen={isOpen}>
            <Header isExpanded={isExpanded} isOpen={isOpen} isMobile={isMobile} className="handle grabbable">
              <p>
                GPT ME{' '}
              </p>
              <div className="buttons">
                 {isExpanded ? (
                  <IconButton
                    cursor={'pointer'}
                    onClick={onShrink}
                    aria-label="Close Fullscreen Chatbot"
                    icon={<MdCloseFullscreen size={18} />}
                    color={ PALETTE.WHITE }
                    padding={'1px'}
                    _hover= {{ bg: PALETTE.SECONDARY.DEFAULT }}
                    bg="transparent"

                  />
                ) : (
                  <IconButton
                    cursor={'pointer'}
                    onClick={onExpand}
                    aria-label="Open Fullscreen Chatbot"
                    icon={<MdOpenInFull size={18} />}
                    color={ PALETTE.WHITE }
                    padding={'1px'}
                    _hover= {{ bg: PALETTE.SECONDARY.DEFAULT }}
                    
                    bg="transparent"
                  />
                )} 
                <IconButton
                  cursor={'pointer'}
                  onClick={onClose}
                  aria-label="Close Chatbot"
                  icon={<MdHorizontalRule size={18} />}
                  color={ PALETTE.WHITE }
                  bg="transparent"
                  marginRight={"0.3rem"}
                  _hover= {{ bg: PALETTE.SECONDARY.DEFAULT }}
                  padding={'1px'}
                  isRound
                />
              </div>
            </Header>
            <Dialogue 
            isOpen={ isOpen } 
            isExpanded={ isExpanded }
            isMobile={ isMobile } />
          </ChatbotWrapper>
        <ClosedMode
          isMobile={isMobile}
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(true);
            setIsExpanded(true);
          }}
        >
          <img
            src="/static/chatbot.png"
            style={{ width: isMobile ? '20px' : '30px' }}
            onClick={() => {
              setIsOpen(true);
              setIsExpanded(true);
            }}
            alt='chatbot'
          />
        </ClosedMode>
    </Box>
  );
};

export default Chatbot;

const ChatbotWrapper = styled.div<{ isMobile: boolean, isExpanded: boolean, isOpen: boolean }>`
  transition: ease all 0.7s;
  width: ${(props) => (props.isMobile ? (props.isOpen ? ( props.isExpanded ? '100vw' : '15rem') : '0rem') : (props.isOpen ? ( props.isExpanded ? '20rem' : '12rem') : '0rem'))};
  border: 1px solid ${PALETTE.BLACK};
  overflow: hidden;
  position: fixed;
  right: ${({ isMobile }) => (isMobile ? '0rem' : '1rem')};
  bottom: ${({ isMobile }) => (isMobile ? '0px' : '1rem')};
  display : ${(props) => (props.isOpen ? 'initial' : 'none')};
  z-index: 999999;
  backdrop-filter: ${(props) => (props.isMobile ? (props.isOpen ? ( props.isExpanded ? 'blur(20px)' : 'none') : 'none') : 'none')};
  -webkit-backdrop-filter: ${(props) => (props.isMobile ? (props.isOpen ? ( props.isExpanded ? 'blur(20px)' : 'none') : 'none') : 'none')};
`;

const Header = styled.div<{ isExpanded: boolean, isOpen: boolean, isMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.isMobile ? (props.isOpen ? ( props.isExpanded ? '100vw' : '15rem') : '0rem') : (props.isOpen ? ( props.isExpanded ? '20rem' : '12rem') : '0rem'))};
  position: relative;
  background-color: ${PALETTE.PRIMARY.DEFAULT};
  color: white;
  transition: ease all 0.7s;
  font-family: Helvetica;
  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
  p {
    margin: 10px 0 0 10px;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const ClosedMode = styled.div<{ isMobile: boolean, isOpen: boolean }>`
  position: fixed;
  right: ${({ isMobile }) => (isMobile ? '1rem' : '3rem')};
  bottom: ${({ isMobile }) => (isMobile ? '1rem' : '3rem')};
  cursor: pointer;
  padding: 10px;
  background-color: ${PALETTE.PRIMARY.DEFAULT};
  box-shadow: 5px 5px ${PALETTE.BLACK};
  display: ${({ isOpen }) => (isOpen ? 'none' : 'initial')};
  animation: float 2s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  
  @keyframes float2 {
    0% {
      line-height: 30px;
      transform: translatey(0px);
    }
    55% {
      transform: translatey(-7px);
    }
    60% {
      line-height: 30px;
    }
    100% {
      line-height: 30px;
      transform: translatey(0px);
    }
  }
`;
