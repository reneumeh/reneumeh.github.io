
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
import useIsScrolling from '../hooks/useIsScrolling';
import { FaHome } from 'react-icons/fa';
import { TbAwardFilled } from 'react-icons/tb';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';

function MainENG() {
    const { resetScroll } = useIsScrolling();
    const portfolio = useRef(null);
    const contact = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);
    const hero = useRef(null);

    const pages : Page[] = [
      {
          name: "Home",
          ref: hero,
          img: <FaHome className="phone-icon" />,
      },
      {
          name: "Awards",
          img: <TbAwardFilled />,
          link: "#/blog/awards",
      },
      {
          name: "Blog",
          link:  "#/blog",
          img: <BsChatSquareTextFill />,
      },
      {
          name: "Contact",
          ref: contact,
          img: <IoIosMail />,
          link: ""
      }
  ] 

  useEffect(() => {
    resetScroll(); 
  }, [resetScroll]);

  return (
    <Wrapper>
        <HeaderComp pages={pages} useScrollEffect={true} useLanguage={{ ENG: '#/', KOR: '#/kor'}} />
        <HeroComp hero={hero} mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} />
        <MapComp />
        <hr />
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} portfolio={portfolio}/>
        <BoxButton link= '/static/rene-umeh-portfolio.pdf'>
          DOWNLOAD RESUME
        </BoxButton> 
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