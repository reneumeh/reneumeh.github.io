import useHoveredElement from "../hooks/useHoveredElement";
import styled from "styled-components";
import { PALETTE } from "../utils/theme";
import Image from 'next/image';
import { portfolio_stuff } from "../config/portfolio-stuff_kor";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal_kor";

const PortfolioComp = (props: {mechSection: React.MutableRefObject<null>, extraSection: React.MutableRefObject<null>, panddSection: React.MutableRefObject<null>, Portfolio: React.MutableRefObject<null>}) => {
    const {handleHover, handleLeave, hoveredElement} = useHoveredElement();
    const [useModal, setUseModal] = useState("")
    const handleClick = (item_name: string) => {
        setUseModal(item_name)
    }
    const handleCloseModal = () => {
        setUseModal("")
    }

  return (
    <PortfolioWrapper ref={props.Portfolio} hoveredElement= {hoveredElement} style= {{position: "relative"}}>
        {
            !!useModal && <PortfolioModal item_name={useModal} handleCloseModal={handleCloseModal} />
        }
        <div className='main-port'>     
            {portfolio_stuff.map((item, index) => (
                <div key={index} style={{ position: "relative" }}>
                <img 
                className='portfolio-image' 
                src={item.image} 
                id={item.name}
                alt= {item.name}
                onMouseEnter={() => handleHover(item.name)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(item.name)}/>
                <div className='tester'></div> 
                <p className='portfolio-name'>{item.name}</p>
                {hoveredElement === item.name &&
                    <div className='portfolio-expo' >
                    {item.explanation}
                    </div>}
                </div>
            ))}
        </div>
        <text ref= {props.mechSection} style= {{position: "absolute", top: "18vw", overflowX: "clip"}}>기계 공학</text>
        <text ref= {props.panddSection} style= {{position: "absolute", top: "66.5vw", overflowX: "clip"}}>프로그래밍 및 디자인</text>
        <text ref= {props.extraSection} style= {{position: "absolute", top: "117vw", overflowX: "clip"}}>과외 활동</text>
    </PortfolioWrapper>
) 
}

export default PortfolioComp

const PortfolioWrapper = styled.div<{ hoveredElement: string }>`
    height: fit-content;
    
    .main-port{
        position: relative;
        top: -5vw;
        display: grid;
        grid-template-columns: repeat(2, 1.2fr);
        .portfolio-image {
            width: 20vw;
            height: 20vw;
            z-index: 999;
            background-color: ${PALETTE.WHITE};
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
            font-family: korean-font;
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
            font-family: korean-font-light;
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
        .main-port{
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



    `;
