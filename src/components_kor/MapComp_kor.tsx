import useHoveredElement from "../hooks/useHoveredElement";
import { useRef } from "react";
import styled from "styled-components";

const MapComp = () => {
    const {handleHover, handleLeave, hoveredElement} = useHoveredElement();
    const texasPin = useRef(null);
    const lagosPin = useRef(null);
    const seoulPin = useRef(null);

    const MapElements = [
        {
            country: "대한민국",
            city: "서울",
            loc: {top: "17.5vw", left: "calc(5em + 62.5vw)"},
            explanation: "저는 학사학위를 위해 서울로 여행을 갔습니다. 저는 한양 국제어학원에서 한국어를 배웠습니다. 그 후, 저는 삼성 글로벌 드림 장학금의 도움으로 기계 공학 학사를 마쳤습니다", 
            ref: seoulPin
        },
        {
            country: "미국",
            city: "오스틴",
            loc: {top: "18vw", left: "calc(5em + 16.5vw)"},
            explanation: "여기는 텍사스가 아닙니다. 그들을 붙잡을 수 없습니다. 그러니 카드를 아래위로, 아래위로, 아래위로, 렉서스를 주차하고 열쇠를 위로 던집니다. 주위에, '둥근', '둥근', '둥근', '둥근', '둥근', '둥근', '둥근', '둥근'(둥근)",
            ref: texasPin
        },
        {
            country: "나이지리아",
            city: "라고스",
            loc: {top: "22vw", left: "calc(5em + 37vw)"},
            explanation: "니오줄레그바 그들은 내 이야기를 알고 있어요 모독의 작업실에서 난 바쁘게 일하고 있어요 어 니오줄레그바, 오 나 그리고 실리 모독의 작업실에서 우린 바쁘게 일하고 있어요 어",
            ref: lagosPin
        }
    ]

  return (
    <Map hoveredElement= {hoveredElement} style={{ overflow: "clip", position: "relative" }}>
        <div className="WorldMap" >
            <img 
            id='big-map'
            src='static/map.png'
            alt= 'map'
            style={{position: 'absolute', margin: '2vh  0vw 2vh 5em', width:'80vw'}}/>
            {MapElements.map((pin) => (
                <div className='pins'>
                    <img
                    className={pin.city}
                    ref ={pin.ref}
                    alt= {pin.city}
                    src= "static/pin.png"
                    width= {20}
                    height= {30}
                    onMouseEnter={() => handleHover(pin.city)} 
                    onMouseLeave={handleLeave}
                    style={{position: "absolute", top: pin.loc.top, left: pin.loc.left}}
                    />
                    <div className= "explanations">
                        <div id= {pin.city}>
                            <p className='city'>{pin.city}</p>
                            <p className= 'country'>{pin.country}</p>
                            <p>{pin.explanation}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className= "explanations-placeholder">
                핀을 호버/클릭합니다
            </div>
        </div>
    </Map> 
  )
}

export default MapComp

const Map = styled.div<{ hoveredElement: string }>`
    position: relative;
    display: flex;
    height: calc(50vw);
    .pins > img:hover {
        transform: translateY(-5px);
        transition: 0.5s ease all;
    }
    .explanations {
        visibility: hidden;
    }
    .explanations > div {
        position: absolute;
    }

    .explanations-placeholder {
        position: absolute;
        font-family: korean-font;
        color: #9F9E9E;
        height: 100vh;
        top: 22vw;
        left: calc(100vw - 20vw);
        width: 15.9vw;
        font-size: 1.5rem;
        z-index: -1;
        animation: float 2s ease-in-out infinite;
        height: fit-content;
        background-color: white;
        padding: 3px;
        box-shadow: 5px 5px #805422;
    }

    @keyframes float {
        0% {
          transform: translatey(0px);
        }
        50% {
          transform: translatey(-10px);
        }
        100% {
          transform: translatey(0px);
        }
      }
      
      @keyframes float2 {
        0% {
          line-height: 30px;
          transform: translatey(0px);
        }
        55% {
          transform: translatey(-7px);
        }
        60% {
          line-height: 30px;
        }
        100% {
          line-height: 30px;
          transform: translatey(0px);
        }
      }
    [id*=${({ hoveredElement}) => hoveredElement}] {
            left: 100vw;
            top: 12vw;
            visibility: visible;
            text-align: start;
            padding-left: 10px;
            background-color: #E7E5E0;
            transform: translateX(-21vw);
            transition: 0.7s ease transform;
            font-size: 1.5vw;
            width: 17vw;
            background-color: white;
            padding: 3px;
            box-shadow: 5px 5px #805422;
        }
    .city {
        color: #9F9E9E;
        font-size: 1.5rem;
        margin: 2px;
        font-family: korean-font;
    }
    .country {
        color: #AB957C;
        font-size: 1.5rem;
        margin: 0;
        font-family: korean-font;
    }
    
    @media screen and (max-width: 700px) { 
        display: none;
}
    `;