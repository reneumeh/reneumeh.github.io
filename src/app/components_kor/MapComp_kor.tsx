"use-client"
import useHoveredElement from "../hooks/useHoveredElement";
import { useRef } from "react";
import styled from "styled-components";
import { PALETTE } from "../utils/theme";
import Image from 'next/image';
import { motion, useInView } from "framer-motion";

const MapComp = () => {
  const { handleHover, handleLeave, hoveredElement } = useHoveredElement();
  const texasPin = useRef(null);
  const lagosPin = useRef(null);
  const seoulPin = useRef(null);
  const mapRef = useRef(null); 
  const isInView = useInView(mapRef, { once: true, amount: 'some'}); 

    const MapElements = [
        {
            country: "미국",
            city: "오스틴",
            loc: {top: "16.5vw", left: "calc(5em + 16.5vw)"},
            explanation: "2021년 텍사스 대학교 오스틴 캠퍼스에서 교환 학기를 보내기 위해 텍사스로 여행을 갔다. 여행을 하면서 완전히 독립해서 사는 것은 처음이었다. 학기가 끝나고 라브너 교육에서 인턴십을 했습니다.",
            ref: texasPin
        },
        {
            country: "나이지리아",
            city: "라고스",
            loc: {top: "22vw", left: "calc(5em + 37vw)"},
            explanation: "저는 나이지리아 라고스에서 다섯 자녀 중 둘째로 태어나고 자랐습니다. 돋보이려는 욕구는 대가족일 때 자연스럽게 나타납니다. 저는 세인트 그레고리 졸업장으로 공부하고 졸업했습니다.",
            ref: lagosPin
        },
        {
          country: "대한민국",
          city: "서울",
          loc: {top: "15vw", left: "calc(5em + 62.5vw)"},
          explanation: "저는 학사학위를 위해 서울로 여행을 갔습니다. 저는 한양 국제어학원에서 한국어를 배웠습니다. 그 후, 저는 삼성 글로벌 드림 장학금의 도움으로 기계 공학 학사를 마쳤습니다", 
          ref: seoulPin
      },
    ]

  return (
    <Map
    ref={mapRef}
    as={motion.div}
    initial={{ y: 100, opacity: 0 }}
    animate={isInView ? { y: 0, opacity: 1 } : {}}
    transition={{ type: "spring", stiffness: 50, damping: 20 }}
    hoveredElement={hoveredElement}
    style={{ overflow: "clip", position: "relative" }}
>
    <div className="WorldMap">
        <img
            id='big-map'
            alt='map'
            src='/static/map.png'
            style={{ position: 'absolute', margin: '2vh  0vw 2vh 5em', width: '80vw', color: 'white' }}
        />
        {MapElements.map((pin, index) => (
            <motion.div
                className="pins"
                key={index}
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.3, type: "spring", stiffness: 100 }}
            >
                <img
                    className={pin.city}
                    alt={pin.city}
                    ref={pin.ref}
                    src="/static/pin.png"
                    width={20}
                    height={30}
                    onMouseEnter={() => handleHover(pin.city)}
                    onMouseLeave={handleLeave}
                    style={{ position: "absolute", top: pin.loc.top, left: pin.loc.left }}
                />
                <div className="explanations">
                    <div id={pin.city}>
                        <p className='city'>{pin.city}</p>
                        <p className='country'>{pin.country}</p>
                        <p>{pin.explanation}</p>
                    </div>
                </div>
            </motion.div>
        ))}
        <div className="explanations-placeholder">
                핀을 호버/클릭합니다
            </div>
        </div>
    </Map> 
  )
}

export default MapComp

const Map = styled.div<{ hoveredElement: string }>`
position: relative;
height: 44vw;

.pins > img:hover, img:active {
    transform: translateY(-5px);
    transition: 0.5s ease all;
    cursor: pointer;
}
.explanations {
    visibility: hidden;
    transition: 0.7s ease transform;
}
.explanations > div {
    position: absolute;
    left: 100vw;
    top: 12vw;
    visibility: visible;
    text-align: start;
    padding-left: 10px;
    background-color: ${PALETTE.BACKGROUND};
    transition: 0.7s ease transform;
    font-size: 1.5vw;
    width: 17vw;
    background-color: ${PALETTE.WHITE};
    padding: 3px;
    box-shadow: 5px 5px ${PALETTE.PRIMARY.DARK};
}

.explanations-placeholder {
    position: absolute;
        font-family: korean-font;
    color: ${PALETTE.SECONDARY.DARK};
    height: 100vh;
    top: 22vw;
    left: calc(100vw - 20vw);
    width: 15.9vw;
    font-size: 1.5rem;
    z-index: -1;
    animation: float 2s ease-in-out infinite;
    height: fit-content;
    background-color: ${PALETTE.WHITE};
    padding: 3px;
    box-shadow: 5px 5px ${PALETTE.PRIMARY.DARK};
}

@keyframes float {
    0% { transform: translatey(0px); }
    50% { transform: translatey(-10px); }
    100% { transform: translatey(0px); }
}

[id*=${({ hoveredElement }) => hoveredElement}] {
    visibility: visible;
    text-align: start;
    transform: translateX(-21vw);
    transition: 0.7s ease transform;
}

.city {
    color: ${PALETTE.SECONDARY.DARK};
    font-size: 1.5rem;
    margin: 2px;
        font-family: korean-font;
}
.country {
    color: ${PALETTE.PRIMARY.DEFAULT};
    font-size: 1.5rem;
    margin: 0;
        font-family: korean-font;
}

@media screen and (max-width: 700px) { 
    display: none;
}
`;