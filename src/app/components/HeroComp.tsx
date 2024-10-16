
import styled from 'styled-components';
import useIsScrolling from '../hooks/useIsScrolling';
import { PALETTE } from '../utils/theme';
import Image from 'next/image';

type heroProps = {
    mechSection: React.MutableRefObject<null>, 
    extraSection: React.MutableRefObject<null>, 
    panddSection: React.MutableRefObject<null>
    }

const HeroComp = ({ mechSection, extraSection, panddSection } : heroProps) => {
    const {scrollToElement} = useIsScrolling();

  return (
    <Hero>
        <div className='hero-div'>
            <img 
            src='/static/hero1.png' 
            alt='my_image'/>
        </div>
        <div className='intro-1'>Hi, my name is</div> 
        <div className='intro-2'>RENE </div> 
        <div className='intro-3'>UMEH</div> 
        <div id='marquees'>
            <div className="marquee marquee--reverse marquee--hover-pause">
                <ul className="marquee__content">
                    <li onClick= {() => scrollToElement(mechSection, "center")}>Mechanical Engineer</li><li onClick= {() => scrollToElement(mechSection, "center")}>Automobile Enthusiast</li>   
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li onClick= {() => scrollToElement(mechSection, "center")}>Mechanical Engineer</li><li onClick= {() => scrollToElement(mechSection, "center")}>Automobile Enthusiast</li>
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
                    <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX Designer</li><li onClick= {() => scrollToElement(extraSection, "center")}>Social Media Manager</li>
                </ul>
                <ul aria-hidden="true" className="marquee__content">
                    <li onClick= {() => scrollToElement(extraSection, "center")}>UI/UX Designer</li><li onClick= {() => scrollToElement(extraSection, "center")}>Social Media Manager</li>
                </ul>
            </div>
        </div>
</Hero>
  )
}

export default HeroComp

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
        height: calc(30.5rem + 5vw);
        width: 35vw;
        margin-left: 2rem;
        object-position: top;
        top: calc(18em - 12vw);
        border: 1px solid ${PALETTE.BLACK};
        box-shadow: 8px 8px ${PALETTE.PRIMARY.DARK};
        object-fit: cover;
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
        color: ${PALETTE.PRIMARY.DEFAULT};
    }

    .marquee {
        ul {
            margin: 5px auto;
        }
    font-family: Leaugue-Spartan;
    font-size: 2.5rem;
    color: ${PALETTE.SECONDARY.DARK}; 
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
    cursor: pointer;
    }

    @media screen and (max-width: 900px) {
        .intro-1{
            visibility: hidden;
        }

        img {
            left: 15vw;
        }
        
    }

@media screen and (max-width: 700px) {
    img {
        z-index: -1;
        width: 100vw;
        height: 70%;
        postition: relative;
        bottom: 12rem;
        margin-left: 0;
        top: 11.5rem;
        left: 0;
        box-shadow: none;
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

    .marquee {
    color: ${PALETTE.BACKGROUND};
    }
}
    `;
