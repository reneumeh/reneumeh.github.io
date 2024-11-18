import styled from "styled-components";
import { PALETTE } from "../utils/theme";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Box } from "../components/InterestsComp";
import interest_stuff from "../config/interest-stuff_kor";

type Interest = {
    topic: string,
    expo: string,
}

const InterestsComp = () => {
  return (
    <InterestsWrapper>
        <Box>
            <p>연구 관심사</p>
        </Box>
        {interest_stuff.map((interest, index) => (
                <InterestItem key={index} interest={interest} index={index} />
            ))}
        </InterestsWrapper>
    );
};

type InterestItemProps = {
    interest: Interest,
    index: number,
}

const InterestItem = ({ interest, index } : InterestItemProps) => {
    const topicRef = useRef(null);
    const expoRef = useRef(null);
    const isTopicInView = useInView(topicRef, { once: true });
    const isExpoInView = useInView(expoRef, { once: true });

    return (
        <div className='interest'>
            <motion.div
                className='topic'
                ref={topicRef}
                initial={{ x: -100, opacity: 0 }}
                animate={isTopicInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                {interest.topic}
            </motion.div>
            <motion.div
                className='expo'
                ref={expoRef}
                initial={{ x: 100, opacity: 0 }}
                animate={isExpoInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                {interest.expo}
            </motion.div>
        </div>
    );
};

export default InterestsComp;

const InterestsWrapper = styled.div`
    height: fit-content;
    margin-top: 6rem;
    
    p {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        margin: 0;
        font-weight: bold;
        font-family: korean-font;
    }

    .interest {
        display: flex;
        margin-bottom: 5rem;
        justify-content: space-evenly;
    }
    .topic {
        flex-basis: 30%;
        color: ${PALETTE.PRIMARY.DARK};
        font-size: 3.5rem;
        font-weight: 700;
    }
    .expo {
        flex-basis: 30%;
        text-align: justify;
        font-size: 1rem;
    }
    @media screen and (max-width: 700px) { 
        .topic {
            font-size: 40px;
        }
        .expo {
            height: 50vh;
            overflow: scroll;
        }
    }
`;