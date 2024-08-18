import { useRef } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components/HeaderComp';
import HeroComp from '../components/HeroComp';
import MapComp from '../components/MapComp';
import PortfolioComp from '../components/PortfolioComp';
import InterestsComp from '../components/InterestsComp';
import ContactComp from '../components/ContactComp';
import DownloadCVComp from '../components/DownloadCVComp';
import { Page } from '../utils/types';
import { Route, Routes } from 'react-router-dom';
import PortfolioModal from '../components/PortfolioModal';

function MainENG() {
    const Portfolio = useRef(null);
    const Contact = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);

    const pages : Page[] = [
      {
          name: "Home",
          link: "/",
          img: "static/home.png"
      },
      {
          name: "Portfolio",
          ref: Portfolio,
          img: "static/portfolio.png",
          link: ""
      },
      {
          name: "Blog",
          link:  "/blog",
          img: "static/blog.png"
      },
      {
          name: "Contact",
          ref: Contact,
          img: "static/contact.png",
          link: ""
      }
  ] 

  return (
    <Wrapper>
        <HeaderComp pages={pages} useScroll={true}/>
        <HeroComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} />
        <MapComp />
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} Portfolio={Portfolio}/>
        <Routes>
          <Route path='/portfolio' element={<PortfolioModal />} />
        </Routes>
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
font-family: Leaugue-Spartan-minor;
    `;