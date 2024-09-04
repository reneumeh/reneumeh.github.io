import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dialogue from './Dialogue';
import useIsOpen from '../hook/use-is-open';
import useIsExpanded from '../hook/use-is-expanded';
import { Box, IconButton } from '@chakra-ui/react';
import { MdCloseFullscreen, MdHorizontalRule, MdOpenInFull } from 'react-icons/md';
import useIsMobile from '@/app/hooks/useIsMobile';

const Chatbot = () => {
  const isMobile = useIsMobile();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isExpanded, setIsExpanded } = useIsExpanded();
  const { isOpen, setIsOpen } = useIsOpen();
  const [ sessionId, setSessionId ] = useState(0);
  const [loading, setLoading] = useState(false);

  const [ viewAll, setViewAll ] = useState(false);
  const [ areYouSure, setAreYouSure ] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setIsExpanded(false);
    setPosition({ x: 0, y: 0 });
    setSessionId(0);
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
      {isOpen ? (
          <ChatbotWrapper isMobile={isMobile}>
            <Header isExpanded={isExpanded} className="handle grabbable">
              <p>
                SPACE<span>B</span>OT{' '}
              </p>
              <div className="buttons">
                 {isExpanded ? (
                  <IconButton
                    cursor={'pointer'}
                    onClick={onShrink}
                    aria-label="Close Fullscreen Chatbot"
                    icon={<MdCloseFullscreen size={18} />}
                    color={'#EDC844'}
                    bg="transparent"
                  />
                ) : (
                  <IconButton
                    cursor={'pointer'}
                    onClick={onExpand}
                    aria-label="Open Fullscreen Chatbot"
                    icon={<MdOpenInFull size={18} />}
                    color={'#EDC844'}
                    bg="transparent"
                  />
                )} 
                <IconButton
                  cursor={'pointer'}
                  onClick={onClose}
                  aria-label="Close Chatbot"
                  icon={<MdHorizontalRule size={18} />}
                  color={'#EDC844'}
                  bg="transparent"
                  size={"1rem"}
                  marginRight={"0.3rem"}
                  _hover= {{ bg: 'grey' }}
                  isRound= {true}
                />
              </div>
            </Header>
            <Dialogue 
            isOpen={ isOpen } 
            isExpanded={ isExpanded } />
          </ChatbotWrapper>
      ) : (
        <ClosedMode
          isMobile={isMobile}
          onClick={() => {
            setIsOpen(true);
            setIsExpanded(true);
          }}
        >
          <img
            className="handle"
            src="/chatbot.png"
            style={{ width: isMobile ? '20px' : '30px' }}
            onClick={() => {
              setIsOpen(true);
              setIsExpanded(true);
            }}
          />
        </ClosedMode>
      )}
    </Box>
  );
};

export default Chatbot;

const ChatbotWrapper = styled.div<{ isMobile: boolean }>`
  transition: ease all 1s;
  width: 20rem;
  overflow: hidden;
  position: fixed;
  right: 1rem;
  bottom: ${({ isMobile }) => (isMobile ? '130px' : '100px')};
  z-index: 999999999;

  .grabbable {
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

.grabbable:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;

`;

const Header = styled.div<{ isExpanded: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  position: relative;
  /* transform: ${(props) => (props.isExpanded ? '' : 'translateY(23.2em)')}; */
  z-index: 99999;
  background-color: black;
  border: 1px solid white;
  color: white;
  font-family: Helvetica;
  border-radius: 15px 15px 0px 0px;
  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
  span {
    font-weight: 600;
    font-size: 1.2rem;
    color: #edc844;
  }
  p {
    margin: 5px 0 0 10px;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const ClosedMode = styled.div<{ isMobile: boolean }>`
  position: fixed;
  right: ${({ isMobile }) => (isMobile ? '1rem' : '3rem')};
  bottom: ${({ isMobile }) => (isMobile ? '130px' : '100px')};
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #222;
  border: 1px solid white;
`;
