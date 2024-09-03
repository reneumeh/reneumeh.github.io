import useHoveredElement from "../hooks/useHoveredElement";
import styled from "styled-components";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { PALETTE } from "../utils/theme";

type portfolioProps = {
    mechSection: React.MutableRefObject<null>, 
    extraSection: React.MutableRefObject<null>, 
    panddSection: React.MutableRefObject<null>, 
    portfolio: React.MutableRefObject<null>
}

const PortfolioComp = ({ mechSection, extraSection, panddSection, portfolio } : portfolioProps) => {
    const {handleHover, handleLeave, hoveredElement} = useHoveredElement();
    const [useModal, setUseModal] = useState("")
    const handleClick = (item_name: string) => {
        setUseModal(item_name)
    }
    const handleCloseModal = () => {
        setUseModal("")
    }

    const portfolio_stuff = [
        {
            name: "PART DESIGN",
            explanation: "Using machine element design principles, I work to find innovative designs and features with a plethora of CAD platforms including Catia, SOLIDWORKS & Ansys DesignModeller",
            image: "/static/portfolio_partDesign.png",
            section: "mechanicalEngineering"
        },
        {
            name: "ANALYSIS",
            explanation: "I perform solid (static & dynamic) and fluid simulations using CAE and compare the results to theoretical estimations",
            image: "/static/portfolio_analysis.png",
            section: "mechanicalEngineering"
        },
        {
            name: "AUTOMOBILE",
            explanation: "I am especially well-versed in automobile engineering literature and I have a background in suspension control for formula racing cars",
            image: "/static/portfolio_automobile.png",
            section: "mechanicalEngineering"
        },
        {
            name: "CODING",
            explanation: "I am proficient in Python, MATLAB, C++, and many other engineering programming languages",
            image: "/static/portfolio_coding.png",
            section: "mechanicalEngineering"
        },
        {
            name: "AI & DL/ML",
            explanation: "I am conversant with the latest literature concerning different architectures of Artificial Intelligence and Machine Learning. I have experience with building and finetuning AI models",
            image: "/static/portfolio_aiDlMl.png",
            section: "programmingAndDesign"
        },
        {
            name: "3D MODELLING",
            explanation: "I have special experience with 3D asset management and 3D reconstruction using Deep Learning.",
            image: "/static/portfolio_3dModelling.png",
            section: "programmingAndDesign"
        },
        {
            name: "UI/UX DESIGN",
            explanation: "I am a self-taught UI/UX designer and I have professional experience with designing and maintaining webpages",
            image: "/static/portfolio_uiUxDesign.png",
            section: "programmingAndDesign"
        },
        {
            name: "WEB DEV",
            explanation: "I am proficient with TypeScript and JavaScipt and I have professional experience building responsive webpages like this one",
            image: "/static/portfolio_webDev.png",
            section: "programmingAndDesign"
        },
        {
            name: "STUDENT COUNCIL",
            explanation: "I served as President of the Samsung Global Dream Scholarship Foundation's Student Council for 2023",
            image: "/static/portfolio_studentCouncil.png",
            section: "extracurricular"
        },
        {
            name: "SOCIAL MEDIA",
            explanation: "I have managed the social media pages of the Samsung Global Dream Scholarship Foundation's Student Council and SpaceMap Inc",
            image: "/static/portfolio_socialMedia.png",
            section: "extracurricular"
        },
        {
            name: "DEBATE",
            explanation: "I enjoy debate and I participated as a member of the university debate society",
            image: "/static/portfolio_debate.png",
            section: "extracurricular"
        },
        {
            name: "VOLUNTEER",
            explanation: "I enjoy volunteering and I have volunteered at the Seoul Welfare Center For the Elderly and the Austin Animal Center",
            image: "/static/portfolio_volunteer.png",
            section: "extracurricular"
        },
    ]
  return (
    <PortfolioWrapper ref={portfolio} hoveredElement= {hoveredElement} style= {{position: "relative"}}>
        {
            !!useModal && <PortfolioModal item_name={useModal} handleCloseModal={handleCloseModal} />
        }
        <div className='main-port'>     
            {portfolio_stuff.map((item) => (
                <div style={{ position: "relative" }}>
                    <img className='portfolio-image' src={item.image} 
                        id={item.name}
                        alt={item.name}
                        onMouseEnter={() => handleHover(item.name)}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(item.name)}/>
                    <div className='tester'></div> 
                    <p className='portfolio-name'>
                        {item.name}
                    </p>
                    {hoveredElement === item.name &&
                        <div className='portfolio-expo'>
                            {item.explanation}
                        </div>}
                </div>
            ))}
        </div>
        <text ref= {mechSection} style= {{position: "absolute", top: "15.5vw", overflowX: "clip"}}>MECHANICAL ENGINEERING</text>
        <text ref= {panddSection} style= {{position: "absolute", top: "64.5vw", overflowX: "clip"}}>PROGRAMMING AND DESIGN</text>
        <text ref= {extraSection} style= {{position: "absolute", top: "115vw", overflowX: "clip"}}>EXTRACURRICULAR</text>
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
