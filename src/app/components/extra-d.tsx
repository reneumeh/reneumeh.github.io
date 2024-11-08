import React from 'react';
import { motion } from 'framer-motion';

type renderTextProps = {
   text: string,
   isInView: boolean,
   color?: string,
}
export const renderText = ({ text, isInView , color = '#000000' } : renderTextProps) => {
    const textVariant = {
        hidden: { strokeDashoffset: 2000 },
        visible: { strokeDashoffset: 0, transition: { duration: 5, ease: 'easeInOut' } }
    };

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-100 10 1000 100"
            width='100%'
            height='110'
            fill="none"
        >
            <motion.text
                x="10"
                y="55"
                fontFamily="Arial"
                fill="none"
                stroke={color}
                strokeWidth="1"
                strokeDasharray="2000"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={textVariant}
            >
                {text}
            </motion.text>
        </motion.svg>
    );
};