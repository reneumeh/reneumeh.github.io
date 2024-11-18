import useHoveredElement from "../hooks/useHoveredElement";
import { useRef } from "react";
import styled from "styled-components";
import { PALETTE } from "../utils/theme";
import { motion, useInView } from "motion/react";
import { longLatToCartesian } from "../utils/utils";
import MapElements from "../config/map-elements";

const MapComp = () => {
  const { handleHover, handleLeave, hoveredElement } = useHoveredElement();
  const mapRef = useRef(null); 
  const isInView = useInView(mapRef, { once: true, amount: 'some'}); 

  return (
    <Map
        ref={mapRef}
        as={motion.div}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        $hoveredElement={hoveredElement}
        style={{ overflow: "clip", position: "relative" }}
    >
        <div className="WorldMap">
            <img
                id='big-map'
                alt='map'
                src='/static/map.png'
                style={{ position: 'absolute', margin: '2vh  0vw 2vh 5em', width: '80vw', height: '40vw', color: 'white' }}
            />
            {MapElements().map((pin, index) => (
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
                        style={{ position: "absolute", top: `${longLatToCartesian(pin.loc.long, pin.loc.lat).top}vw` , left: `calc(5em - 10px + ${longLatToCartesian(pin.loc.long, pin.loc.lat).left}vw` }}
                    />
                    <div className="explanations">
                        <div id={pin.city}>
                            <p className='city'>{pin.city}</p>
                            <p className='country'>{pin.country}</p>
                            {pin.explanation}
                        </div>
                    </div>
                </motion.div>
            ))}
            <div className="explanations-placeholder">
                Hover/Click on the pins
            </div>
        </div>
    </Map>
);
}

export default MapComp;

const Map = styled.div<{ $hoveredElement: string }>`
position: relative;
height: 44vw;

.pins {
    img:hover, img:active {
        transform: translateY(-5px);
        transition: 0.5s ease all;
        cursor: pointer;
    }
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
    font-family: League-Spartan;
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

[id*=${({ $hoveredElement }) => $hoveredElement}] {
    visibility: visible;
    text-align: start;
    transform: translateX(-21vw);
    transition: 0.7s ease transform;
}

.city {
    color: ${PALETTE.SECONDARY.DARK};
    font-size: 1.5rem;
    margin: 2px;
    font-family: League-Spartan;
}
.country {
    color: ${PALETTE.PRIMARY.DEFAULT};
    font-size: 1.5rem;
    margin: 0;
    font-family: League-Spartan;
}

@media screen and (max-width: 1010px) { 
    display: none;
}
`;