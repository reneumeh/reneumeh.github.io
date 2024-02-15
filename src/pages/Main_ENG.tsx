import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';

function Main() {
    const Portfolio = useRef(null);
    const Contact = useRef(null);
    const texasPin = useRef(null);
    const lagosPin = useRef(null);
    const seoulPin = useRef(null);

    const [isScrolling, setScrolling] = useState(false);

    const [hoveredElement, sethoveredElement] = useState("");

    const handleHover = ( pinName:string ) => {
            sethoveredElement(pinName);
    };
            
    const handleLeave = () => {
            sethoveredElement("");
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 140) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
    });

    const scrollToElement = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
    console.log(hoveredElement);
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
            <div>Hero</div>
            <div className="marquee marquee--hover-pause" style={{top: "35em"}}>
                <ul className="marquee__content">
                    <li>1</li><li>2</li><li>3</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li>1</li><li>2</li><li>3</li>
                </ul>
            </div>
            <div className="marquee marquee--reverse marquee--hover-pause" style={{top: "28em"}}>
                <ul className="marquee__content">
                <li>4</li><li>5</li><li>6</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li>4</li><li>5</li><li>6</li>
                </ul>
            </div>
            <div className="marquee marquee--hover-pause" style={{top: "20em"}}>
                <ul className="marquee__content">
                    <li>7</li><li>8</li><li>9</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li>7</li><li>8</li><li>9</li>
                </ul>
            </div>
        </Hero>
        <Map hoveredElement= {hoveredElement} style={{ overflow: "clip" }}>
            <div className="WorldMap" style={{ position: "absolute" }}>
                Map
                {MapElements.map((pin) => (<>
                    <img
                    ref ={pin.ref}
                    src= "../public/pin.png"
                    onMouseEnter={() => handleHover(pin.city)} 
                    onMouseLeave={handleLeave}
                    style={{position: "absolute", top: pin.loc.top, left: pin.loc.left}}
                    />
                    <div className= "Explanations">
                        <div
                        id= {pin.city}>
                            {pin.city}
                            {pin.country}
                            {pin.explanation}
                        </div>
                    </div>
                    </>
                ))}
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
                <text style= {{position: "absolute", top: "45vh"}}>MECHANICAL ENGINEERING</text>
                <text style= {{position: "absolute", top: "145vh"}}>PROGRAMMING AND DESIGN</text>
                <text style= {{position: "absolute", top: "245vh"}}>EXTRACURRICULAR</text>
                <a
                href="my_portfoilio.pdf"
                >
                    <div>download portfolio</div>
                </a>
        </PortfolioWrapper>

        <ContactWrapper ref={Contact}>
            <div>Contact Me
                <p>Location: Seoul, South Korea</p>
                <img
                src='mail.png'/><p>myemail@gmail.com</p>
            </div>
            <div> 
                <form>
                    <input type="text" name="Name" placeholder='Name' required />
                    <input type="email" name="Email" placeholder='Email' required />
                    <textarea name="Message" rows={6} placeholder='Message'></textarea>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </ContactWrapper>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
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
    .Explanations {
        visibility: hidden;
    }
    .Explanations > div {
        position: absolute;
    }

    [id*=${({ hoveredElement}) => hoveredElement}] {
            left: 100vw;
            visibility: visible;
            text-align: justify;
            transform: translateX(-12rem);
            transition: 0.7s ease all;
            width: 10rem;
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
        .portfolio-image:hover {
            ;
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
            font-weight: 400;
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
    }
    `;

const ContactWrapper = styled.div`
    height: 100vh;
    form input, form textarea {
        width: auto;
        border: 0px;
        background-color: beige;
        outline: none;
        padding: 10px;
        font-size: 15px;
    }
    `; 
