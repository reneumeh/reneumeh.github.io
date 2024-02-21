import React, { LegacyRef } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import emailjs from '@emailjs/browser'

function MainENG() {
    const Portfolio = useRef(null);
    const Contact = useRef(null);
    const texasPin = useRef(null);
    const lagosPin = useRef(null);
    const seoulPin = useRef(null);
    const mechSection= useRef(null);
    const panddSection = useRef(null);
    const extraSection = useRef(null);
    const emailForm = useRef(null);

    const [isScrolling, setScrolling] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    const [hoveredElement, sethoveredElement] = useState("");
    const [clickedElement, setclickedElement] = useState("");

    const sendEmail =(e:any) => {
        e.preventDefault();

        if(emailForm.current) {
            emailjs.sendForm('service_n4wn1nh', 'template_r981zdv', emailForm.current, 'SlV3483aRFBrHHQYI')
            .then((result) => {
                e.target.reset();
                alert("Message sent successfully");
            }, (error) => {
                alert(error.text);
            });
        };

        };

    const handleHover = ( pinName:string ) => {
            sethoveredElement(pinName);
    };
            
    const handleLeave = () => {
        if (!clickedElement) {
            sethoveredElement("");
        }
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 140) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
    });

    const scrollToElement = (ref: any, position= "start") => {
        ref.current?.scrollIntoView({ behavior: isMobile ? 'auto' :'smooth' , block: position });
    };

    useEffect(() => {
        const handler = (e: any) => {
            if(e.target.className == hoveredElement) {
            setclickedElement(hoveredElement);
            }
            if(e.target.className == "page-buttons") {
                setMenuOpen(false);
            }
            else {
                sethoveredElement("");
                setclickedElement("");
            }
        };
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const pages = [
        {
            name: "홈",
            link: "/",
            img: "static/home.png"
        },
        {
            name: "포트포리오",
            ref: Portfolio,
            img: "static/portfolio.png"
        },
        {
            name: "브로그",
            link:  "/blog",
            img: "static/blog.png"
        },
        {
            name: "연락처",
            ref: Contact,
            img: "static/contact.png"
        }
    ] 

    const MapElements = [
        {
            country: "대한민국",
            city: "서울",
            loc: {top: "17.5vw", left: "calc(5em + 62.5vw)"},
            explanation: "저는 학사학위를 위해 서울로 여행을 갔습니다. 저는 한양 국제어학원에서 한국어를 배웠습니다. 그 후, 저는 삼성 글로벌 드림 장학금의 도움으로 기계 공학 학사를 마쳤습니다", 
            ref: seoulPin
        },
        {
            country: "미국",
            city: "오스틴",
            loc: {top: "18vw", left: "calc(5em + 16.5vw)"},
            explanation: "여기는 텍사스가 아닙니다. 그들을 붙잡을 수 없습니다. 그러니 카드를 아래위로, 아래위로, 아래위로, 렉서스를 주차하고 열쇠를 위로 던집니다. 주위에, '둥근', '둥근', '둥근', '둥근', '둥근', '둥근', '둥근', '둥근'(둥근)",
            ref: texasPin
        },
        {
            country: "나이지리아",
            city: "라고스",
            loc: {top: "22vw", left: "calc(5em + 37vw)"},
            explanation: "니오줄레그바 그들은 내 이야기를 알고 있어요 모독의 작업실에서 난 바쁘게 일하고 있어요 어 니오줄레그바, 오 나 그리고 실리 모독의 작업실에서 우린 바쁘게 일하고 있어요 어",
            ref: lagosPin
        }
    ]
    const portfolio_stuff = [
        {
            name: "설계",
            explanation: "기계 요소 설계 원리를 사용하여 Catia, SOLIDWORKS & Ansys DesignModeller를 포함한 다양한 CAD 플랫폼에서 혁신적인 디자인과 기능을 찾는 작업을 수행합니다",
            image: "/static/portfolio_partDesign.png",
            section: "mechanicalEngineering"
        },
        {
            name: "분석",
            explanation: "CAE를 사용하여 고체(정적 및 동적) 및 유체 시뮬레이션을 수행하고 그 결과를 이론적 추정치와 비교합니다",
            image: "/static/portfolio_analysis.png",
            section: "mechanicalEngineering"
        },
        {
            name: "자동차",
            explanation: "저는 특히 자동차 공학 문헌에 정통하고 포뮬러 레이싱 자동차의 서스펜션 제어에 대한 배경 지식이 있습니다",
            image: "/static/portfolio_automobile.png",
            section: "mechanicalEngineering"
        },
        {
            name: "코딩",
            explanation: "나는 Python, MATLAB, C++ 및 기타 많은 엔지니어링 프로그래밍 언어에 능숙합니다",
            image: "/static/portfolio_coding.png",
            section: "mechanicalEngineering"
        },
        {
            name: "AI & DL/ML",
            explanation: "저는 인공지능과 머신러닝의 다양한 아키텍처에 관한 최신 문헌에 대해 잘 알고 있습니다. 인공지능 모델을 구축하고 미세 조정한 경험이 있습니다",
            image: "/static/portfolio_ai.png",
            section: "programmingAndDesign"
        },
        {
            name: "3D 모델링",
            explanation: "저는 딥러닝을 이용한 3D 자산관리와 3D 재구성에 대한 특별한 경험을 가지고 있습니다.",
            image: "/static/portfolio_3dModelling.png",
            section: "programmingAndDesign"
        },
        {
            name: "UI/UX 디자인",
            explanation: "저는 독학한 UI/UX 디자이너이며 웹페이지 디자인 및 유지보수에 대한 전문적인 경험을 가지고 있습니다",
            image: "/static/portfolio_uiDesign.png",
            section: "programmingAndDesign"
        },
        {
            name: "웹 개발",
            explanation: "저는 TypeScript와 JavaScipt에 능숙하며 이 웹 페이지와 같은 반응형 웹 페이지를 구축한 전문적인 경험이 있습니다",
            image: "/static/portfolio_webDev.png",
            section: "programmingAndDesign"
        },
        {
            name: "학생 임원단",
            explanation: "2023년 삼성글로벌드림장학재단 총학생회장을 역임하였습니다",
            image: "/static/portfolio_studentCouncil.png",
            section: "extracurricular"
        },
        {
            name: "소셜 미디어",
            explanation: "저는 삼성글로벌드림장학재단 학생회와 스페이스맵의 소셜미디어 페이지를 관리해 왔습니다",
            image: "/static/portfolio_socialMedia.png",
            section: "extracurricular"
        },
        {
            name: "토론",
            explanation: "저는 토론을 즐기고 대학 토론회의 일원으로 참여했습니다",
            image: "/static/portfolio_debate.png",
            section: "extracurricular"
        },
        {
            name: "봉사 활동",
            explanation: "저는 자원봉사를 즐기고 있으며 서울시노인복지관과 오스틴 동물원에서 자원봉사를 하고 있습니다",
            image: "/static/portfolio_volunteering.png",
            section: "extracurricular"
        },
    ]

    const interest_stuff = [
        {
            topic: "강력한 멀티모달 센서 융합의 발전: 메타학습을 통한 하이브리드 접근",
            expo: "멀티모달 센서 융합은 상당한 발전을 이루었지만 견고성에 있어서는 어려움이 지속되고 있습니다. 저는 시스템의 해석 가능성과 적응력을 향상시키는 것을 목표로 물리 기반 모델과 신경망을 결합한 하이브리드 프레임워크를 통합하여 이전 작업을 기반으로 하는 연구를 수행할 계획입니다. 멀티센서 데이터 융합에 대한 홀과 리나스(2001)의 중요한 연구와 같은 이전 연구는 주로 물리 기반 또는 기계 학습 접근 방식에 초점을 맞추고 있습니다. 하이브리드 모델은 홀과 리나스(2001)가 입증한 바와 같이 물리 기반 모델의 해석 가능성과 첸과 굽타(2017)의 연구에서 탐구한 신경망의 적응력을 활용하여 이 두 가지 패러다임을 독특하게 시너지 효과를 발휘할 것입니다. 저는 멀티모달 센서 융합에 새로운 기여를 하는 메타 학습 구성 요소를 제안합니다. 핀, 아베벨, 레빈(2017)의 연구와 같은 최근 연구는 신경망 적응의 맥락에서 메타 학습을 탐구했지만 멀티모달 센서 융합 영역에 통합하지는 않았습니다. 제 연구는 새로운 환경과 센서 구성에 대한 시스템의 적응력을 향상시키기 위해 메타 학습을 도입하여 이러한 격차를 해소하는 것을 목표로 합니다. 이러한 발전은 심층 강화 학습을 위해 구조화된 메모리를 도입한 Parisotto와 Salakhutdinov(2016)의 연구 결과를 기반으로 합니다. 이러한 요소를 결합하여 하이브리드 접근 방식은 기존 작업의 한계를 넘어 멀티모달 센서 융합 애플리케이션을 위한 보다 포괄적이고 강력한 솔루션을 제공합니다."
        },
        {
            topic: "딥러닝과 보로노이 다이어그램을 이용한 다중 로봇 동시 측위 및 매핑",
            expo: "이 연구는 동시 로컬라이제이션 및 매핑(SLAM), 딥러닝 및 보로노이 다이어그램의 동적 융합에서 혁신적인 알고리즘 프레임워크를 도입하여 이 분야를 발전시키고자 합니다. 광범위한 문헌 검토(예: 스미스 외, 2020; 왕 외, 2019)를 통해 로컬라이제이션 정확도, 동적 환경에 대한 적응성 및 의미론적 이해와 같은 SLAM의 지속적인 과제가 강조되었습니다. 제 관심은 공간 컨텍스트화를 위해 보로노이 다이어그램을 통합하면서 이전 작업에서 확인된 한계를 해결하기 위한 다각적인 접근 방식에 있습니다. 로봇공학의 딥러닝 응용 프로그램에 대한 최근 연구(브라운 외, 2021; 굽타 외, 2022)를 바탕으로 제안된 알고리즘은 고급 특징 추출 및 매칭을 위해 심층 신경망을 활용하여 SLAM의 정확도를 향상시키는 것을 목표로 합니다. 보로노이 다이어그램은 공간 분해에서 중추적인 역할을 하며, 환경에 대한 보다 정확하고 적응형 지도를 구성하는 데 도움이 되는 기하학적 통찰력을 제공합니다. 보로노이 다이어그램의 전략적 통합은 또한 특징의 공간 분포에 대한 동적 이해를 촉진하여 다양한 환경 조건에 대한 SLAM 시스템의 적응성을 향상시킵니다. 보로노이 기반 공간 분해는 딥러닝의 기능을 보완하여 시스템이 기하학적 및 위상 정보를 기반으로 정보에 입각한 결정을 내릴 수 있도록 합니다. 이 연구는 또한 SLAM 시스템에서 의미론적 이해의 필요성을 인식하고 있습니다(Cadena 외, 2016). 제안된 알고리즘은 보로노이 강화된 공간 인식과 함께 컴퓨터 비전 및 의미론적 분할의 기술을 통합함으로써 SLAM 시스템에 환경에 대한 더 높은 수준의 이해를 부여하는 것을 목표로 합니다."
        },
    ]

  return (
    <Wrapper>
        <Header isScrolling= {isScrolling}>
            <a className="logo"
            href= "/"
            target="_self"
            rel="noopener noreferrer"
            > 
                <span>레네이 </span>우메이
            </a>
            <NavBar isScrolling= {isScrolling} isMenuOpen= {isMenuOpen}>
                {pages.map((page) => (
                    <div
                    key={page.name}
                    className="page-buttons"
                    onClick={() => (page.ref ? scrollToElement(page.ref) : window.location.assign(page.link))}
                >
                    <img className='phone-icons' width= {20} src= {page.img} />{page.name}
                </div>
                ))}
                <img className='phone-icons hamburger' width= {20} src= 'static/hamburger.png' onClick={() => {setMenuOpen(true)}}/>
                <img className='phone-icons close'  width= {20} src= 'static/close.png' onClick={() => {setMenuOpen(false)}}/>
              
            </NavBar>
            <div className='language '><a className='top' href='/'>영</a><a className='bottom'href="/kor">한</a></div>
        </Header>
        <Hero>
            <div className='hero-div'><img 
                src='static/hero1.png' 
                alt='my_image'/>
                </div>
            <div className='intro-1'>제 이름은</div> <div className='intro-2'>레네이 </div> <div className='intro-3'>우메이</div> 
            <div id='marquees'>
            <div className="marquee marquee--reverse marquee--hover-pause">
                <ul className="marquee__content">
                    <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX 개발자</li><li onClick= {() => scrollToElement(extraSection, "center")}>소셜 미디어 관리자</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX 개발자</li><li onClick= {() => scrollToElement(extraSection, "center")}>소셜 미디어 관리자</li>
                </ul>
            </div>
            <div className="marquee marquee--hover-pause">
                <ul className="marquee__content">
                <li onClick= {() => scrollToElement(panddSection, "center")}>인공지능 프로그레머</li><li onClick= {() => scrollToElement(panddSection, "center")}>웹 개발자</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(panddSection, "center")}>인공지능 프로그레머</li><li onClick= {() => scrollToElement(panddSection, "center")}>웹 개발자</li>
                </ul>
            </div>
            <div className="marquee marquee--reverse marquee--hover-pause">
                <ul className="marquee__content">
                    <li onClick= {() => scrollToElement(mechSection, "center")}>기계공학자</li><li onClick= {() => scrollToElement(mechSection, "center")}>자동차 애호가</li>
                    
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(mechSection, "center")}>기계공학자</li><li onClick= {() => scrollToElement(mechSection, "center")}>자동차 애호가</li>
                </ul>
            </div>
        </div>
        </Hero>
        <Map hoveredElement= {hoveredElement} style={{ overflow: "clip", position: "relative" }}>
            <div className="WorldMap" >
                <img id='big-map'
                src='static/map.png'
                style={{position: 'absolute', margin: '2vh  0vw 2vh 5em', width:'80vw'}}/>
                {MapElements.map((pin) => (<div className='pins'>
                    <img
                    className={pin.city}
                    ref ={pin.ref}
                    src= "static/pin.png"
                    width= {20}
                    height= {30}
                    onMouseEnter={() => handleHover(pin.city)} 
                    onMouseLeave={handleLeave}
                    style={{position: "absolute", top: pin.loc.top, left: pin.loc.left}}
                    />
                    <div className= "explanations">
                        <div
                        id= {pin.city}>
                            <p className='city'>{pin.city}</p>
                            <p className= 'country'>{pin.country}</p>
                            <p>{pin.explanation}</p>
                        </div>
                    </div>
                    </div>
                ))}
                <div className= "explanations-placeholder">
                    핀을 호버/클릭합니다
                    </div>
                </div>

        </Map>         
        <PortfolioWrapper ref={Portfolio} hoveredElement= {hoveredElement} style= {{position: "relative"}}>
            <div className='main-port'>     
                {portfolio_stuff.map((item) => (
                    <div style={{ position: "relative" }}>
                    <img className='portfolio-image' src={item.image} 
                    id={item.name}
                    onMouseEnter={() => handleHover(item.name)}
                    onMouseLeave={handleLeave}/>
                    <div className='tester'></div> <p className='portfolio-name'>{item.name}</p>
                    {hoveredElement == item.name &&
                    <div className='portfolio-expo' >
                    {item.explanation}</div>}
                </div>
                ))}
                </div>
                <text ref= {mechSection} style= {{position: "absolute", top: "18vw", overflowX: "clip"}}>기계 공학</text>
                <text ref= {panddSection} style= {{position: "absolute", top: "66.5vw", overflowX: "clip"}}>프로그래밍 및 디자인</text>
                <text ref= {extraSection} style= {{position: "absolute", top: "117vw", overflowX: "clip"}}>과외 활동</text>
        </PortfolioWrapper>
        <DownloadCVWrapper>
        <div className='portfolio-button'>
            <a className='portfolio-button-inside'
            href="static/이력서_레네이.pdf"
            target='_blank'
            >
                이력서 다운로드
            </a>
        </div>
        </DownloadCVWrapper>
        <InterestsWrapper>
            <p>연구 관심사</p>
            {interest_stuff.map((interest_stuff) => (
            <div className='interest'>
                <div className='topic'>{interest_stuff.topic}</div><div className='expo'>{interest_stuff.expo}</div>
                </div>
            ))}
            
        </InterestsWrapper>
        <ContactWrapper ref={Contact}>
            <div className='contact-left'>연락처
                <p>위치: 서울, 대한민국</p>
                <p><img
                src='static/send.png'
                width= {20}/> dubemrene@gmail.com</p>
            </div>
            <div className='contact-right'> 
                <form ref={emailForm} onSubmit={sendEmail}>
                    <input type="text" name="from_name" placeholder='이름' required />
                    <input type="email" name="from_email" placeholder='이메일' required />
                    <textarea name="message" rows={6} placeholder='메시지'></textarea>
                    <button className="button" type="submit">보내기</button>
                </form>
            </div>
        </ContactWrapper>
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

const Header = styled.div<{ isScrolling: boolean }>` 
    position: ${({ isScrolling }) =>
    isScrolling === true ? 'fixed' : "absolute"};
    border-bottom: ${({ isScrolling }) =>
    isScrolling === true ? 'solid rgba(0, 0, 0, 0.2) 1px' : ""};
    display: flex;
    background-color: ${({ isScrolling }) =>
    isScrolling === true ?  '#E7E5E0' : ""};
    justify-content: ${({ isScrolling }) =>
    isScrolling === true ? 'space-between' : ""};
    width: calc(100vw - 17px);
    z-index: ${({ isScrolling }) =>
    isScrolling === true ? "999999" : "9999"};
    font-size: 1.1rem;

    .logo, logo:visited, logo:active{
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'flex' : 'none'};
        width: max-content;
        align-items: center;
        color: #AB957C;
        text-decoration: none;
        margin: 0px 0vw 0px 1vw;
        font-weight: bold;
        font-family: korean-font;
        font-stretch: expanded;
        font-size: 2rem;
        white-space: nowrap;
        span {
            color: black;
        }
    }

    .language {
        position: absolute;
        right: calc(100vw - 97.2vw);
        top: 4.5em;
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'none' : 'flex'};
        flex-direction: column;
        border: 1px solid black;
        border-radius: 20px;
        background-color: #D1D3D4;
        font-size: 0.9rem;
        :hover {
            background-color: white;
            color: white;
        }
        .top, top:visited, top:active {
                padding: 0.7rem 0.5rem;
                text-decoration: none;
                border-radius: 20px 20px 0px 0px;
                color: black; 
                border-bottom: 1px solid black;
            }
        .bottom, .bottom:visited, bottom:active {
            padding: 0.7rem 0.5rem;
            text-decoration: none;
            border-radius: 0px 0px 20px 20px;
            color: black;
        }
    }

    @media screen and (max-width: 700px) { 
        display: flex; 
        justify-content: center;
        width: 100vw;
        .language {
        top: 3.5em;
        z-index: -1;
        }
        .logo {
            margin: 0.3rem 0;
        }
    }  
    `;

const NavBar = styled.div<{ isScrolling: boolean, isMenuOpen: boolean }>`
    @media screen and (min-width: 700px) {
    .phone-icons {
        visibility: hidden;
        display: none;
    }
    ${({ isScrolling }) => {
        switch (isScrolling) {
            case false:
                return css`
                    height: 5.9em;
                    display: grid;
                    grid-template-columns: repeat(2, 1.2fr);
                    justify-content: center;
                    width: 98vw;
                    font-weight: bold;
                    font-family: Leaugue-Spartan;
                    font-stretch: expanded;
                    font-size: 2rem;
                    .page-buttons {
                        margin: 0.5em auto;
                        
                    }
                    .page-buttons:nth-child(-n + 2) {
                        border-bottom: 1px solid black;
                        color: #AB957C;
                        margin: 2em auto 0em auto;
                    }
                    .page-buttons:hover{
                        font-size: 1.9rem;
                        cursor: pointer;
                        transition: ease all 0.5s;
                    }
                `;
            case true:
                return css`
                display: flex;
                font-weight: bold;
                font-family: Leaugue-Spartan;
                font-stretch: expanded;
                font-size: 1.5rem;
                .page-buttons{
                    padding: 2rem;
                }
                :hover {
                    color: white;
                    background-color: #AB957C;
                    cursor: pointer;
                }
                `;
            }
        }}
    }

    @media screen and (max-width: 700px) {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: #E7E5E0;
        left: ${({ isMenuOpen }) =>
        isMenuOpen === true ? '0vw' : '-100vw'};
        transition: 0.5s ease all;
        .page-buttons {
            z-index: 99999;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: 10rem;
            border-bottom: 1px solid rgba(0,0,0, 0.5);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            padding: 2rem 0;
            font-family: Leaugue-Spartan;
        }
        .page-buttons:first-child {
            margin-top: 2.5rem;
        }
        .page-buttons img {
            margin: 0 10px 0 2rem;
        }
        .phone-icons {
            display: block;
            visibility: visible;
        }
        .hamburger {
            position: ${({ isScrolling }) =>
            isScrolling === true ? 'fixed' : 'absolute'};
            z-index: -1;
            top: ${({ isScrolling }) =>
            isScrolling === true ? '0.5rem' :'5rem' };
            left: ${({ isScrolling }) =>
            isScrolling === true ? '0.3rem' :'108vw' };
        }
        .close {
            position: absolute;
            top: 1.5rem;
            left: 2rem;
        }
    }
    `;

const Hero = styled.div`
    height: 45.5em;
    position: relative;
    .hero-div {
        display: flex;
        width: 100%;
        z-index: -100;
        justify-content: center;
    }
    
    img {
        position: absolute;
        height: 45.5em;
        object-fit: contain;
        z-index: 999;
    }

    .intro-1 {
        position: relative;
        top: 20.5rem;
        left: 15vw;
        width: fit-content;
        font-family: korean-font;
        font-size: 2.7vw;
    }

    .intro-2 {
        position: absolute;
        top: 18rem;
        left: 70.4vw;
        width: fit-content;
        font-family: korean-font;
        font-size: 3.7rem;
    }
    .intro-3 {
        position: relative;
        top: 19.5rem;
        left: 70.4vw;
        width: fit-content;
        font-family: korean-font;
        font-size: 3.7rem;
        color: #AB957C;
    }

    .marquee {
        ul {
            margin: 0px auto;
        }
    font-family: korean-font;
    font-size: 2.5rem;
    color: #9F9E9E; 
    height: fit-content;
    --gap: 1vw;
    position: relative;
    top: 28rem;
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    letter-spacing: 0.7rem;
    }

    .marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll 20s linear infinite;
    list-style-type: none;
    }

    @keyframes scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-100% - var(--gap)));
    }
    }

    /* Reverse animation */
    .marquee--reverse .marquee__content {
    animation-direction: reverse;
    }

    /* Pause on hover */
    .marquee--hover-pause:hover .marquee__content {
    animation-play-state: paused;
    }

    @media screen and (max-width: 900px) {
        .intro-1{
            visibility: hidden;
        }
    }
    
@media screen and (max-width: 700px) {
    img {
        z-index: -1;
        width: 100vw;
        height: fit-content;
        postition: relative;
        bottom: 13rem;
    }

    .intro-2 {
        top: 2.5rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 2.5rem;
    }
    .intro-3 {
        left: 0;
        width: 100%;
        text-align: center;
        top: 4.5rem;
        font-size: 2.5rem;
        z-index: -2;
    }
}
    `;

const Map = styled.div<{ hoveredElement: string }>`
    position: relative;
    display: flex;
    height: calc(50vw);
    .pins > img:hover {
        transform: translateY(-5px);
        transition: 0.5s ease all;
    }
    .explanations {
        visibility: hidden;
    }
    .explanations > div {
        position: absolute;
    }

    .explanations-placeholder {
        position: absolute;
        font-family: korean-font;
        color: #9F9E9E;
        height: 100vh;
        top: 22vw;
        left: calc(100vw - 20vw);
        width: 15.9vw;
        font-size: 1.5rem;
        z-index: -1;
        animation: float 2s ease-in-out infinite;
        height: fit-content;
        background-color: white;
        padding: 3px;
        box-shadow: 5px 5px #805422;
    }

    @keyframes float {
        0% {
          transform: translatey(0px);
        }
        50% {
          transform: translatey(-10px);
        }
        100% {
          transform: translatey(0px);
        }
      }
      
      @keyframes float2 {
        0% {
          line-height: 30px;
          transform: translatey(0px);
        }
        55% {
          transform: translatey(-7px);
        }
        60% {
          line-height: 30px;
        }
        100% {
          line-height: 30px;
          transform: translatey(0px);
        }
      }
    [id*=${({ hoveredElement}) => hoveredElement}] {
            left: 100vw;
            top: 12vw;
            visibility: visible;
            text-align: start;
            padding-left: 10px;
            background-color: #E7E5E0;
            transform: translateX(-21vw);
            transition: 0.7s ease transform;
            font-size: 1.5vw;
            width: 17vw;
            background-color: white;
            padding: 3px;
            box-shadow: 5px 5px #805422;
        }
    .city {
        color: #9F9E9E;
        font-size: 1.5rem;
        margin: 2px;
        font-family: korean-font;
    }
    .country {
        color: #AB957C;
        font-size: 1.5rem;
        margin: 0;
        font-family: korean-font;
    }
    
    @media screen and (max-width: 700px) { 
        position: absolute;
        left: -3rem;
        margin-bottom: 2rem;
        padding-right: 0rem;
        width: 110%;
        .explanations-placeholder {
            position: absolute;
            font-size: 13px;
            left: 90vw;
        }
        [id*=${({ hoveredElement}) => hoveredElement}] {
            width: 34vw;
            transform: translateX(-38vw);

        }
}
    `;

const PortfolioWrapper = styled.div<{ hoveredElement: string }>`
    height: fit-content;
    
    .main-port{
        position: relative;
        top: -5vw;
        display: grid;
        grid-template-columns: repeat(2, 1.2fr);
        .portfolio-image {
            width: 20vw;
            height: 20vw;
            z-index: 999;
            background-color: white;
        }
        .tester {
            z-index: -1;
            width: 20vw;
            height: 20vw;
            position: absolute;
            top: 1rem;
            left: 0.8rem;
            border: 1px solid black;
        }
        .portfolio-name {
            position: relative;
            left: 21.5vw;
            top: -3vw;
            width: 11vw;
            white-space: normal;
            word-wrap: break-word;
            font-family: korean-font;
            font-size: 1.5vw;
        }
        .portfolio-expo {
            width: 20vw;
            height: 20vw;
            overflow: hidden;
            position: absolute;
            top: -0px;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 1.5vw;
            font-weight: lighter;
            font-family: korean-font-light;
            backdrop-filter: blur(1.5rem);
            pointer-events: none;
        }
    }
    .main-port > div {
        margin-left: 15vw;
    }

    text {
        -webkit-text-fill-color: #E7E5E0;
        -webkit-text-stroke: 1px white;
        height : 120px;
        font: bold 60px Century Gothic, Arial;
        width: 100%;
        text-align: center;
        z-index: -2;
    }
    @media screen and (max-width: 700px) { 
        text {
            visibility: hidden;
        }
        .main-port{
            grid-template-columns: repeat(1, 1.2fr);
            .portfolio-image, .tester {
                width: 60vw;
                height: 60vw;
                margin: auto;
            }
            .portfolio-name {
                font-size: 30px;
                width: 180px;
                left: 42vw;
            }
        }


    `;

const DownloadCVWrapper = styled.div`
    .portfolio-button {
        text-decoration: none;
        display: flex;
        justify-content: center;
    }
    .portfolio-button-inside, .portfolio-button-inside:visited, .portfolio-button-inside:active {
        padding: 1rem 2rem;
        border: 1px solid white;
        text-decoration: none;
        background-color: #AB957C; 
        color: white;
    }
    .portfolio-button-inside:hover {
        transform: scale(0.9);
        transition: ease all 0.2s;
    }
`;

const InterestsWrapper = styled.div`
    height: fit-content;
    margin-top: 6rem;
    
    p {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        text-decoration: underline 1px double;
        font-family: korean-font;
    }

    .interest {
        display: flex;
        margin-bottom: 5rem;
        justify-content: space-evenly;
    }
    .topic {
        flex-basis: 30%;
        color: #805422;
        font-size: 3.5rem;
        font-weight: 700;
        
    }
    .expo {
        flex-basis: 30%;
        text-align: justify;
        font-size: 1rem;

    }
    @media screen and (max-width: 700px) { 
        .topic {
            font-size: 40px;
        }
        .expo {
            height: 50vh;
            overflow: scroll;
        }
    }
`;

const ContactWrapper = styled.div`
    height: fit-content;
    margin-bottom: 50px;
    display: flex;
    font-size: 2.5rem;
    font-weight: 600;
    p{
        font-size: 1.2rem;
        font-weight: 400;
    }
    form input, form textarea {
        width: 100%;
        border: 0px;
        background-color: #D4D4D4;
        color: black;
        outline: none;
        padding: 10px;
        font-size: 15px;
        margin: 5px 0px;
        font-family: Helvetica;
    }
    .contact-left {
        flex-basis: 35%;
        margin-left: 13%;
        margin-right: 20%;
    }
    .contact-right {
        flex-basis: 60%;
        margin-right: 14.4%;
    }
    .button{
        padding: 1rem 2rem;
        border: 1px solid white;
        text-decoration: none;
        color: white;
        background: #AB957C;
    }
    .contact-left::before {
        content: "";
        border: 1px solid black;
        position: absolute;
        bottom: 25px;
        left: 10vw;
        width: 80vw;
        height: 22rem;
        z-index: -1;
    }
    @media screen and (max-width: 700px) { 
        .contact-left::before {
            left: 5vw;
            width: 90vw;
            bottom: 35px;
        }
        p {
            font-size: 1rem;
        }
        .contact-left {
            max-width: 40%;
            flex-basis: 10%;
            margin-left: 10%;
            margin-right: 10%;
        }
        .contact-right {
            flex-basis: 60%;
        }
    `; 
