import useHoveredElement from "../hooks/useHoveredElement";
import { useRef } from "react";
import styled from "styled-components";
import { PALETTE } from "../utils/theme";

const MapComp = () => {
    const {handleHover, handleLeave, hoveredElement} = useHoveredElement();
    const texasPin = useRef(null);
    const lagosPin = useRef(null);
    const seoulPin = useRef(null);

    const MapElements = [
        {
            country: "South Korea",
            city: "Seoul",
            loc: {top: "15vw", left: "calc(5em + 62.5vw)"},
            explanation: "I traveled to Seoul for my undergraduate degree. I learnt Korean at the Hanyang International Language Institute. Following that, I graduated summa cum laude and received a degree in Mechanical Engineering with the help of the Samsung Global Dream Scholarship", 
            ref: seoulPin
        },
        {
            country: "USA",
            city: "Austin",
            loc: {top: "16.5vw", left: "calc(5em + 16.5vw)"},
            explanation: "In 2021, I travelled to Texas for an exchange semester at the University of Texas at Austin. It was the first time I was travelling and living completely independently. I earned an internship at Lavner Education following the end of the semester.",
            ref: texasPin
        },
        {
            country: "Nigeria",
            city: "Lagos",
            loc: {top: "22vw", left: "calc(5em + 37vw)"},
            explanation: "I was born and raised as the second of five children in Lagos, Nigeria. The appetite to stand out comes naturally when you are from a big family. I studied and graduated as the valedictorian from St. Gregory's College.",
            ref: lagosPin
        }
    ]

  return (
    <Map hoveredElement= {hoveredElement} style={{ overflow: "clip", position: "relative" }}>
        <div className="WorldMap" >
            <img 
            id='big-map'
            alt= 'map'
            src='static/map.png'
            
            style={{position: 'absolute', margin: '2vh  0vw 2vh 5em', width:'80vw'}}/>
            {MapElements.map((pin) => (
              <div className='pins'>
                <img
                className={pin.city}
                alt= {pin.city}
                ref ={pin.ref}
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
                Hover/Click on the pins
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
    .pins > img:hover, img:active {
        transform: translateY(-5px);
        transition: 0.5s ease all;
        cursor: pointer;
    }
    .explanations {
        visibility: hidden;
    }
    .explanations > div {
        position: absolute;
    }

    .explanations-placeholder {
        position: absolute;
        font-family: Leaugue-Spartan;
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
            background-color: ${PALETTE.BACKGROUND};
            transform: translateX(-21vw);
            transition: 0.7s ease transform;
            font-size: 1.5vw;
            width: 17vw;
            background-color: ${PALETTE.WHITE};
            padding: 3px;
            box-shadow: 5px 5px ${PALETTE.PRIMARY.DARK};
        }
    .city {
        color: ${PALETTE.SECONDARY.DARK} ;
        font-size: 1.5rem;
        margin: 2px;
        font-family: Leaugue-Spartan;
    }
    .country {
        color: ${PALETTE.PRIMARY.DEFAULT};
        font-size: 1.5rem;
        margin: 0;
        font-family: Leaugue-Spartan;
    }

    @media screen and (max-width: 700px) { 
            display: none;
    }
    `;