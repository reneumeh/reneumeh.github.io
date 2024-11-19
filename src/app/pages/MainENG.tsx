
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components/HeaderComp';
import HeroComp from '../components/HeroComp';
import MapComp from '../components/MapComp';
import PortfolioComp from '../components/PortfolioComp';
import InterestsComp from '../components/InterestsComp';
import ContactComp from '../components/ContactComp';
import BoxButton from '../components/BoxButton';
import { Page } from '../utils/types';
import { PALETTE } from '../utils/theme';
import Chatbot from '../Chatbot/ui/Chatbot';
import useIsScrolling from '../hooks/useIsScrolling';

function MainENG() {
    const { resetScroll } = useIsScrolling();
    const portfolio = useRef(null);
    const contact = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);

    const pages : Page[] = [
      {
          name: "Home",
          link: "#/",
          img: "/static/home.png"
      },
      {
          name: "Portfolio",
          ref: portfolio,
          img: "/static/portfolio.png",
          link: ""
      },
      {
          name: "Blog",
          link:  "#/blog",
          img: "/static/blog.png"
      },
      {
          name: "Contact",
          ref: contact,
          img: "/static/contact.png",
          link: ""
      }
  ] 

  useEffect(() => {
    resetScroll(); 
  }, [resetScroll]);

  return (
    <Wrapper>
        <HeaderComp pages={pages} useScrollEffect={true} useLanguage={{ ENG: '#/', KOR: '#/kor'}} />
        <HeroComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} />
        <MapComp />
        <hr />
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} portfolio={portfolio}/>
        <BoxButton text='DOWNLOAD RESUME' link= '/static/rene-umeh-portfolio.pdf' />
        <Chatbot />
        <InterestsComp />
        <ContactComp contact={contact} emailForm={emailForm}/>
    </Wrapper>
  )
}

export default MainENG

export const Wrapper = styled.div`
width: 100%;
position: absolute;
z-index: -10;
background-color: ${PALETTE.BACKGROUND};
font-family: League-Spartan-minor;
overflow: hidden;
hr {
  width: 70%;
  color: rgba(0,0,0, 0,5);
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
    animation-duration: 1s;
    animation-fill-mode: both;
    opacity: 0;
    animation-name: fadeIn;

    a {
        color: ${PALETTE.PRIMARY.DARK};
        text-decoration: none;
    }
    `;