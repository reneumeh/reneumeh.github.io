
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Box } from './InterestsComp'
import Pagination from './Pagination'
import useIsMobile from '../hooks/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { mainQuestArticles } from '../config/mainQuests/mainQuests'
import { PALETTE } from '../utils/theme'
import { motion, useInView } from 'framer-motion'


type mainQuestsProps = {
    mainQuests: React.MutableRefObject<null>,
}

const MainQuests = ({ mainQuests }: mainQuestsProps) => {
    const isMobile = useIsMobile();
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const triggerRef = useRef(null);

    const isInView = useInView(triggerRef, { once: true, amount: 0.6 });

    return (
        <>
            <div ref={triggerRef} style={{ height: '1px' }}></div>
            <MotionWrapper
                initial={{ x: '-20vw', opacity: 0 }}
                animate={isInView ? { x: '0vw', opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 70, damping: 15, duration: 0.1 }}
            >
    <MainQuestsWrapper ref={mainQuests}>
        <Box>
            <p className='header'>Main Quests</p>
        </Box>
        <p>This are the main projects that are largely connected to my professional and academic work and give significant insight into the career I have strived to build so far.</p>
        <Carousel>
            {
                mainQuestArticles.map((article, index) => {
                    return (
                        <Card key={index} currentPage={currentPage} pageIndex={index} onClick={() => {navigate(`article?id=${article.id}`)}}>
                            <div className='article-space'>
                                <div>
                                <p className='title'>{article.title}</p>
                                {article.summary}
                                </div>
                            <img className='primary-image' src={article.primaryImage} 
                            alt='primary_image'/>
                            </div>
                            <div className='box'>
                                <img src='/static/arrow.png' width={20} alt='arrow'/>
                            </div>
                    </Card>
                    )
                })
            }
        </Carousel>
        <Pagination isMobile={isMobile} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={mainQuestArticles.length} pageSize={1} />
    </MainQuestsWrapper>
    </MotionWrapper>
    </>
  )
}

export default MainQuests 

const MotionWrapper = motion(styled.div`
    display: flex;
    justify-content: center;
`);

const MainQuestsWrapper = styled.div`
    padding: 2rem 2rem 2rem 2rem;
    margin: auto;
    margin-bottom: 5rem; 
    margin-top: 5rem;
    width: 75vw;
    font-size: 1.1rem;
    overflow: hidden;
    .header {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        margin: 0;
        font-family: Leaugue-Spartan;
    }
    
    border: 1px solid ${PALETTE.BLACK};
    
    @media screen and (max-width: 860px) {
        .header {
        font-size: 1.5rem;
        }

        .header::before {
        height: calc(31rem - 18vw);
        bottom: calc(29rem - 10vw + 7rem);
        }

        
    }
        `;

const Carousel = styled.div`
    display: inline-flex;
    overflowX: hidden;
    `;

const Card = styled.div<{ currentPage: number; pageIndex: number}>`
    width: 60vw;
    transform: translateX(${({ currentPage }) => `calc(${currentPage * -60}vw - ${currentPage * 4}rem)`});
    transition: all ease 0.5s;
    background-color: ${PALETTE.WHITE};
    padding: 1rem;
    margin: 1rem;
    box-shadow: 8px 8px ${PALETTE.PRIMARY.DARK};
    cursor: pointer;


    &:hover {
        transform: translateX(${({ currentPage }) => `calc(${currentPage * -60}vw - ${currentPage * 4}rem - 5px)`}) translateY(-5px); 
        box-shadow: 13px 13px ${PALETTE.PRIMARY.DARK};

        .box {
            transform: translateX(10px); 
        }
    }

    .box {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    border: solid 1px ${PALETTE.BLACK};
    background-color: ${PALETTE.WHITE};
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    transition: transform ease 0.5s;
    }

    .article-space {
    display: flex;
    justify-content: space-between;
    }

    .primary-image {
    width: 30vw;
    height: 20vw;
    border: 1px solid ${PALETTE.BLACK};
    margin-left: 1rem;
    object-fit: cover;
    }

    .title {
        color: ${PALETTE.PRIMARY.DARK};
        font-size: calc(3vw + 0.5rem);
        font-weight: 700;
        margin: 10px 0 20px 0;
    }

    @media screen and (max-width: 860px) {
        .primary-image {
        display: none;
        }

        .box {
        display: none;
        }

        .title {
            text-wrap: nowrap;
            max-height: 3.6em;
            max-width: 57vw;
            overflow: hidden;
        }
    }
`;