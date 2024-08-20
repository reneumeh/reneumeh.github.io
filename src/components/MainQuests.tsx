import React from 'react'
import styled from 'styled-components'
import { Box } from './InterestsComp'

type mainQuestsProps = {
    mainQuests: React.MutableRefObject<null>,
}

const MainQuests = ({ mainQuests }: mainQuestsProps) => {
  return (
    <MainQuestsWrapper>
        <Box>
            <p>Main Quests</p>
        </Box>
    </MainQuestsWrapper>
    
  )
}

export default MainQuests 

const MainQuestsWrapper = styled.div`
    p {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        margin: 0;
        font-family: Leaugue-Spartan;
    }`;