
import styled from 'styled-components';
import { PALETTE } from '../utils/theme';

function PageNotFound() {
  return (
  <PNFWrapper>
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <div className='home-button'>
      <a className='home-button-inside'
      href="#/"
      target='_self'
      >
          GO BACK TO HOME
      </a>
    </div>
  </PNFWrapper>
    
  )
}

export default PageNotFound

const PNFWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;
  background-color: ${PALETTE.BACKGROUND};
  font-family: Leaugue-Spartan-minor;

  h1 {
    font-family: Leaugue-Spartan;
    font-size: 18em;
    width: 100%;
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 0;
  }
  
  h2 {
    width: 100%;
    text-align: center;
    margin-top: 0.2rem;
    margin-bottom: 5rem;

  }

  .home-button {
    text-decoration: none;
    display: flex;
    justify-content: center;
}
  .home-button-inside, .home-button-inside:visited, .home-button-inside:active {
    padding: 1rem 2rem;
    border: 1px solid ${PALETTE.WHITE};
    text-decoration: none;
    background-color: ${PALETTE.PRIMARY.DEFAULT}; 
    color: ${PALETTE.WHITE};
}
.home-button-inside:hover, home-button-inside:active {
    transform: scale(0.9);
    transition: ease all 0.2s;
}

@media screen and (max-width: 700px) { 
  h1 {
    font-size: 150px;
  }
}

`;
