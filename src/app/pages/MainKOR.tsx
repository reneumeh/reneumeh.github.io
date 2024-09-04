
import { useRef } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components_kor/HeaderComp_kor';
import HeroComp from '../components_kor/HeroComp_kor';
import MapComp from '../components_kor/MapComp_kor';
import PortfolioComp from '../components_kor/PortfolioComp_kor';
import InterestsComp from '../components_kor/InterestsComp_kor';
import ContactComp from '../components_kor/ContactComp_kor';
import DownloadCVComp from '../components_kor/DownloadCVComp_kor';
import { PALETTE } from '../utils/theme';


function MainENG() {
    const portfolio = useRef(null);
    const contact = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);

  return (
    <Wrapper>
        <HeaderComp Portfolio={portfolio} Contact={contact}/>
        <HeroComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} />
        <MapComp />
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} Portfolio={portfolio}/>
        <DownloadCVComp />
        <InterestsComp />
        <ContactComp Contact={contact} emailForm={emailForm}/>
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
    `;

