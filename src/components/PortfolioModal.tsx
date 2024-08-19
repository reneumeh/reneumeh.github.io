import React, { MouseEvent } from 'react';
import styled from 'styled-components';

type TProps = {
  children?: JSX.Element;
  visible?: boolean;
  modalEl?: React.MutableRefObject<HTMLDivElement>;
  handleCloseModal: () => void;
};

const ModalWrapper = ({ children, modalEl, handleCloseModal }: TProps) => {
  const handleCloseExternalClickModal = (event: MouseEvent<HTMLElement>) => {
    if ( !modalEl?.current?.contains(event.target as Node)) handleCloseModal();
  };

  return (
    <StyledWrapper onClick={handleCloseExternalClickModal}>{children}</StyledWrapper>
  ) 
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

type portfolioModalProps = {
    item_name : string,
    handleCloseModal: () => void,
}

const PortfolioModal = ({ item_name, handleCloseModal} : portfolioModalProps) => {
    return (
        <ModalWrapper handleCloseModal={handleCloseModal}>
            <>
            <Card>
                <img 
                    src= {`/static/portfolio_${item_name}.png`}
                    alt= {item_name} 
                    />
                {item_name}
            </Card>
            <ExitButton onClick={handleCloseModal}>
                x
            </ExitButton>
            </>
        </ModalWrapper>
    )
}

export default PortfolioModal

const Card = styled.div`
    display: flex;
    width: calc(50% + 10rem);
    height: calc(95% - 21vw);
    background-color: white;
    padding: 1rem;
    box-shadow: 8px 8px #805422;

    img {
    padding: 0 1rem 1rem 0;
    border: 1px solid black;
    height: 20rem;
    width: 20rem;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column; 
        align-items: center;

    }   
`;

const ExitButton = styled.div`
    display:flex;
    margin-top: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: gray;
    color: rgba(0,0,0,0.6);
    font-size: 2rem;
    font-family:Leaugue-Spartan-light;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
    background-color: white;
    color: black;
    }
`;