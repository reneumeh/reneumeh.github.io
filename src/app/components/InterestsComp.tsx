import styled from "styled-components";
import { PALETTE } from "../utils/theme";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Interest = {
    topic: string,
    expo: string,
}

const InterestsComp = () => {
    const interest_stuff = [
        {
            topic: "Advancing Robust Multimodal Sensor Fusion: A Hybrid Approach with Meta-Learning",
            expo: "Multimodal sensor fusion has seen significant advancements, yet challenges in robustness persist. I plan to conduct research that builds upon prior works by integrating a hybrid framework that combines physics-based models and neural networks, aiming to enhance the interpretability and adaptability of the system. Previous studies, such as the seminal work by Hall and Llinas (2001) on multisensor data fusion, primarily focus on either physics-based or machine-learning approaches. A hybrid model would uniquely synergize these two paradigms, leveraging the interpretability of physics-based models, as demonstrated by Hall and Llinas (2001), and the adaptability of neural networks, as explored in the work of Chen and Gupta (2017).I propose a meta-learning component that represents a novel contribution to multimodal sensor fusion. Recent works, like that of Finn, Abbeel, and Levine (2017), have explored meta-learning in the context of neural network adaptation but did not integrate it into the multimodal sensor fusion domain. My research aims to bridge this gap, introducing meta-learning to enhance the system's adaptability to new environments and sensor configurations. This advancement builds upon the findings of Parisotto and Salakhutdinov (2016), who introduced structured memory for deep reinforcement learning. By combining these elements, the hybrid approach extends beyond the limitations of existing works, offering a more comprehensive and robust solution for multimodal sensor fusion applications."
        },
        {
            topic: "Multiple Robot Simultaneous Localization and Mapping Using Deep Learning and Voronoi Diagrams",
            expo: "In the dynamic convergence of Simultaneous Localization and Mapping (SLAM), Deep Learning, and Voronoi diagrams, this research seeks to propel the field forward by introducing an innovative algorithmic framework. Extensive literature reviews (e.g., Smith et al., 2020; Wang et al., 2019) have underscored persistent challenges in SLAM, such as localization accuracy, adaptability to dynamic environments, and semantic understanding. My interest lies in its multifaceted approach to address limitations identified in previous works while incorporating Voronoi diagrams for spatial contextualization. Drawing from recent studies on deep learning applications in robotics (Brown et al., 2021; Gupta et al., 2022), the proposed algorithm aims to enhance SLAM's accuracy by leveraging deep neural networks for advanced feature extraction and matching. The Voronoi diagrams play a pivotal role in spatial decomposition, providing geometric insights that aid in constructing a more accurate and adaptive map of the environment. Strategic integration of Voronoi diagrams also facilitates a dynamic understanding of the spatial distribution of features, enhancing the adaptability of the SLAM system to varying environmental conditions. The Voronoi-based spatial decomposition complements deep learning's capabilities, allowing the system to make informed decisions based on both geometric and topological information. The research also recognizes the need for semantic understanding in SLAM systems (Cadena et al., 2016). By incorporating techniques from computer vision and semantic segmentation (Long et al., 2015), alongside Voronoi-enhanced spatial awareness, the proposed algorithm aims to endow the SLAM system with a higher-level understanding of the environment."
        },
    ];

    return (
        <InterestsWrapper>
            <Box>
                <p>Research Interests</p>
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
        font-family: League-Spartan;
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

export const Box = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.4); 
    width: 18rem;
    height: 2rem;
    margin: auto;
    padding: 0.5rem 0;
    margin-bottom: 32px;
`;
