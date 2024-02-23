import { useState, useEffect } from 'react';

const useHoveredElement = () => {
    const [hoveredElement, sethoveredElement] = useState("");
    const [clickedElement, setclickedElement] = useState("");

    const handleHover = ( pinName:string ) => {
        sethoveredElement(pinName);
    };
        
    const handleLeave = () => {
    if (!clickedElement) {
        sethoveredElement("");
    }
    };

    useEffect(() => {
        const handler = (e: any) => {
            if(e.target.className === hoveredElement) {
            setclickedElement(hoveredElement);
            } else {
                sethoveredElement("");
                setclickedElement("");
            }
        };
        document.addEventListener("mousedown", handler);
    
        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return {hoveredElement, handleHover, handleLeave}
}

export default useHoveredElement