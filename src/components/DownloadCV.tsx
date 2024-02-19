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
    .portfolio-button-inside {
        padding: 1rem 2rem;
        border: 1px solid black;
        text-decoration: none;
    }
`;