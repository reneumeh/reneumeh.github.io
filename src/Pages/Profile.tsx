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
                    height: 12em;
                    display: grid;
                    grid-template-columns: repeat(2, 1.2fr);
                    .page-buttons {
                        margin: 2rem 20rem;
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
    `;

const PortfolioWrapper = styled.div`
    height: 100vh;
    `;

const ContactWrapper = styled.div`
    height: 100vh;
    `; 