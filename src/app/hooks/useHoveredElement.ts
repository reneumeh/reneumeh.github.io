
import { useState, useEffect } from 'react';

const useHoveredElement = () => {
    const [hoveredElement, setHoveredElement] = useState("");
    const [clickedElement, setClickedElement] = useState("");

    const handleHover = (pinName: string) => {
        setHoveredElement(pinName);
      };
    
      const handleLeave = () => {
        if (!clickedElement) {
          setHoveredElement("");
        }
      };
    
      useEffect(() => {
        const handleClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
    
          // Check if the click is on the hovered element or its parent
          if (
            target.className === hoveredElement ||
            target.id === hoveredElement ||
            target.parentElement?.id === hoveredElement ||
            target.parentElement?.className === hoveredElement
          ) {
            setClickedElement(hoveredElement);
          } else {
            setHoveredElement("");
            setClickedElement("");
          }
        };
    
        document.addEventListener('click', handleClick);
    
        return () => {
          document.removeEventListener('click', handleClick);
        };
      }, [hoveredElement]); // Add hoveredElement as a dependency
    
      return { hoveredElement, clickedElement, handleHover, handleLeave };
    };
    
    export default useHoveredElement;