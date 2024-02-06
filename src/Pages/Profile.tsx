import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

function Profile() {
    const Home = useRef(null);
    const Portfolio = useRef(null);
    const Contact = useRef(null)

    const [isScrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

    const scrollToElement = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const pages = [
        {
            name: "Home",
            ref: Home,
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
        <Header>
            <NavBar>
                {pages.map((page) => (page.name == "Blog" ?
                    <a className= "page-buttons"
                        href= {page.link}
                        target="_self"
                        rel="noopener noreferrer"
                        > 
                        {page.name}
                    </a>
                :
                    <div className= "page-buttons" onClick={() => scrollToElement(page.ref)}>
                        {page.name}
                    </div>
                ))}
            </NavBar>
        </Header>
        <Hero ref={Home}>
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

const Header = styled.div`
    `;

const NavBar = styled.div`
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