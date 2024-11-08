import useHoveredElement from "../hooks/useHoveredElement";
import styled from "styled-components";
import { useState, useRef } from "react";
import PortfolioModal from "./PortfolioModal";
import { PALETTE } from "../utils/theme";
import { portfolio_stuff } from "../config/portfolio-stuff";
import { motion, useInView } from "framer-motion";
import { renderText } from "./extra-d";
import Image from 'next/image';

type portfolioProps = {
    mechSection: React.MutableRefObject<null>, 
    extraSection: React.MutableRefObject<null>, 
    panddSection: React.MutableRefObject<null>, 
    portfolio: React.MutableRefObject<null>
}

const PortfolioComp = ({ mechSection, extraSection, panddSection, portfolio } : portfolioProps) => {
    const { handleHover, handleLeave, hoveredElement } = useHoveredElement();
    const [useModal, setUseModal] = useState("");
    const isInView = useInView(portfolio, { once: true });

    const isMechInView = useInView(mechSection, { once: true, amount: 0.5 });
    const isPanddInView = useInView(panddSection, { once: true, amount: 0.5 });
    const isExtraInView = useInView(extraSection, { once: true, amount: 0.5 });

    const handleClick = (item_name: string) => {
        setUseModal(item_name);
    }
    const handleCloseModal = () => {
        setUseModal("");
    }

    const expressPortfolio = (section: {image: string, name: string, explanation: string}[]) =>{
        return section.map((item, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, { once: true });

            return (
                <motion.div
                    key={index}
                    className="inside"
                    ref={itemRef} // Use individual ref for each item
                    style={{ position: "relative" }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={isItemInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                >
                    <img
                        className='portfolio-image'
                        src={item.image} 
                        id={item.name}
                        alt={item.name}
                        onMouseEnter={() => handleHover(item.name)}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(item.name)}
                    />
                    <div className='inside tester' ></div> 
                    <p className='portfolio-name'>{item.name}</p>
                    {hoveredElement === item.name && (
                        <div className='inside portfolio-expo'>
                            {item.explanation}
                        </div>
                    )}
                </motion.div>
        )})
    }

    return (
        <PortfolioWrapper ref={portfolio} hoveredElement={hoveredElement} style={{ position: "relative" }} >
            {!!useModal && <PortfolioModal item_name={useModal} handleCloseModal={handleCloseModal} />}
            <motion.div className='main-port mech' ref={mechSection}>  
                    {expressPortfolio(portfolio_stuff.mechanicalEngineering)}
                    <span style={{ position: 'absolute', zIndex: '-100', alignSelf: 'center', justifySelf: 'center'}} >
                    {renderText({text: 'MECHANICAL ENGINEERING', isInView: isMechInView, color:  '#fff'})}
                    </span>
            </motion.div>
            <div className='main-port pandd' ref={panddSection}>  
                {expressPortfolio(portfolio_stuff.programmingAndDesign)}
                <span style={{ position: 'absolute', zIndex: '-100', alignSelf: 'center', justifySelf: 'center'}} >
                    {renderText({text: 'PROGRAMMING AND DESIGN', isInView: isPanddInView, color:  '#fff'})}
                </span>
                
            </div>
            <div className='main-port extra' ref={extraSection}>  
                {expressPortfolio(portfolio_stuff.extracurricular)}
                <span style={{ position: 'absolute', zIndex: '-100', alignSelf: 'center', justifySelf: 'center'}} >
                    {renderText({text: 'EXTRACURRICULAR ACTIVITIES', isInView: isExtraInView, color:  '#fff'})}
                </span>
                
            </div>
        </PortfolioWrapper>
    ) 
}

export default PortfolioComp;

const PortfolioWrapper = styled.div<{ hoveredElement: string }>`
    height: fit-content;

    .main-port {
        position: relative;
        top: 4vw;
        display: grid;
        grid-template-columns: repeat(2, 1.2fr);

        .portfolio-image {
            width: 20vw;
            height: 20vw;
            z-index: 999;
            background-color: ${PALETTE.WHITE};
            cursor: pointer;
        }

        .tester {
            z-index: -1;
            width: 20vw;
            height: 20vw;
            position: absolute;
            top: 1rem;
            left: 0.8rem;
            border: 1px solid ${PALETTE.BLACK}
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
            -webkit-backdrop-filter: blur(1.5rem);
            backdrop-filter: blur(1.5rem);
            pointer-events: none;
        }

        text {
        height : 120px;
        font: bold 60px Century Gothic, Arial;
        text-align: center;
        }
    }

    .main-port > .inside {
        margin-left: 15vw;
    }

    @media screen and (max-width: 700px) { 

        .main-port {
            grid-template-columns: repeat(1, 1.2fr);
            .portfolio-image, .tester, .portfolio-expo {
                width: 60vw;
                height: 60vw;
                margin: auto;
                font-size: 17px;
            }
            .portfolio-name {
                font-size: 22px;
                width: 160px;
                top: 0vw;
                left: 42vw;
            }
        }
    }
`;
