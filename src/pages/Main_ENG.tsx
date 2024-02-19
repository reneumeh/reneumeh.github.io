import React, { LegacyRef } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import DownloadCV from '../components/DownloadCV';

function Main() {
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
    ref.current?.scrollIntoView({ behavior: 'smooth', block: position });
    };

    useEffect(() => {
        const handler = (e: any) => {
            if(e.target.className == hoveredElement) {
            setclickedElement(hoveredElement);
            console.log(e.target);
            }
            else {
                console.log(e.target.className);
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
        },
        {
            name: "Portfolio",
            ref: Portfolio,
        },
        {
            name: "Blog",
            link:  "/blog"
        },
        {
            name: "Contact",
            ref: Contact,
        }
    ] 

    const MapElements = [
        {
            country: "South Korea",
            city: "Seoul",
            loc: {top: "40px", left: "200px"},
            explanation: "I was in South Korea", 
            ref: seoulPin
        },
        {
            country: "USA",
            city: "Austin",
            loc: {top: "33px", left: "83px"},
            explanation: "I was in Austin",
            ref: texasPin
        },
        {
            country: "Nigeria",
            city: "Lagos",
            loc: {top: "13px", left: "53px"},
            explanation: "I was in Lagos",
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
            image: "/static/portfolio_image_1.png",
            section: "mechanicalEngineering"
        },
        {
            name: "AUTOMOBILE",
            explanation: "I am especially well-versed in automobile engineering literature and I have a background in suspension control for formula racing cars",
            image: "/static/portfolio_automobile.png.jpg",
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
            image: "/static/portfolio_3dModelling",
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
            name: "STUDENTT COUNCIL",
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
            name: "VOLUNTEERING",
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
                Rene Umeh
            </a>
            <NavBar isScrolling= {isScrolling}>
                {pages.map((page) => (
                    <div
                    key={page.name}
                    className="page-buttons"
                    onClick={() => (page.ref ? scrollToElement(page.ref) : window.location.assign(page.link))}
                >
                    {page.name}
                </div>
                ))}
            </NavBar>
            <div className='language '><a className='top' href='/'>ENG</a><a className='bottom'href="/kor">KOR</a></div>
        </Header>
        <Hero>
            <div className='intro-1'>Hi, my name is</div> <div className='intro-2'>RENE </div> <div className='intro-3'>UMEH</div> 
            <div className="marquee marquee--reverse marquee--hover-pause" style={{top: "37em"}}>
                <ul className="marquee__content">
                    <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX Designer</li><li onClick= {() => scrollToElement(extraSection, "center")}>Social Media Manager</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX Designer</li><li onClick= {() => scrollToElement(extraSection, "center")}>Social Media Manager</li>
                </ul>
            </div>
            <div className="marquee marquee--hover-pause" style={{top: "30em"}}>
                <ul className="marquee__content">
                <li onClick= {() => scrollToElement(panddSection, "center")}>Artificial Intelligence Programmer</li><li onClick= {() => scrollToElement(panddSection, "center")}>Web Developer</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(panddSection, "center")}>Artificial Intelligence Programmer</li><li onClick= {() => scrollToElement(panddSection, "center")}>Web Developer</li>
                </ul>
            </div>
            <div className="marquee marquee--reverse marquee--hover-pause" style={{top: "23em"}}>
                <ul className="marquee__content">
                    <li onClick= {() => scrollToElement(mechSection, "center")}>Mechanical Engineer</li><li onClick= {() => scrollToElement(mechSection, "center")}>Automobile Enthusiast</li>
                    
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                <li onClick= {() => scrollToElement(mechSection, "center")}>Mechanical Engineer</li><li onClick= {() => scrollToElement(mechSection, "center")}>Automobile Enthusiast</li>
                </ul>
            </div>
        </Hero>
        <Map hoveredElement= {hoveredElement} style={{ overflow: "clip" }}>
            <div className="WorldMap" style={{ position: "absolute" }}>
                Map
                {MapElements.map((pin) => (<>
                    <img
                    className={pin.city}
                    ref ={pin.ref}
                    src= "../public/pin.png"
                    onMouseEnter={() => handleHover(pin.city)} 
                    onMouseLeave={handleLeave}
                    style={{position: "absolute", top: pin.loc.top, left: pin.loc.left}}
                    />
                    <div className= "explanations">
                        <div
                        id= {pin.city}>
                            {pin.city}
                            {pin.country}
                            {pin.explanation}
                        </div>
                    </div>
                    </>
                ))}
                <div className= "explanations-placeholder">
                        Hover/Click on the pins
                    </div>
                </div>

        </Map>         
        <PortfolioWrapper ref={Portfolio} hoveredElement= {hoveredElement} style= {{position: "relative"}}>
            Portfolio
            <div className='main-port'>     
                {portfolio_stuff.map((item) => (
                    <div style={{ position: "relative" }}>
                    <img className='portfolio-image' src={item.image} 
                    id={item.name}
                    onMouseEnter={() => handleHover(item.name)}
                    onMouseLeave={handleLeave}/>
                    <div className='tester'></div> 
                    {hoveredElement == item.name &&
                    <div className='portfolio-expo' >
                    {item.explanation}</div>}
                    <p className='portfolio-name'>{item.name}</p>
                </div>
                ))}
                </div>
                <text ref= {mechSection} style= {{position: "absolute", top: "45vh"}}>MECHANICAL ENGINEERING</text>
                <text ref= {panddSection} style= {{position: "absolute", top: "145vh"}}>PROGRAMMING AND DESIGN</text>
                <text ref= {extraSection} style= {{position: "absolute", top: "245vh"}}>EXTRACURRICULAR</text>
        </PortfolioWrapper>
        <DownloadCV />
        <InterestsWrapper>
            Research Interests
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
                src='mail.png'/> dubemrene@gmail.com</p>
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

export default Main

const Wrapper = styled.div`
width: 100%;
position: absolute;
z-index: -10;
background: lilac;
    `;

const Header = styled.div<{ isScrolling: boolean }>` 
    position: ${({ isScrolling }) =>
    isScrolling === true ? 'fixed' : "absolute"};
    display: flex;
    justify-content: ${({ isScrolling }) =>
    isScrolling === true ? 'space-between' : ""};
    width: calc(100vw - 17px);
    z-index: 9999;

    .logo{
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'block' : 'none'};
        width: 10rem;
        text-decoration: none;
        margin: 0px 20vw 0px 0px;
    }

    .language{
        position: absolute;
        left: 94.2vw;
        top: 3.5em;
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'none' : 'flex'};
        flex-direction: column;
        border: 1px solid black;
        border-radius: 20px;
        font-size: 0.9rem;
        :hover {
            background-color: red;
            color: white;
        }
        .top {
                padding: 1rem 0.2rem;
                text-decoration: none;
                border-radius: 20px 20px 0px 0px;
            }
        .bottom {
            padding: 1rem 0.2rem;
            text-decoration: none;
            border-radius: 0px 0px 20px 20px;
        }
        }
        
    }
    `;

const NavBar = styled.div<{ isScrolling: boolean }>`
    ${({ isScrolling }) => {
        switch (isScrolling) {
            case false:
                return css`
                    height: 12em;
                    display: grid;
                    grid-template-columns: repeat(2, 1.2fr);
                    justify-content: center;
                    width: 98vw;
                    .page-buttons {
                        margin: 1.2em auto;
                        
                    }
                    .page-buttons:nth-child(-n + 2) {
                        border-bottom: 1px solid black;

                        margin: 4em auto 0em auto;
                    }
                    :hover{
                        color: red;
                    }
                `;
            case true:
                return css`
                display: flex;
                .page-buttons{
                    padding: 2rem;
                }
                :hover {
                    color: red;
                    background-color: beige;
                }
                `;
            }
        }}
    `;

const Hero = styled.div`
    height: 100vh;

    .intro-1 {
        position: relative;
        top: 45vh;
        left: 15vw;
        color: red;
        width: fit-content;
    }

    .intro-2 {
        position: absolute;
        top: 45vh;
        left: 57vw;
        width: fit-content;
    }
    .intro-3 {
        position: relative;
        top: 45vh;
        left: 57vw;
        width: fit-content;
    }

    .marquee {
    --gap: 1vw;
    position: relative;
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
    animation: scroll 10s linear infinite;
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

    .marquee_content > * {
        list-style-type: none;
    }
    `;

const Map = styled.div<{ hoveredElement: string }>`
    position: relative;
    height: 100vh;
    display: flex;
    .explanations {
        visibility: hidden;
    }
    .explanations > div {
        position: absolute;
    }

    .explanations-placeholder {
        position: absolute;
        left: calc(100vw - 12rem);
        width: 10rem;
        z-index: -1;
    }
    [id*=${({ hoveredElement}) => hoveredElement}] {
            left: 100vw;
            visibility: visible;
            text-align: justify;
            background: red;
            transform: translateX(-12rem);
            transition: 0.7s ease all;
            width: 10.9rem;
        }
    `;

const PortfolioWrapper = styled.div<{ hoveredElement: string }>`
    height: 300vh;
    
    .main-port{
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1.2fr);
        grid-auto-rows: 50vh;
        .portfolio-image {
            width: 20vw;
            height: 20vw;
            z-index: 999;
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
            font-weight: 100;
            backdrop-filter: blur(1.5rem);
            pointer-events: none;
        }
    }
    .main-port > div {
        margin-left: 15vw;
    }

    text {
        -webkit-text-fill-color: white;
        -webkit-text-stroke: 1px black;
        height : 120px;
        font: bold 60px Century Gothic, Arial;
        width: 100%;
        text-align: center;
        z-index: -2;
    }
    `;


const InterestsWrapper = styled.div`
    height: fit-content;
    margin-top: 4rem;
    
    .interest {
        display: flex;
        margin-bottom: 5rem;
        justify-content: space-evenly;
    }
    .topic {
        flex-basis: 30%;
        color: salmon;
        font-size: 3.5vw;
        font-weight: 700;
        
    }
    .expo {
        flex-basis: 30%;
        text-align: justify;
        font-size: 1vw;

    }
`;

const ContactWrapper = styled.div`
    height: 60vh;
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
        background-color: beige;
        outline: none;
        padding: 10px;
        font-size: 15px;
        margin: 5px 0px;
        color: #fff;
        font-size: 18px;
        font-family: Helvetica;
    }
    .contact-left {
        flex-basis: 35%;
        margin-left: 13%;
        margin-right: 20%;
    }
    .contact-right {
        flex-basis: 60%;
        margin-right: 15%;
    }
    .button{
        padding: 1rem 2rem;
        border: 1px solid black;
        text-decoration: none;
        background: beige;
    }
    `; 
