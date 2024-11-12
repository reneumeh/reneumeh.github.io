
import { useRef } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components_kor/HeaderComp_kor';
import HeroComp from '../components_kor/HeroComp_kor';
import MapComp from '../components_kor/MapComp_kor';
import PortfolioComp from '../components_kor/PortfolioComp_kor';
import InterestsComp from '../components_kor/InterestsComp_kor';
import ContactComp from '../components_kor/ContactComp_kor';
import BoxButton from '../components/BoxButton';
import { PALETTE } from '../utils/theme';
import Chatbot from '../Chatbot/ui/Chatbot';


function MainENG() {
    const portfolio = useRef(null);
    const contact = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);

    const pages = [
      {
          name: "홈",
          link: "#/kor",
          img: "/static/home.png"
      },
      {
          name: "포트포리오",
          ref: portfolio,
          img: "/static/portfolio.png",
          link: "",
      },
      {
          name: "블로그",
          link:  "#/blog_kor",
          img: "/static/blog.png"
      },
      {
          name: "연락처",
          ref: contact,
          img: "/static/contact.png",
          link: "",
      }
  ] 
  return (
    <Wrapper>
        <HeaderComp useLanguage={{ ENG: '#/', KOR: '#/kor'}} pages={pages} useScrollEffect={true}/>
        <HeroComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} />
        <MapComp />
        <hr />
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} portfolio={portfolio}/>
        <BoxButton text='이력서 다운로드' link= '/static/이력서_레네이.pdf' />
        <InterestsComp />
        <Chatbot />
        <ContactComp contact={contact} emailForm={emailForm}/>
    </Wrapper>
  )
}

export default MainENG

const Wrapper = styled.div`
width: 100%;
position: absolute;
z-index: -10;
background-color: ${PALETTE.BACKGROUND};
font-family: Leaugue-Spartan;
hr {
  width: 70%;
  color: rgba(0,0,0, 0,5);
}
@keyframes fadeInLeft {
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
    animation-name: fadeInLeft;
    `;

