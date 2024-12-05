
import { useRef } from 'react';
import HeaderComp from '../components_kor/HeaderComp_kor';
import HeroComp from '../components_kor/HeroComp_kor';
import MapComp from '../components_kor/MapComp_kor';
import PortfolioComp from '../components_kor/PortfolioComp_kor';
import InterestsComp from '../components_kor/InterestsComp_kor';
import ContactComp from '../components_kor/ContactComp_kor';
import BoxButton from '../components/BoxButton';
import { Wrapper } from './MainENG';
import { FaHome } from 'react-icons/fa';
import { TbAwardFilled } from 'react-icons/tb';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';


function MainENG() {
    const portfolio = useRef(null);
    const contact = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);
    const hero = useRef(null);

    const pages = [
      {
          name: "홈",
          ref: hero,
          img: <FaHome className="phone-icon" />,
      },
      {
          name: "수상",
          ref: portfolio,
          img: <TbAwardFilled />,
          link: "#/blog_kor/awards",
      },
      {
          name: "블로그",
          link:  "#/blog_kor",
          img: <BsChatSquareTextFill />,
      },
      {
          name: "연락처",
          ref: contact,
          img: <IoIosMail />,
          link: "",
      }
  ] 
  return (
    <Wrapper>
        <HeaderComp useLanguage={{ ENG: '#/', KOR: '#/kor'}} pages={pages} useScrollEffect={true}/>
        <HeroComp hero={hero} mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} />
        <MapComp />
        <hr />
        <PortfolioComp mechSection= {mechSection} extraSection={extraSection} panddSection={panddSection} portfolio={portfolio}/>
        <BoxButton link= '/static/이력서_레네이.pdf'>
            이력서 다운로드
        </BoxButton>
        <InterestsComp />
        <ContactComp contact={contact} emailForm={emailForm}/>
    </Wrapper>
  )
}

export default MainENG

