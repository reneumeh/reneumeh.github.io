import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from './InterestsComp'
import Pagination from './Pagination'
import useIsMobile from '../hooks/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { mainQuestArticles } from '../utils/mainQuests/mainQuests'


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
            <p className='title'>Main Quests</p>
        </Box>
        This are the main projects and undertakings that are largely connected to my professional and academic life and give significant insight into my work and the career I have strived to build so far.
        <Carousel>
            {
                mainQuestArticles.map((article, index) => {
                    return (
                        <Card currentPage={currentPage} pageIndex={index} onClick={() => {navigate(`article?id=${article.id}`)}}>
                            <div>
                                {article.title}
                            </div>
                            <div>
                                {article.summary}
                            </div>
                            <img src={article.primaryImage} alt='primary_image'/>
                            <div className='box'>
                                <img src='static/arrow.png' alt='arrow'/>
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
    margin: auto;
    margin-bottom: 7rem;
    width: 75vw;
    overflow: hidden;
    p {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        margin: 0;
        font-family: Leaugue-Spartan;
    }
    .title::before {
        content: "";
        border: 1px solid black;
        position: absolute;
        bottom: 30rem;
        left: 10vw;
        width: 80vw;
        height: 18.5rem;
        z-index: -1;
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
`;