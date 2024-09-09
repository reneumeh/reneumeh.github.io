import React, { useEffect } from 'react'
import styled from 'styled-components'
import AwardsList from './AwardsList_kor'
import { awardsListHS, awardsListUni } from '../config/awards-lists_kor'
import useIsScrolling from '../hooks/useIsScrolling'

const Awards = () => {
    const { resetScroll } = useIsScrolling();

    useEffect(() => {
        resetScroll(); 
    }, [resetScroll]);
    
  return (
    <AwardsWrapper>
    <Blank />
    <h1>수상 및 인증</h1>
    <AwardsList collectionName='학사 수상' awardsList= { awardsListUni } />
    <AwardsList collectionName='고등 학교 수상' awardsList= { awardsListHS } />
    </AwardsWrapper>
  )
}

export default Awards

const AwardsWrapper = styled.div`
h1 {
    text-align: center;
}
`;

const Blank = styled.div`
    margin-top: 8rem;
`;