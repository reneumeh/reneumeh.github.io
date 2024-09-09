import styled from "styled-components";
import { PALETTE } from "../utils/theme";
import { Box } from "../components/InterestsComp";

const InterestsComp = () => {
    const interest_stuff = [
        {
            topic: "강력한 멀티모달 센서 융합의 발전: 메타학습을 통한 하이브리드 접근",
            expo: "멀티모달 센서 융합은 상당한 발전을 이루었지만 견고성에 있어서는 어려움이 지속되고 있습니다. 저는 시스템의 해석 가능성과 적응력을 향상시키는 것을 목표로 물리 기반 모델과 신경망을 결합한 하이브리드 프레임워크를 통합하여 이전 작업을 기반으로 하는 연구를 수행할 계획입니다. 멀티센서 데이터 융합에 대한 홀과 리나스(2001)의 중요한 연구와 같은 이전 연구는 주로 물리 기반 또는 기계 학습 접근 방식에 초점을 맞추고 있습니다. 하이브리드 모델은 홀과 리나스(2001)가 입증한 바와 같이 물리 기반 모델의 해석 가능성과 첸과 굽타(2017)의 연구에서 탐구한 신경망의 적응력을 활용하여 이 두 가지 패러다임을 독특하게 시너지 효과를 발휘할 것입니다. 저는 멀티모달 센서 융합에 새로운 기여를 하는 메타 학습 구성 요소를 제안합니다. 핀, 아베벨, 레빈(2017)의 연구와 같은 최근 연구는 신경망 적응의 맥락에서 메타 학습을 탐구했지만 멀티모달 센서 융합 영역에 통합하지는 않았습니다. 제 연구는 새로운 환경과 센서 구성에 대한 시스템의 적응력을 향상시키기 위해 메타 학습을 도입하여 이러한 격차를 해소하는 것을 목표로 합니다. 이러한 발전은 심층 강화 학습을 위해 구조화된 메모리를 도입한 Parisotto와 Salakhutdinov(2016)의 연구 결과를 기반으로 합니다. 이러한 요소를 결합하여 하이브리드 접근 방식은 기존 작업의 한계를 넘어 멀티모달 센서 융합 애플리케이션을 위한 보다 포괄적이고 강력한 솔루션을 제공합니다."
        },
        {
            topic: "딥러닝과 보로노이 다이어그램을 이용한 다중 로봇 동시 측위 및 매핑",
            expo: "이 연구는 동시 로컬라이제이션 및 매핑(SLAM), 딥러닝 및 보로노이 다이어그램의 동적 융합에서 혁신적인 알고리즘 프레임워크를 도입하여 이 분야를 발전시키고자 합니다. 광범위한 문헌 검토(예: 스미스 외, 2020; 왕 외, 2019)를 통해 로컬라이제이션 정확도, 동적 환경에 대한 적응성 및 의미론적 이해와 같은 SLAM의 지속적인 과제가 강조되었습니다. 제 관심은 공간 컨텍스트화를 위해 보로노이 다이어그램을 통합하면서 이전 작업에서 확인된 한계를 해결하기 위한 다각적인 접근 방식에 있습니다. 로봇공학의 딥러닝 응용 프로그램에 대한 최근 연구(브라운 외, 2021; 굽타 외, 2022)를 바탕으로 제안된 알고리즘은 고급 특징 추출 및 매칭을 위해 심층 신경망을 활용하여 SLAM의 정확도를 향상시키는 것을 목표로 합니다. 보로노이 다이어그램은 공간 분해에서 중추적인 역할을 하며, 환경에 대한 보다 정확하고 적응형 지도를 구성하는 데 도움이 되는 기하학적 통찰력을 제공합니다. 보로노이 다이어그램의 전략적 통합은 또한 특징의 공간 분포에 대한 동적 이해를 촉진하여 다양한 환경 조건에 대한 SLAM 시스템의 적응성을 향상시킵니다. 보로노이 기반 공간 분해는 딥러닝의 기능을 보완하여 시스템이 기하학적 및 위상 정보를 기반으로 정보에 입각한 결정을 내릴 수 있도록 합니다. 이 연구는 또한 SLAM 시스템에서 의미론적 이해의 필요성을 인식하고 있습니다(Cadena 외, 2016). 제안된 알고리즘은 보로노이 강화된 공간 인식과 함께 컴퓨터 비전 및 의미론적 분할의 기술을 통합함으로써 SLAM 시스템에 환경에 대한 더 높은 수준의 이해를 부여하는 것을 목표로 합니다."
        },
    ]

  return (
    <InterestsWrapper>
        <Box>
            <p>연구 관심사</p>
        </Box>
        {interest_stuff.map((interest_stuff, index) => (
        <div className='interest' key={index}>
            <div className='topic'>{interest_stuff.topic}</div>
            <div className='expo'>{interest_stuff.expo}</div>
        </div>
        ))}  
</InterestsWrapper>
  )
}

export default InterestsComp

const InterestsWrapper = styled.div`
    height: fit-content;
    margin-top: 6rem;
    
    p {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        font-family: korean-font;
    }

    .interest {
        display: flex;
        margin-bottom: 5rem;
        justify-content: space-evenly;
    }
    .topic {
        flex-basis: 30%;
        color: ${PALETTE.PRIMARY.DARK};
        font-size: 3.5rem;
        font-weight: 700;
        
    }
    .expo {
        flex-basis: 30%;
        text-align: justify;
        font-size: 1rem;

    }
    @media screen and (max-width: 700px) { 
        .topic {
            font-size: 40px;
        }
        .expo {
            height: 50vh;
            overflow: scroll;
        }
    }
`;