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
    <h1 className='heading'>수상 및 인증</h1>
    <AwardsList collectionName='학사 수상' awardsList= { awardsListUni } />
    <AwardsList collectionName='고등 학교 수상' awardsList= { awardsListHS } />
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
.heading {
    text-align: center;
    z-index: -1;
}
`;

const Blank = styled.div`
  margin-top: clamp(70px, 15vw, 120px);
`;