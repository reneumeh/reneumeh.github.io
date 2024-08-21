import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from './InterestsComp'
import Pagination from './Pagination'
import useIsMobile from '../hooks/useIsMobile'

type sideQuestsProps = {
    sideQuests: React.MutableRefObject<null>,
}

const SideQuests = ({ sideQuests }: sideQuestsProps) => {
    const isMobile = useIsMobile();
    const [ currentPage, setCurrentPage ] = useState(0)
    const sideQuestArticles = [
        {
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
    <SideQuestsWrapper ref={sideQuests}>
        <Box>
            <p>Side Quests</p>
        </Box>
        <Pagination isMobile={isMobile} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={sideQuestArticles.length} pageSize={3} />
    </SideQuestsWrapper>
    
  )
}

export default SideQuests 

const SideQuestsWrapper = styled.div`
    p {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        margin: 0;
        font-family: Leaugue-Spartan;
    }`;