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
            country: "South Korea",
            city: "Seoul",
            loc: {top: "17.5vw", left: "calc(5em + 62.5vw)"},
            explanation: "I traveled to Seoul for my undergraduate degree. I learnt Korean at the Hanyang International Language Institute. Following that, I completed a BSc in Mechanical Engineering with the help of the Samsung Global Dream Scholarship", 
            ref: seoulPin
        },
        {
            country: "USA",
            city: "Austin",
            loc: {top: "18vw", left: "calc(5em + 16.5vw)"},
            explanation: "This ain't Texas (woo), ain't no hold 'em (hey) So lay your cards down, down, down, down So park your Lexus (woo) and throw your keys up (hey) Stick around, 'round, 'round, 'round, 'round (stick around)",
            ref: texasPin
        },
        {
            country: "Nigeria",
            city: "Lagos",
            loc: {top: "22vw", left: "calc(5em + 37vw)"},
            explanation: "Ni ojuelegba They know my story, from Mo'Dogg's studio I be hustle to work, ehh Ni ojuelegba, oh Me and Silly, for Mo'Dogg's studio We been hustle to work, ehh",
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
            {MapElements.map((pin) => (<div className='pins'>
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
                    <div
                    id= {pin.city}>
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
        font-family: Leaugue-Spartan;
    }
    .country {
        color: #AB957C;
        font-size: 1.5rem;
        margin: 0;
        font-family: Leaugue-Spartan;
    }

    @media screen and (max-width: 700px) { 
            display: none;
    }
    `;