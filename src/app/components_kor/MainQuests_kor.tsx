
import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '../components/InterestsComp'
import Pagination from '../components/Pagination'
import useIsMobile from '../hooks/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { mainQuestArticles } from '../config/mainQuests_kor/mainQuests'
import { PALETTE } from '../utils/theme'
import Image from 'next/image';


type mainQuestsProps = {
    mainQuests: React.MutableRefObject<null>,
}

const MainQuests = ({ mainQuests }: mainQuestsProps) => {
    const isMobile = useIsMobile();
    const [ currentPage, setCurrentPage ] = useState(0)
    const navigate = useNavigate()
    
  return (
    <MainQuestsWrapper ref={mainQuests}>
        <Box>
            <p className='header'>메인 프로젝트</p>
        </Box>
        <p>이것은 주로 저의 전문적이고 학문적인 업무와 관련이 있으며 지금까지 쌓아온 경력에 대한 중요한 인사이트를 제공하는 주요 프로젝트입니다.</p>
        <Carousel>
            {
                mainQuestArticles.map((article, index) => {
                    return (
                        <Card key={index} currentPage={currentPage} pageIndex={index} onClick={() => {navigate(`article_kor?id=${article.id}`)}}>
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
    
  )
}

export default MainQuests 

const MainQuestsWrapper = styled.div`
    padding: 2rem 2rem 2rem 2rem;
    margin: auto;
    margin-bottom: 5rem; 
    width: 75vw;
    font-size: 1.1rem;
    overflow: hidden;
    .header {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        margin: 0;
        font-family: korean-font;
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
        transform: translateX(${({ currentPage }) => `calc(${currentPage * -60}vw - ${currentPage * 4}rem)`}) translateY(-5px); 

        .box {
            transform: translateX(10px); 
            transition: ease all 1s;
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
    jsutify-content: center;
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