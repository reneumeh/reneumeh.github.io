
import React, { MouseEvent, useRef } from 'react';
import styled from 'styled-components';
import { PALETTE } from '../utils/theme';
import { modalStories } from '../config/modal-stories';
import Image from 'next/image';

type TProps = {
  children?: JSX.Element;
  visible?: boolean;
  modalEl?: React.MutableRefObject<HTMLDivElement> | React.MutableRefObject<null>;
  handleCloseModal: () => void;
};

export const ModalWrapper = ({ children, modalEl, handleCloseModal }: TProps) => {
  const handleCloseExternalClickModal = (event: MouseEvent<HTMLElement>) => {
    if (modalEl?.current && !modalEl.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  return (
    <StyledWrapper onClick={handleCloseExternalClickModal}>
      {children || null}
      <ExitButton onClick={handleCloseExternalClickModal}>x</ExitButton>
    </StyledWrapper>
    
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

type PortfolioModalProps = {
  item_name: string;
  item_path: string;
  handleCloseModal: () => void;
};

const PortfolioModal = ({ item_name, item_path, handleCloseModal }: PortfolioModalProps) => {
  const modalEl = useRef(null)

  const story = modalStories[item_name] || 'Story not available';

  return (
    <ModalWrapper handleCloseModal={handleCloseModal} modalEl={modalEl}>
      <Card ref={modalEl}>
        <Image
          height={800}
          width={800} 
          src={item_path} 
          alt={item_name} 
        />
          <h1>{item_name}</h1> 
          <p>{story}</p>
      </Card>
    </ModalWrapper>
  );
};

export default PortfolioModal;

const Card = styled.div`
  width: clamp(10px, 90vw, 900px);
  min-height: fit-content;
  background-color: ${PALETTE.WHITE};
  padding: 1rem;
  box-shadow: 8px 8px ${PALETTE.PRIMARY.DARK};

  img {
    margin: 0 1rem 1rem 0;
    border: 1px solid ${PALETTE.BLACK};
    height: 20rem;
    width: 20rem;
    float: left;
  }

  p {
  font-size: calc(0.7rem + 0.7vw);
  line-height: calc(0.6rem + 0.7vw);
  }

  h1 {
  color: ${PALETTE.PRIMARY.DARK}}

  @media screen and (max-width: 700px) {
    flex-direction: column; 
    align-items: center;
  }   
`;

export const ExitButton = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${PALETTE.SECONDARY.LIGHT};
  color: rgba(0, 0, 0, 0.6);
  font-size: 2rem;
  font-family: League-Spartan-light;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${PALETTE.WHITE};
    color: ${PALETTE.BLACK};
  }
`;
