import { useRef } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components/HeaderComp';
import HeroComp from '../components/HeroComp';
import MapComp from '../components/MapComp';
import PortfolioComp from '../components/PortfolioComp';
import InterestsComp from '../components/InterestsComp';
import ContactComp from '../components/ContactComp';

function MainENG() {
    const Portfolio = useRef(null);
    const Contact = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);

  return (
    <Wrapper>
        <HeaderComp Portfolio={Portfolio} Contact={Contact}/>
        <HeroComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} />
        <MapComp />
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} Portfolio={Portfolio}/>
        <InterestsComp />
        <ContactComp Contact={Contact} emailForm={emailForm}/>
    </Wrapper>
  )
}

export default MainENG

const Wrapper = styled.div`
width: 100%;
position: absolute;
z-index: -10;
background-color: #E7E5E0;
font-family: Leaugue-Spartan-minor;
    `;