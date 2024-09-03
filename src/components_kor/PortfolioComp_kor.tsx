import useHoveredElement from "../hooks/useHoveredElement";
import styled from "styled-components";
import { PALETTE } from "../utils/theme";

const PortfolioComp = (props: {mechSection: React.MutableRefObject<null>, extraSection: React.MutableRefObject<null>, panddSection: React.MutableRefObject<null>, Portfolio: React.MutableRefObject<null>}) => {
    const {handleHover, handleLeave, hoveredElement} = useHoveredElement();

    const portfolio_stuff = [
        {
            name: "설계",
            explanation: "기계 요소 설계 원리를 사용하여 Catia, SOLIDWORKS & Ansys DesignModeller를 포함한 다양한 CAD 플랫폼에서 혁신적인 디자인과 기능을 찾는 작업을 수행합니다",
            image: "/static/portfolio_partDesign.png",
            section: "mechanicalEngineering"
        },
        {
            name: "분석",
            explanation: "CAE를 사용하여 고체(정적 및 동적) 및 유체 시뮬레이션을 수행하고 그 결과를 이론적 추정치와 비교합니다",
            image: "/static/portfolio_analysis.png",
            section: "mechanicalEngineering"
        },
        {
            name: "자동차",
            explanation: "저는 특히 자동차 공학 문헌에 정통하고 포뮬러 레이싱 자동차의 서스펜션 제어에 대한 배경 지식이 있습니다",
            image: "/static/portfolio_automobile.png",
            section: "mechanicalEngineering"
        },
        {
            name: "코딩",
            explanation: "저는 Python, MATLAB, C++ 및 기타 많은 엔지니어링 프로그래밍 언어에 능숙합니다",
            image: "/static/portfolio_coding.png",
            section: "mechanicalEngineering"
        },
        {
            name: "AI & DL/ML",
            explanation: "저는 인공지능과 머신러닝의 다양한 아키텍처에 관한 최신 문헌에 대해 잘 알고 있습니다. 인공지능 모델을 구축하고 미세 조정한 경험이 있습니다",
            image: "/static/portfolio_ai.png",
            section: "programmingAndDesign"
        },
        {
            name: "3D 모델링",
            explanation: "저는 딥러닝을 이용한 3D 자산관리와 3D 재구성에 대한 특별한 경험을 가지고 있습니다.",
            image: "/static/portfolio_3dModelling.png",
            section: "programmingAndDesign"
        },
        {
            name: "UI/UX 디자인",
            explanation: "저는 독학한 UI/UX 디자이너이며 웹페이지 디자인 및 유지보수에 대한 전문적인 경험을 가지고 있습니다",
            image: "/static/portfolio_uiDesign.png",
            section: "programmingAndDesign"
        },
        {
            name: "웹 개발",
            explanation: "저는 TypeScript와 JavaScipt에 능숙하며 이 웹 페이지와 같은 반응형 웹 페이지를 구축한 전문적인 경험이 있습니다",
            image: "/static/portfolio_webDev.png",
            section: "programmingAndDesign"
        },
        {
            name: "학생 임원단",
            explanation: "2023년 삼성글로벌드림장학재단 총학생회장을 역임하였습니다",
            image: "/static/portfolio_studentCouncil.png",
            section: "extracurricular"
        },
        {
            name: "소셜 미디어",
            explanation: "저는 삼성글로벌드림장학재단 학생회와 스페이스맵의 소셜미디어 페이지를 관리해 왔습니다",
            image: "/static/portfolio_socialMedia.png",
            section: "extracurricular"
        },
        {
            name: "토론",
            explanation: "저는 토론을 즐기고 대학 토론회의 일원으로 참여했습니다",
            image: "/static/portfolio_debate.png",
            section: "extracurricular"
        },
        {
            name: "봉사 활동",
            explanation: "저는 자원봉사를 즐기고 있으며 서울시노인복지관과 오스틴 동물원에서 자원봉사를 하고 있습니다",
            image: "/static/portfolio_volunteering.png",
            section: "extracurricular"
        },
    ]
  return (
    <PortfolioWrapper ref={props.Portfolio} hoveredElement= {hoveredElement} style= {{position: "relative"}}>
        <div className='main-port'>     
            {portfolio_stuff.map((item) => (
                <div style={{ position: "relative" }}>
                <img 
                className='portfolio-image' 
                src={item.image} 
                id={item.name}
                alt= {item.name}
                onMouseEnter={() => handleHover(item.name)}
                onMouseLeave={handleLeave}
                onClick={() => handleHover(item.name)}/>
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
