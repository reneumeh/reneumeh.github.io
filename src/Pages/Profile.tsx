import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';

function Profile() {
    const Home = useRef(null);
    const Portfolio = useRef(null);
    const Contact = useRef(null)

    const [isScrolling, setScrolling] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 140) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
    })

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
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <div className="marquee marquee--reverse marquee--hover-pause" style={{top: "28em"}}>
                <ul className="marquee__content">
                <li>4</li>
                <li>5</li>
                <li>6</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
            <div className="marquee marquee--hover-pause" style={{top: "20em"}}>
                <ul className="marquee__content">
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
        </Hero>

        <PortfolioWrapper ref={Portfolio}>
            <div>Portfolio</div>
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
                    height: 12vh;
                    display: grid;
                    grid-template-columns: repeat(2, 1.2fr);
                    .page-buttons {
                        margin: 2vh 20vw;
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

const PortfolioWrapper = styled.div`
    height: 100vh;
    `;

const ContactWrapper = styled.div`
    height: 100vh;
    `; 