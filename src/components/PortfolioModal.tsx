import React, { MouseEvent } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
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
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);

`;

const PortfolioModal = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("section"))
    const handleCloseModal = () => {
        navigate('/'); 
    }
    return (
        <ModalWrapper handleCloseModal={handleCloseModal}>
            <img src= {`/static/portfolio_${searchParams.get("section")}.png`} />
        </ModalWrapper>
    )
}

export default PortfolioModal