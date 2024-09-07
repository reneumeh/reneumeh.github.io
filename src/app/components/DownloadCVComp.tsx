
import styled from 'styled-components';
import { PALETTE } from '../utils/theme';

const DownloadCVComp = () => {
  return (
    <DownloadCVWrapper>
        <div className='portfolio-button'>
            <a className='portfolio-button-inside'
            href="/static/rene-umeh-portfolio.pdf"
            target='_blank'
            >
                DOWNLOAD RESUME
            </a>
        </div>
</DownloadCVWrapper>
  )
}

export default DownloadCVComp

const DownloadCVWrapper = styled.div`
    .portfolio-button {
        text-decoration: none;
        display: flex;
        justify-content: center;
    }
    .portfolio-button-inside, .portfolio-button-inside:visited, .portfolio-button-inside:active {
        padding: 1rem 2rem;
        border: 1px solid ${PALETTE.WHITE};
        text-decoration: none;
        background-color: ${PALETTE.PRIMARY.DEFAULT}; 
        color: ${PALETTE.WHITE};
    }
    .portfolio-button-inside:hover, portfolio-button-inside:active {
        transform: scale(0.9);
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