import useHoveredElement from "../hooks/useHoveredElement";
import styled from "styled-components";
import { useState, useRef } from "react";
import PortfolioModal from "./PortfolioModal";
import { PALETTE } from "../utils/theme";
import { portfolio_stuff } from "../config/portfolio-stuff";
import { motion, useInView } from "framer-motion";
import Image from 'next/image';

type portfolioProps = {
    mechSection: React.MutableRefObject<null>, 
    extraSection: React.MutableRefObject<null>, 
    panddSection: React.MutableRefObject<null>, 
    portfolio: React.MutableRefObject<null>
}

const svgTextVariant = {
    hidden: { strokeDashoffset: 2000 },
    visible: { 
        strokeDashoffset: 0,
        transition: { duration: 3, ease: "easeInOut" }
    },
};

const PortfolioComp = ({ mechSection, extraSection, panddSection, portfolio } : portfolioProps) => {
    const { handleHover, handleLeave, hoveredElement } = useHoveredElement();
    const [useModal, setUseModal] = useState("");
    const portfolioRef = useRef(null);
    const isInView = useInView(portfolioRef, { once: true });

    const isMechInView = useInView(mechSection, { once: true });
    const isPanddInView = useInView(panddSection, { once: true });
    const isExtraInView = useInView(extraSection, { once: true });

    const handleClick = (item_name: string) => {
        setUseModal(item_name);
    }
    const handleCloseModal = () => {
        setUseModal("");
    }

    const renderSvgText = (pathData: string, isInView: boolean) => (
        <motion.svg
            width="100%"
            height="100"
            viewBox="0 0 1000 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.path
                d={pathData}
                stroke={PALETTE.WHITE}
                strokeWidth="2"
                strokeDasharray="2000" // Total length of path, adjust if needed
                strokeDashoffset="2000"
                variants={svgTextVariant}
            />
        </motion.svg>
    );

    const expressPortfolio = (section: {image: string, name: string, explanation: string}[]) =>{
        return section.map((item, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, { once: true });

            return (
                <motion.div
                    key={index}
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
                    <div className='tester'></div> 
                    <p className='portfolio-name'>{item.name}</p>
                    {hoveredElement === item.name && (
                        <div className='portfolio-expo'>
                            {item.explanation}
                        </div>
                    )}
                </motion.div>
        )})
    }

    return (
        <PortfolioWrapper ref={portfolio} hoveredElement={hoveredElement} style={{ position: "relative" }}>
            {!!useModal && <PortfolioModal item_name={useModal} handleCloseModal={handleCloseModal} />}
            <div className='main-port' ref={portfolioRef}>     
                {expressPortfolio(portfolio_stuff.mechanicalEngineering)}
                {expressPortfolio(portfolio_stuff.programmingAndDesign)}
                {expressPortfolio(portfolio_stuff.extracurricular)}
            </div>
            <div ref={mechSection} style={{ position: "absolute", top: "15.5vw", overflowX: "clip" }}>
                {renderSvgText("M150 100L850 100... rest of path", isMechInView)}
            </div>
            <div ref={panddSection} style={{ position: "absolute", top: "64.5vw", overflowX: "clip" }}>
                {renderSvgText("M150 100L850 100... rest of path", isPanddInView)}
            </div>
            <div ref={extraSection} style={{ position: "absolute", top: "115vw", overflowX: "clip" }}>
                {renderSvgText("M150 100L850 100... rest of path", isExtraInView)}
            </div>
        </PortfolioWrapper>
    ) 
}

export default PortfolioComp;

const PortfolioWrapper = styled.div<{ hoveredElement: string }>`
    height: fit-content;

    .main-port {
        position: relative;
        top: -5vw;
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
            border: 1px solid ${PALETTE.BLACK};
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
    }

    .main-port > div {
        margin-left: 15vw;
    }

    text {
        -webkit-text-fill-color: ${PALETTE.BACKGROUND};
        -webkit-text-stroke: 1px ${PALETTE.WHITE};
        height : 120px;
        font: bold 60px Century Gothic, Arial;
        width: 100%;
        text-align: center;
        z-index: -2;
    }

    @media screen and (max-width: 700px) { 
        text {
            visibility: hidden;
        }

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
