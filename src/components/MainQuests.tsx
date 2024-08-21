import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from './InterestsComp'
import Pagination from './Pagination'
import useIsMobile from '../hooks/useIsMobile'

type mainQuestsProps = {
    mainQuests: React.MutableRefObject<null>,
}

const MainQuests = ({ mainQuests }: mainQuestsProps) => {
    const isMobile = useIsMobile();
    const [ currentPage, setCurrentPage ] = useState(0)
    const mainQuestArticles = [
        {   
            id: "id",
            title: "title",
            summary : "summary",
            content: [
                {
                    type: "text",
                    font: "font",
                    value: "value"
                },
                {
                    type: "image",
                    position: "position",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "video",
                    position: "center",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "link",
                    text: "text",
                    image: "image",
                    to: "to",
                }
            ]
        },
        {   
            id: "id",
            title: "title",
            summary : "summary",
            content: [
                {
                    type: "text",
                    font: "font",
                    value: "value"
                },
                {
                    type: "image",
                    position: "position",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "video",
                    position: "center",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "link",
                    text: "text",
                    image: "image",
                    to: "to",
                }
            ]
        },
        {
            id: "id",
            title: "title",
            summary : "summary",
            content: [
                {
                    type: "text",
                    font: "font",
                    value: "value"
                },
                {
                    type: "image",
                    position: "position",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "video",
                    position: "center",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "link",
                    text: "text",
                    image: "image",
                    to: "to",
                }
            ]
        },
        {
            id: "id",
            title: "title",
            summary : "summary",
            content: [
                {
                    type: "text",
                    font: "font",
                    value: "value"
                },
                {
                    type: "image",
                    position: "position",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "video",
                    position: "center",
                    size: "size",
                    description: "description",
                    src: "src",
                },
                {
                    type: "link",
                    text: "text",
                    image: "image",
                    to: "to",
                }
            ]
        },
    ]
  return (
    <MainQuestsWrapper ref={mainQuests}>
        <Box>
            <p>Main Quests</p>
        </Box>
        <Pagination isMobile={isMobile} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={mainQuestArticles.length} pageSize={3} />
    </MainQuestsWrapper>
    
  )
}

export default MainQuests 

const MainQuestsWrapper = styled.div`
    margin-bottom: 7rem;
    p {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        margin: 0;
        font-family: Leaugue-Spartan;
    }
        `;