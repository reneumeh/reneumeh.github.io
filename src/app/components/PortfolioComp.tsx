import useHoveredElement from "../hooks/useHoveredElement";
import styled from "styled-components";
import { useRef, useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { PALETTE } from "../utils/theme";
import { portfolio_stuff } from "../config/portfolio-stuff";
import { motion, useInView } from "framer-motion";
import { renderText } from "./renderText";

type portfolioProps = {
    mechSection: React.MutableRefObject<null>, 
    extraSection: React.MutableRefObject<null>, 
    panddSection: React.MutableRefObject<null>, 
    portfolio: React.MutableRefObject<null>
};

type PortfolioItemProps = {
    item: { image: string; name: string; explanation: string };
    index: number;
    handleHover: (name: string) => void;
    handleLeave: () => void;
    handleClick: (name: string, path: string) => void;
    hoveredElement: string;
};

const PortfolioComp = ({ mechSection, extraSection, panddSection, portfolio } : portfolioProps) => {
    const { handleHover, handleLeave, hoveredElement } = useHoveredElement();
    const [useModal, setUseModal] = useState("");
    const [ modalPath, setModalPath ] = useState("")
    const isInView = useInView(portfolio, { once: true });

    const isMechInView = useInView(mechSection, { once: true, amount: 0.5 });
    const isPanddInView = useInView(panddSection, { once: true, amount: 0.5 });
    const isExtraInView = useInView(extraSection, { once: true, amount: 0.5 });

    const handleClick = (item_name: string, item_path: string) => {
        setUseModal(item_name);
        setModalPath(item_path)
    };
    const handleCloseModal = () => {
        setUseModal("");
        setModalPath("")
    };

    return (
        <PortfolioWrapper ref={portfolio} hoveredElement={hoveredElement} style={{ position: "relative" }}>
            {!!useModal && <PortfolioModal item_name={useModal} item_path={modalPath} handleCloseModal={handleCloseModal} />}
            <motion.div className='main-port mech' ref={mechSection}>
                {portfolio_stuff.mechanicalEngineering.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        item={item}
                        index={index}
                        handleHover={handleHover}
                        handleLeave={handleLeave}
                        handleClick={handleClick}
                        hoveredElement={hoveredElement}
                    />
                ))}
                <span style={{ position: 'absolute', zIndex: '-100', alignSelf: 'center', justifySelf: 'center' }}>
                    {renderText({text: 'MECHANICAL ENGINEERING', isInView: isMechInView, color:  '#fff'})}
                </span>
            </motion.div>
            <div className='main-port pandd' ref={panddSection}>
                {portfolio_stuff.programmingAndDesign.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        item={item}
                        index={index}
                        handleHover={handleHover}
                        handleLeave={handleLeave}
                        handleClick={handleClick}
                        hoveredElement={hoveredElement}
                    />
                ))}
                <span style={{ position: 'absolute', zIndex: '-100', alignSelf: 'center', justifySelf: 'center' }}>
                    {renderText({text: 'PROGRAMMING AND DESIGN', isInView: isPanddInView, color:  '#fff'})}
                </span>
            </div>
            <div className='main-port extra' ref={extraSection}>
                {portfolio_stuff.extracurricular.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        item={item}
                        index={index}
                        handleHover={handleHover}
                        handleLeave={handleLeave}
                        handleClick={handleClick}
                        hoveredElement={hoveredElement}
                    />
                ))}
                <span style={{ position: 'absolute', zIndex: '-100', alignSelf: 'center', justifySelf: 'center' }}>
                    {renderText({text: 'EXTRACURRICULAR ACTIVITIES', isInView: isExtraInView, color:  '#fff'})}
                </span>
            </div>
        </PortfolioWrapper>
    );
};

const PortfolioItem = ({ item, index, handleHover, handleLeave, handleClick, hoveredElement }: PortfolioItemProps) => {
    const itemRef = useRef(null);
    const isItemInView = useInView(itemRef, { once: true });

    return (
        <motion.div
            className="inside"
            ref={itemRef}
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
                onClick={() => handleClick(item.name, item.image)}
            />
            <div className='inside tester'></div>
            <p className='portfolio-name'>{item.name}</p>
            {hoveredElement === item.name && (
                <div className='inside portfolio-expo'>
                    {item.explanation}
                </div>
            )}
        </motion.div>
    );
};

export default PortfolioComp;

const PortfolioWrapper = styled.div<{ hoveredElement: string }>`
    margin-top: 8vh;

    .main-port {
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
            font-family: League-Spartan;
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
            font-family: League-Spartan-light;
            -webkit-backdrop-filter: blur(1.5rem);
            backdrop-filter: blur(1.5rem);
            pointer-events: none;
        }

        text {
        height : 120px;
        font: bold 3rem Century Gothic, Arial;
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
                font-size: 20px;
            }

            text {
            display: none;
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
