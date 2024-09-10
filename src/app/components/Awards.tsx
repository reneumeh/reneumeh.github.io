import React, { useEffect } from 'react'
import styled from 'styled-components'
import AwardsList from './AwardsList'
import { awardsListHS, awardsListUni } from '../config/awards-lists'
import useIsScrolling from '../hooks/useIsScrolling'

const Awards = () => {
    const { resetScroll } = useIsScrolling();
    
    useEffect(() => {
        resetScroll(); 
    }, [resetScroll]);
  return (
    <AwardsWrapper>
    <Blank />
    <h1>Awards And Certifications</h1>
    <AwardsList collectionName='Undergraduate Awards' awardsList= { awardsListUni } />
    <AwardsList collectionName='High School Awards' awardsList= { awardsListHS } />
    </AwardsWrapper>
  )
}

export default Awards

const AwardsWrapper = styled.div`
    @keyframes fadeInLeft {
    from {
        opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
    animation-duration: 1s;
    animation-fill-mode: both;
    opacity: 0;
    animation-name: fadeInLeft;
  h1 {
      text-align: center;
  }
`;

const Blank = styled.div`
    margin-top: 8rem;
`;