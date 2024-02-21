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
            name: "Home",
            link: "/",
            img: "static/home.png"
        },
        {
            name: "Portfolio",
            ref: Portfolio,
            img: "static/portfolio.png"
        },
        {
            name: "Blog",
            link:  "/blog",
            img: "static/blog.png"
        },
        {
            name: "Contact",
            ref: Contact,
            img: "static/contact.png"
        }
    ] 

    const MapElements = [
        {
            country: "South Korea",
            city: "Seoul",
            loc: {top: "17.5vw", left: "calc(5em + 62.5vw)"},
            explanation: "I traveled to Seoul for my undergraduate degree. I learnt Korean at the Hanyang International Language Institute. Following that, I completed a BSc in Mechanical Engineering with the help of the Samsung Global Dream Scholarship", 
            ref: seoulPin
        },
        {
            country: "USA",
            city: "Austin",
            loc: {top: "18vw", left: "calc(5em + 16.5vw)"},
            explanation: "This ain't Texas (woo), ain't no hold 'em (hey) So lay your cards down, down, down, down So park your Lexus (woo) and throw your keys up (hey) Stick around, 'round, 'round, 'round, 'round (stick around)",
            ref: texasPin
        },
        {
            country: "Nigeria",
            city: "Lagos",
            loc: {top: "22vw", left: "calc(5em + 37vw)"},
            explanation: "Ni ojuelegba They know my story, from Mo'Dogg's studio I be hustle to work, ehh Ni ojuelegba, oh Me and Silly, for Mo'Dogg's studio We been hustle to work, ehh",
            ref: lagosPin
        }
    ]
    const portfolio_stuff = [
        {
            name: "PART DESIGN",
            explanation: "Using machine element design principles, I work to find innovative designs and features with a plethora of CAD platforms including Catia, SOLIDWORKS & Ansys DesignModeller",
            image: "/static/portfolio_partDesign.png",
            section: "mechanicalEngineering"
        },
        {
            name: "ANALYSIS",
            explanation: "I perform solid (static & dynamic) and fluid simulations using CAE and compare the results to theoretical estimations",
            image: "/static/portfolio_analysis.png",
            section: "mechanicalEngineering"
        },
        {
            name: "AUTOMOBILE",
            explanation: "I am especially well-versed in automobile engineering literature and I have a background in suspension control for formula racing cars",
            image: "/static/portfolio_automobile.png",
            section: "mechanicalEngineering"
        },
        {
            name: "CODING",
            explanation: "I am proficient in Python, MATLAB, C++, and many other engineering programming languages",
            image: "/static/portfolio_coding.png",
            section: "mechanicalEngineering"
        },
        {
            name: "AI & DL/ML",
            explanation: "I am conversant with the latest literature concerning different architectures of Artificial Intelligence and Machine Learning. I have experience with building and finetuning AI models",
            image: "/static/portfolio_ai.png",
            section: "programmingAndDesign"
        },
        {
            name: "3D MODELLING",
            explanation: "I have special experience with 3D asset management and 3D reconstruction using Deep Learning.",
            image: "/static/portfolio_3dModelling.png",
            section: "programmingAndDesign"
        },
        {
            name: "UI/UX DESIGN",
            explanation: "I am a self-taught UI/UX designer and I have professional experience with designing and maintaining webpages",
            image: "/static/portfolio_uiDesign.png",
            section: "programmingAndDesign"
        },
        {
            name: "WEB DEV",
            explanation: "I am proficient with TypeScript and JavaScipt and I have professional experience building responsive webpages like this one",
            image: "/static/portfolio_webDev.png",
            section: "programmingAndDesign"
        },
        {
            name: "STUDENT COUNCIL",
            explanation: "I served as President of the Samsung Global Dream Scholarship Foundation's Student Council for 2023",
            image: "/static/portfolio_studentCouncil.png",
            section: "extracurricular"
        },
        {
            name: "SOCIAL MEDIA",
            explanation: "I have managed the social media pages of the Samsung Global Dream Scholarship Foundation's Student Council and SpaceMap Inc",
            image: "/static/portfolio_socialMedia.png",
            section: "extracurricular"
        },
        {
            name: "DEBATE",
            explanation: "I enjoy debate and I participated as a member of the university debate society",
            image: "/static/portfolio_debate.png",
            section: "extracurricular"
        },
        {
            name: "VOLUNTEER",
            explanation: "I enjoy volunteering and I have volunteered at the Seoul Welfare Center For the Elderly and the Austin Animal Center",
            image: "/static/portfolio_volunteering.png",
            section: "extracurricular"
        },
    ]

    const interest_stuff = [
        {
            topic: "Advancing Robust Multimodal Sensor Fusion: A Hybrid Approach with Meta-Learning",
            expo: "Multimodal sensor fusion has seen significant advancements, yet challenges in robustness persist. I plan to conduct research that builds upon prior works by integrating a hybrid framework that combines physics-based models and neural networks, aiming to enhance the interpretability and adaptability of the system. Previous studies, such as the seminal work by Hall and Llinas (2001) on multisensor data fusion, primarily focus on either physics-based or machine-learning approaches. A hybrid model would uniquely synergize these two paradigms, leveraging the interpretability of physics-based models, as demonstrated by Hall and Llinas (2001), and the adaptability of neural networks, as explored in the work of Chen and Gupta (2017).I propose a meta-learning component that represents a novel contribution to multimodal sensor fusion. Recent works, like that of Finn, Abbeel, and Levine (2017), have explored meta-learning in the context of neural network adaptation but did not integrate it into the multimodal sensor fusion domain. My research aims to bridge this gap, introducing meta-learning to enhance the system's adaptability to new environments and sensor configurations. This advancement builds upon the findings of Parisotto and Salakhutdinov (2016), who introduced structured memory for deep reinforcement learning. By combining these elements, the hybrid approach extends beyond the limitations of existing works, offering a more comprehensive and robust solution for multimodal sensor fusion applications."
        },
        {
            topic: "Multiple Robot Simultaneous Localization and Mapping Using Deep Learning and Voronoi Diagrams",
            expo: "In the dynamic convergence of Simultaneous Localization and Mapping (SLAM), Deep Learning, and Voronoi diagrams, this research seeks to propel the field forward by introducing an innovative algorithmic framework. Extensive literature reviews (e.g., Smith et al., 2020; Wang et al., 2019) have underscored persistent challenges in SLAM, such as localization accuracy, adaptability to dynamic environments, and semantic understanding. My interest lies in its multifaceted approach to address limitations identified in previous works while incorporating Voronoi diagrams for spatial contextualization. Drawing from recent studies on deep learning applications in robotics (Brown et al., 2021; Gupta et al., 2022), the proposed algorithm aims to enhance SLAM's accuracy by leveraging deep neural networks for advanced feature extraction and matching. The Voronoi diagrams play a pivotal role in spatial decomposition, providing geometric insights that aid in constructing a more accurate and adaptive map of the environment. Strategic integration of Voronoi diagrams also facilitates a dynamic understanding of the spatial distribution of features, enhancing the adaptability of the SLAM system to varying environmental conditions. The Voronoi-based spatial decomposition complements deep learning's capabilities, allowing the system to make informed decisions based on both geometric and topological information. The research also recognizes the need for semantic understanding in SLAM systems (Cadena et al., 2016). By incorporating techniques from computer vision and semantic segmentation (Long et al., 2015), alongside Voronoi-enhanced spatial awareness, the proposed algorithm aims to endow the SLAM system with a higher-level understanding of the environment."
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
                <span>RENE </span>UMEH
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
            <div className='language '><a className='top' href='/'>ENG</a><a className='bottom'href="/kor">KOR</a></div>
        </Header>
        <Hero>
            <div className='hero-div'><img 
                src='static/hero1.png' 
                alt='my_image'/>
                </div>
            <div className='intro-1'>Hi, my name is</div> <div className='intro-2'>RENE </div> <div className='intro-3'>UMEH</div> 
            <div id='marquees'>
            <div className="marquee marquee--reverse marquee--hover-pause">
                <ul className="marquee__content">
                    <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX Designer</li><li onClick= {() => scrollToElement(extraSection, "center")}>Social Media Manager</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX Designer</li><li onClick= {() => scrollToElement(extraSection, "center")}>Social Media Manager</li>
                </ul>
            </div>
            <div className="marquee marquee--hover-pause">
                <ul className="marquee__content">
                <li onClick= {() => scrollToElement(panddSection, "center")}>Artificial Intelligence Programmer</li><li onClick= {() => scrollToElement(panddSection, "center")}>Web Developer</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(panddSection, "center")}>Artificial Intelligence Programmer</li><li onClick= {() => scrollToElement(panddSection, "center")}>Web Developer</li>
                </ul>
            </div>
            <div className="marquee marquee--reverse marquee--hover-pause">
                <ul className="marquee__content">
                    <li onClick= {() => scrollToElement(mechSection, "center")}>Mechanical Engineer</li><li onClick= {() => scrollToElement(mechSection, "center")}>Automobile Enthusiast</li>
                    
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(mechSection, "center")}>Mechanical Engineer</li><li onClick= {() => scrollToElement(mechSection, "center")}>Automobile Enthusiast</li>
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
                        Hover/Click on the pins
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
                <text ref= {mechSection} style= {{position: "absolute", top: "18vw", overflowX: "clip"}}>MECHANICAL ENGINEERING</text>
                <text ref= {panddSection} style= {{position: "absolute", top: "66.5vw", overflowX: "clip"}}>PROGRAMMING AND DESIGN</text>
                <text ref= {extraSection} style= {{position: "absolute", top: "117vw", overflowX: "clip"}}>EXTRACURRICULAR</text>
        </PortfolioWrapper>
        <DownloadCVWrapper>
            <div className='portfolio-button'>
                <a className='portfolio-button-inside'
                href="static/rene-umeh-portfolio.pdf"
                target='_blank'
                >
                    DOWNLOAD RESUME
                </a>
            </div>
        </DownloadCVWrapper>
        <InterestsWrapper>
            <p>Research Interests</p>
            {interest_stuff.map((interest_stuff) => (
            <div className='interest'>
                <div className='topic'>{interest_stuff.topic}</div><div className='expo'>{interest_stuff.expo}</div>
                </div>
            ))}
            
        </InterestsWrapper>
        <ContactWrapper ref={Contact}>
            <div className='contact-left'>Contact Me
                <p>Location: Seoul, South Korea</p>
                <p><img
                src='static/send.png'
                width= {20}/> dubemrene@gmail.com</p>
            </div>
            <div className='contact-right'> 
                <form ref={emailForm} onSubmit={sendEmail}>
                    <input type="text" name="from_name" placeholder='Name' required />
                    <input type="email" name="from_email" placeholder='Email' required />
                    <textarea name="message" rows={6} placeholder='Message'></textarea>
                    <button className="button" type="submit">SEND</button>
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
font-family: Leaugue-Spartan-minor;
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
        font-family: Leaugue-Spartan;
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
                padding: 0.7rem 0.2rem;
                text-decoration: none;
                border-radius: 20px 20px 0px 0px;
                color: black; 
                border-bottom: 1px solid black;
            }
        .bottom, .bottom:visited, bottom:active {
            padding: 0.7rem 0.2rem;
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
        font-family: Leaugue-Spartan;
        font-size: 2.7vw;
    }

    .intro-2 {
        position: absolute;
        top: 19rem;
        left: 70.4vw;
        width: fit-content;
        font-family: Leaugue-Spartan;
        font-size: 3.7rem;
    }
    .intro-3 {
        position: relative;
        top: 20.5rem;
        left: 70vw;
        width: fit-content;
        font-family: Leaugue-Spartan;
        font-size: 3.7rem;
        color: #AB957C;
    }

    .marquee {
        ul {
            margin: 5px auto;
        }
    font-family: Leaugue-Spartan;
    font-size: 2.5rem;
    color: #9F9E9E; 
    height: fit-content;
    --gap: 1vw;
    position: relative;
    top: 30rem;
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
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
        bottom: 12rem;
    }

    .intro-2 {
        top: 2.5rem;
        left: 0;
        width: 100%;
        text-align: center;
    }
    .intro-3 {
        left: 0;
        width: 100%;
        text-align: center;
        top: 5.4rem;
        font-size: 4rem;
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
        font-family: Leaugue-Spartan;
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
        font-family: Leaugue-Spartan;
    }
    .country {
        color: #AB957C;
        font-size: 1.5rem;
        margin: 0;
        font-family: Leaugue-Spartan;
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
            font-family: Leaugue-Spartan;
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
            font-family: Leaugue-Spartan-light;
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
        font-family: Leaugue-Spartan;
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
