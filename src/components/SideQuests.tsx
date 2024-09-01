import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from './InterestsComp'
import Pagination from './Pagination'
import useIsMobile from '../hooks/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { sideQuestArticles } from '../utils/sideQuests/sideQuests'


type sideQuestsProps = {
    sideQuests: React.MutableRefObject<null>,
}

const SideQuests = ({ sideQuests }: sideQuestsProps) => {
    const isMobile = useIsMobile();
    const [ currentPage, setCurrentPage ] = useState(0)
    const navigate = useNavigate()
    
  return (
    <SideQuestsWrapper ref={sideQuests}>
        <Box>
            <p className='header'>Side Quests</p>
        </Box>
        <p>Though these may not be directly related to my professional career, these are other accomplishments that are no less important and have shaped who I am</p>
        <Carousel>
            {
                sideQuestArticles.map((article, index) => {
                    return (
                        <Card currentPage={currentPage} pageIndex={index} onClick={() => {navigate(`article?id=${article.id}`)}}>
                            <div className='article-space'>
                                <div>
                                <p className='title'>{article.title}</p>
                                {article.summary}
                                </div>
                            <img className='primary-image' src={article.primaryImage} 
                            alt='primary_image'/>
                            </div>
                            <div className='box'>
                                <img src='static/arrow.png' sizes={'60'} alt='arrow'/>
                            </div>
                    </Card>
                    )
                })
            }
        </Carousel>
        <Pagination isMobile={isMobile} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={sideQuestArticles.length} pageSize={1} />
    </SideQuestsWrapper>
    
  )
}

export default SideQuests 

const SideQuestsWrapper = styled.div`
      margin: auto;
    margin-bottom: 7rem;
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
    .header::before {
        content: "";
        border: 1px solid black;
        position: absolute;
        bottom: calc(6rem);
        left: 10vw;
        width: 80vw;
        height: calc(18rem + 18vw);
        z-index: -1;
        }
    
    @media screen and (max-width: 860px) {
        .header {
        font-size: 1.5rem;
        }

        .header::before {
        height: calc(29rem - 18vw);
        }
    }
        `;

const Carousel = styled.div`
    display: inline-flex;
    overflowX: hidden;
    `;

const Card = styled.div<{ currentPage: number; pageIndex: number}>`
    width: 60vw;
    transform: translateX(${({ currentPage }) => `${currentPage * -60}vw`});
    transition: all ease 0.5s;
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 8px 8px #805422;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px); 

        .box {
            transform: translateX(10px); 
            transition: ease all 1s;
        }
    }

    .box {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    }

    .article-space {
    display: flex;
    justify-content: space-between;
    }

    .primary-image {
    width: 30vw;
    border: 1px solid black;
    }

    .title {
        color: #805422;
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
    }
`;