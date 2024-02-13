import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';

function MainKOR() {
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
            name: "홈",
            link: "/",
        },
        {
            name: "포트포리오",
            ref: Portfolio,
        },
        {
            name: "블로그",
            link:  "/blog"
        },
        {
            name: "연락처",
            ref: Contact,
        }
    ] 

    const MapElements = [
        {
            country: "대한민국",
            city: "서울특별시",
            loc: {top: "40px", left: "200px"},
            explanation: "한국에 있어요", 
            ref: seoulPin
        },
        {
            country: "미국",
            city: "오스틴",
            loc: {top: "33px", left: "83px"},
            explanation: "오스틴에 있어요",
            ref: texasPin
        },
        {
            country: "나이지리아",
            city: "라고스",
            loc: {top: "13px", left: "53px"},
            explanation: "라고스에 있어요",
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
            <div className='language'><a href='/'>영어</a><a href="/kor">한국어</a></div>
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
        <Map hoveredPin= {hoveredPin} style={{ overflow: "clip" }}>
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
            <div>
                Portfolio
                <img src="/static/portfolio_image_1.png"/>
                <div>I can design parts</div>
                <span>PART DESIGN</span>
                <img src="../public/portfolio_image_2.png"/>
                <img src="../public/portfolio_image_3.png"/>
                <img src="../public/portfolio_image_4.png"/>
                <span>MECHANICAL ENGINEERING</span>
                <span>PROGRAMMING</span>
                <span>EXTRACURRICULAR</span>
                <a
                href="my_portfoilio.pdf"
                >
                    <div>download portfolio</div>
                </a>
            </div>
        </PortfolioWrapper>

        <ContactWrapper ref={Contact}>
            <div>연락처
                <p>서울, 대한민국</p>
                <img
                src='mail.png'/><p>myemail@gmail.com</p>
            </div>
            <div> 
                <form>
                    <input type="text" name="Name" placeholder='이름' required />
                    <input type="email" name="Email" placeholder='이메일' required />
                    <textarea name="Message" rows={6} placeholder='메시지'></textarea>
                    <button className="button" type="submit">제출</button>
                </form>
            </div>
        </ContactWrapper>
    </Wrapper>
  )
}

export default MainKOR

const Wrapper = styled.div`
    `;

const Header = styled.div<{ isScrolling: boolean }>`
    position: ${({ isScrolling }) =>
    isScrolling === true ? 'fixed' : "absolute"};
    display: flex;

    a{
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'block' : 'none'};
    }

    .language{
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'none' : 'block'};
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
                    .page-buttons:nth-child(-n + 2) {
                        border-bottom: 1px solid black;
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
    form input, form textarea {
        width: 80rem;
        border: 0px;
        background-color: beige;
        outline: none;
        padding: 10px;
        font-size: 15px;
    }
    `; 