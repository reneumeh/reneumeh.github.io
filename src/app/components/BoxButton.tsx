
import styled from 'styled-components';
import { PALETTE } from '../utils/theme';

type BoxButtonParams = {
    text: string,
    link?: string,
    onClick?: () => void,
}

const BoxButton = ({ text, link, onClick= () => {} } : BoxButtonParams) => {
  return (
    <BoxButtonVWrapper>
        <div className='portfolio-button'
            onClick={onClick}>
                {
                    link ?
                    <a className='portfolio-button-inside'
                    href={link}
                    target='_blank'
                    >
                        {text}
                    </a> :
                    <div className='portfolio-button-inside'>
                        {text}
                    </div>
                }
        </div>
</BoxButtonVWrapper>
  )
}

export default BoxButton

const BoxButtonVWrapper = styled.div`
    .portfolio-button {
        text-decoration: none;
        display: flex;
        justify-content: center;
    }
    .portfolio-button-inside, .portfolio-button-inside:visited, .portfolio-button-inside:active {
        padding: 1rem 2rem;
        font-size: 1rem;
        border: 1px solid ${PALETTE.WHITE};
        text-decoration: none;
        background-color: ${PALETTE.PRIMARY.DEFAULT}; 
        color: ${PALETTE.WHITE};
    }
    .portfolio-button-inside:hover, portfolio-button-inside:active {
        transform: scale(1.1);
        transition: ease all 0.2s;
    }
`;

export const PrimaryButton = styled.div`
    padding: 1rem 2rem;
    border: 1px solid ${PALETTE.WHITE};
    text-decoration: none;
    background-color: ${PALETTE.PRIMARY.DEFAULT}; 
    color: ${PALETTE.WHITE};
    cursor: pointer;

    &:hover {
        transform: scale(0.9);
        transition: ease all 0.2s;
    }

`;