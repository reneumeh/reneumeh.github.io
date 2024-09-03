import React, { MouseEvent, useRef } from 'react';
import styled from 'styled-components';
import { camelize } from '../utils/utils';
import { PALETTE } from '../utils/theme';

type TProps = {
  children?: JSX.Element;
  visible?: boolean;
  modalEl?: React.MutableRefObject<HTMLDivElement> | React.MutableRefObject<null>;
  handleCloseModal: () => void;
};

const ModalWrapper = ({ children, modalEl, handleCloseModal }: TProps) => {
  const handleCloseExternalClickModal = (event: MouseEvent<HTMLElement>) => {
    if (modalEl?.current && !modalEl.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  return (
    <StyledWrapper onClick={handleCloseExternalClickModal}>
      {children || null}
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
  backdrop-filter: blur(20px);
`;

type PortfolioModalProps = {
  item_name: string;
  handleCloseModal: () => void;
};

const PortfolioModal = ({ item_name, handleCloseModal }: PortfolioModalProps) => {
  const modalEl = useRef(null)
  console.log(item_name)
  const modalStories: { [key: string]: string } = {
    'DEBATE': 'I started debating in high school.',
    'PART DESIGN': 'This kind of comes with the territory of being a Mechanical Engineer.',
  };

  const story = modalStories[item_name] || 'Story not available';

  return (
    <ModalWrapper handleCloseModal={handleCloseModal} modalEl={modalEl}>
      <>
      <Card>
        <img 
          src={`/static/portfolio_${camelize(item_name)}.png`} 
          alt={item_name} 
        />
          <h1>{item_name}</h1> 
          <p>{story}</p>
      </Card>
      <ExitButton onClick={handleCloseModal}>x</ExitButton>
      </>
    </ModalWrapper>
  );
};

export default PortfolioModal;

const Card = styled.div`
  width: calc(50% + 10rem);
  height: calc(95% - 21vw);
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
  font-size: 1.2rem;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column; 
    align-items: center;
  }   
`;

const ExitButton = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${PALETTE.SECONDARY.LIGHT};
  color: rgba(0, 0, 0, 0.6);
  font-size: 2rem;
  font-family: Leaugue-Spartan-light;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${PALETTE.WHITE};
    color: ${PALETTE.BLACK};
  }
`;
