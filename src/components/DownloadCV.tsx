import React from 'react'
import styled from 'styled-components'

const DownloadCV = () => {
  return (
    <DownloadCVWrapper>
    <div className='portfolio-button'>
        <a className='portfolio-button-inside'
        href="static/rene-umeh-portfolio.pdf"
        target='_blank'
        >
            DOWNLOAD RESUME
        </a>
    </div>
</DownloadCVWrapper>
  )
}

export default DownloadCV

const DownloadCVWrapper = styled.div`
    .portfolio-button {
        text-decoration: none;
        display: flex;
        justify-content: center;
    }
    .portfolio-button-inside, .portfolio-button-inside:visited, .portfolio-button-inside:active {
        padding: 1rem 2rem;
        border: 1px solid white;
        text-decoration: none;
        background-color: #AB957C; 
        color: white;
    }
    .portfolio-button-inside:hover {
        transform: scale(0.9);
        transition: ease all 0.2s;
    }
`;