import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';

function Profile() {
    const Portfolio = useRef(null);
    const Contact = useRef(null);
    const texasPin = useRef(null);
    const lagosPin = useRef(null);
    const seoulPin = useRef(null);

    const [isScrolling, setScrolling] = useState(false);

    const [hoveredPin, sethoveredPin] = useState("");

    const handleHover = ( pinName:string ) => {
            sethoveredPin(pinName);
    };
            
    const handleLeave = () => {
            sethoveredPin("");
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
    console.log(hoveredPin)
  return (
    <Wrapper>
        <Header isScrolling= {isScrolling}>
            <a 
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
        <Map hoveredPin= {hoveredPin}>
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
        <PortfolioWrapper ref={Portfolio}>
            <div>Portfolio
                <img src="/static/portfolio_image_1.png"/>
                <div>I can design parts</div>
                <span>PART DESIGN</span>
                <img src="../public/portfolio_image_2.png"/>
                <img src="../public/portfolio_image_3.png"/>
                <img src="../public/portfolio_image_4.png"/>
                <span>MECHANICAL ENGINEERING</span>
                <span>PROGRAMMING</span>
                <span>EXTRACURRICULAR</span>
            </div>
        </PortfolioWrapper>

        <ContactWrapper ref={Contact}>
            <div>Contact</div>
        </ContactWrapper>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.div`
    `;

const Header = styled.div<{ isScrolling: boolean }>`
    position: ${({ isScrolling }) =>
    isScrolling === true ? 'fixed' : "absolute"};

    a{
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'block' : 'none'};
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
                    .page-buttons {
                        margin: 2em 20vw;
                    }
                    :hover{
                        color: red;
                    }
                `;
            case true:
                return css`
                display: flex;
                background-color: blue;
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
    `;

const Map = styled.div<{ hoveredPin: string }>`
    position: relative;
    height: 100vh;
    display: flex;
    .Explanations {
        visibility: hidden;
    }
    .Explanations > div {
        position: absolute;
    }

    [id*=${({ hoveredPin}) => hoveredPin}] {
            left: 100vw;
            visibility: visible;
            text-align: justify;
            transform: translateX(-12rem);
            transition: 0.7s ease all;
            width: 10rem;
        }
    `;

const PortfolioWrapper = styled.div`
    height: 100vh;
    img:hover {
        filter: blur(1.5rem);
    }
    `;

const ContactWrapper = styled.div`
    height: 100vh;
    `; 