
import styled from 'styled-components';
import useIsScrolling from '../hooks/useIsScrolling';
import { PALETTE } from '../utils/theme';
import { motion, useScroll, useTransform } from 'motion/react';

type heroProps = {
    mechSection: React.MutableRefObject<null>, 
    extraSection: React.MutableRefObject<null>, 
    panddSection: React.MutableRefObject<null>,
    hero: React.MutableRefObject<null>,
    }

const HeroComp = ({ mechSection, extraSection, panddSection, hero } : heroProps) => {
    const {scrollToElement} = useIsScrolling();
    
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.7, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);

  return (
    <Hero ref={hero}>
        <div className='hero-div'>
        <picture>
            <source srcSet="/static/hero-800.png" media="(max-width: 450px)" />
            <source srcSet="/static/hero-1600.png" media="(max-width: 800px)" />
            <motion.img 
            src='/static/hero.png' 
            width={'100%'}
            height={'100%'}
            style={{ opacity, scale }}
            alt='my_image'
            fetchPriority='high'
            loading='eager'/>
        </picture>
        </div>
        <div className='intro-1'>Hi, my name is</div> 
        <div className='intro-2'>RENE </div> 
        <div className='intro-3'>UMEH</div> 
        <div className='marquees'>
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
    height: 100vh;
    width: 100vw;
    background-color: black;
    position: relative;
    overflow: hidden;

    .hero-div {

        z-index: -100;
        justify-content: center;
    }
    
    img {
        position: absolute;
        max-height: 100vh;
        object-fit: cover;
        z-index: 0;
    }

    .intro-1 {
        position: relative;
        top: 50.5vh;
        left: 15vw;
        width: fit-content;
        font-family: League-Spartan;
        font-size: 2.7vw;
        color: ${PALETTE.WHITE};
    }

    .intro-2 {
        position: absolute;
        top: 44vh;
        left: 70.4vw;
        width: fit-content;
        font-family: League-Spartan;
        font-size: 3.7rem;
        color: ${PALETTE.WHITE};
    }
    .intro-3 {
        position: relative;
        top: 47.5vh;
        left: 70vw;
        width: fit-content;
        font-family: League-Spartan;
        font-size: 3.7rem;
        color: ${PALETTE.WHITE};
    }

    .marquees {
    position: absolute;
    bottom: 0vh;
    }
    
    .marquee {
        ul {
            margin: 5px auto;
        }
    font-family: League-Spartan;
    font-size: 2.5rem;
    color: ${PALETTE.WHITE}; 
    height: fit-content;
    --gap: 1vw;
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
    min-width: 100vw;
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

    @media screen and (max-width: 1010px) {
        .intro-1{
            visibility: hidden;
        }      
    }

@media screen and (max-width: 700px) {
    .intro-2 {
        top: 2.5vh;
        left: 0;
        width: 100%;
        text-align: center;
    }
    .intro-3 {
        left: 0;
        width: 100%;
        text-align: center;
        top: 8vh;
        font-size: 4rem;
    }
}
    `;
