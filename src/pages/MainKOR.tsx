
import { useRef } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components_kor/HeaderComp_kor';
import HeroComp from '../components_kor/HeroComp_kor';
import MapComp from '../components_kor/MapComp_kor';
import PortfolioComp from '../components_kor/PortfolioComp_kor';
import InterestsComp from '../components_kor/InterestsComp_kor';
import ContactComp from '../components_kor/ContactComp_kor';
import DownloadCVComp from '../components_kor/DownloadCVComp_kor';


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
        <DownloadCVComp />
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
font-family: Leaugue-Spartan;
    `;

