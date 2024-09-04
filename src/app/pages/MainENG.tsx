
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components/HeaderComp';
import HeroComp from '../components/HeroComp';
import MapComp from '../components/MapComp';
import PortfolioComp from '../components/PortfolioComp';
import InterestsComp from '../components/InterestsComp';
import ContactComp from '../components/ContactComp';
import DownloadCVComp from '../components/DownloadCVComp';
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
          img: "static/home.png"
      },
      {
          name: "Portfolio",
          ref: portfolio,
          img: "static/portfolio.png",
          link: ""
      },
      {
          name: "Blog",
          link:  "#/blog",
          img: "static/blog.png"
      },
      {
          name: "Contact",
          ref: contact,
          img: "static/contact.png",
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
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} portfolio={portfolio}/>
        <DownloadCVComp />
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
font-family: Leaugue-Spartan-minor;
    `;