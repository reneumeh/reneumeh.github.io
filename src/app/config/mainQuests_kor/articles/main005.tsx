import { ArticleType } from "@/app/utils/types"


export const main005: ArticleType = {
    id: 3194105,
    title: '자동차와 나의 여정',
    summary: "자동차에 대한 호기심이 여름 방학의 정비소 경험에서 시작되어 대학의 RACE 클럽에서 자동차 엔지니어링에 대한 깊은 열정을 키우게 되었습니다.",
    primaryImage: '/static/car_cad.jpg',

    content: [
      <p key="1">
        자동차의 세계에 대한 저의 여정은 손에 렌치를 들고 시작되지 않았지만, 결국 그렇게 끝나게 되었습니다. 모든 것은 여름 방학 동안 정비소에서 일하면서 시작되었습니다. 상상해 보세요: 밝은 오렌지색 작업복, 기름에 더럽혀진 손, 그리고 엔진 부품이 쌓인 모습을 넋을 잃고 바라보는 젊은 기계 공학 학생. 그 당시에는 모든 답을 알고 있지 않았습니다(솔직히 지금도 모릅니다). 하지만 그 여름이 저에게 기계가 어떻게 작동하는지를 깊이 이해하고자 하는 호기심을 불러일으켰습니다.
      </p>,
      
      <h2 key="2">작업소 경험</h2>,
      <p key="3">
        정비소에서 일하는 것은 자동차와의 첫 번째 실제 경험이었습니다. 교과서에서 엔진과 차동 장치에 대해 읽는 것과, 실제로 파손된 헤드 가스를 교체하거나 캠샤프트를 정렬하는 것은 전혀 다른 경험이었습니다. 내연 기관, 변속기 시스템, 그리고 드라이브 샤프트를 통해 바퀴에 전달되는 힘을 이해하는 것은 저에게 필요한 기초를 제공했습니다. 하지만 솔직히 말하면, 한양 RACE 클럽에 참여한 후에 모든 것이 맞아떨어지기 시작했습니다.
      </p>,
    
      <h2 key="4">RACE 클럽: 자동차 만들기와 부수기</h2>,
      <p key="5">
        <a href='https://racehanyang.com'>RACE 클럽</a>은 실제 포뮬러 1 피트 크루에 들어선 듯한 느낌이었습니다. 우리는 단순히 기존 자동차를 수리하는 것이 아니라, 대학교 간 대회에서 사용할 수 있는 레이싱 카를 처음부터 끝까지 설계하고 제작했습니다. 그리고 자동차 공학의 아름다움을 진정으로 감상할 수 있는 방법은 자동차를 조각조각 제작하는 것 외에는 없다는 것을 말씀드리고 싶습니다. 저는 다이나믹스 팀에서 시작했으며, 핸들링 및 성능 지표(예: 코너링 힘, 항력 계수, 요 안정성)를 최적화했습니다. 캠버 각도나 캐스터를 조정하는 것과 같은 작은 조정이 트랙에서 자동차의 행동에 눈에 띄는 영향을 미쳤습니다. 정밀함과 성능의 균형을 맞추는 것이 중요합니다. 이후 UT Austin의 수업에서 RC 자동차를 설계하기도 했습니다. <a href='/static/design notebook-converted.pdf'>이것이 디자인 노트북의 모습입니다.</a>
      </p>,
      
      <div className="center" key="6">
        <video height={250} src='/static/race.mp4' controls />
      </div>,
      
      <h2 key="7">책 & 유튜브 채널</h2>,
      <p key="8">
        포괄적인 공학 책을 읽는 것을 선호하든, 심층적인 유튜브 비디오를 시청하는 것을 선호하든, 이 자원들은 자동차에 대한 집착을 키우는 데 도움이 될 것입니다. 자동차 공학과 성능의 세계에 대해 더 깊이 탐구할 수 있는 필독서와 필수 채널을 소개합니다.
      </p>,
      
      <p key="9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>,
      
      <div key="10">
        <a href='https://www.amazon.com/Vehicle-Dynamics-Douglas-Milliken-William/dp/1560915269'>
          <img alt='book cover' src='https://m.media-amazon.com/images/I/61m3gzulDoL._SY466_.jpg' height={150} />
          <i>레이스 카 차량 동역학</i>
        </a>
        <p>
          자동차의 움직임을 이해하고 싶다면 이 책이 적합합니다. 차량 동역학, 핸들링, 무게 이동 등에 대해 깊이 있게 설명하며, 트랙에서 자동차의 속도와 핸들링을 개선하는 방법을 알려줍니다.
        </p>
      </div>,
      
      <div key="11">
        <a href='https://www.amazon.com/Chassis-Design-Principles-Analysis-R-206/dp/0768008263/ref=sr_1_2?crid=254SPYZSLET1Y'>
          <img alt='book cover' height={150} src='https://m.media-amazon.com/images/I/61Yi6dM+edL._SY466_.jpg' />
          <i>샤시 엔지니어링</i>
        </a>
        <p>
          이 책은 샤시와 서스펜션 설계에 대한 실용적인 가이드로, 레이싱이나 도로 주행을 위한 성능 최적화를 도와줍니다.
        </p>
      </div>,
      
      <div className="flex margin-bottom" key="12">
        <a href='https://youtube.com/@Donut'>
          <img alt='donut media' className='round' src="https://yt3.googleusercontent.com/_gFkGv3SysgBQqzCC-oznppMmPAQ6vhbppnvS8juDCiTvHVICJc_tOb5hYiuGXBeRhKNruyP1g=s160-c-k-c0x00ffffff-no-rj" />
          <i>Donut Media</i>
        </a>
        <p>
          복잡한 자동차 기계 구조를 재미있고 이해하기 쉽게 설명합니다. &quot;Up to Speed&quot;와 &quot;Bumper 2 Bumper&quot; 시리즈는 다양한 자동차 모델의 역사와 복잡성을 배우는 데 특히 좋습니다.
        </p>
      </div>,
    
      <div className="flex margin-bottom" key="13">
        <a href='https://youtube.com/@EngineeringExplained'>
          <img alt='engineeringexplained' src="https://yt3.googleusercontent.com/ytc/AIdro_mFX9zV-Eb4C0r8is3Gu7UpwPFm1vH1bbQT72Rv-rme7Po=s160-c-k-c0x00ffffff-no-rj" className="round" />
          <i>Engineering Explained</i>
        </a>
        <p>
          자동차 성능의 기술적인 측면을 이해하는 데 적합한 채널입니다. 차동 기어 작동 원리나 터보차저의 장점 등 다양한 주제를 쉽게 설명하며 유용한 정보를 제공합니다.
        </p>
      </div>,
    
      <div className="flex margin-bottom" key="14">
        <a href='https://youtube.com/@ThrottleHouse'>
          <img alt='throttlehouse' className='round' src="https://yt3.googleusercontent.com/deDXCaHYS2Oya803d42wyok04YZtKbNZ4VxFvkn8NxHGlihxl4JbwTnwSXeNuMiVv9QOQWxL=s160-c-k-c0x00ffffff-no-rj" />
          <i>Throttle House</i>
        </a>
        <p>
          이 채널은 자동차 리뷰와 함께 성능에 대한 깊은 통찰을 제공합니다. 자동차의 핸들링과 공기 역학이 주행에 미치는 영향을 이해하고 싶다면 Throttle House가 적합합니다.
        </p>
      </div>,
    
      <p key="15">
        자동차에 대한 저의 초기 관심은 RACE 클럽에서의 시간 동안 본격적인 집착으로 발전했습니다. 트랙에서 최고 속도로 달리는 자동차를 보는 것은 당신의 작업의 물리적 구현을 보는 것과 같아서 큰 열정을 불러일으킵니다. 자동차가 어떻게 작동하는지에 대한 막연한 아이디어로 시작했지만, 엔진 튜닝부터 서스펜션 설계까지의 실습을 통해 자동차 공학의 예술과 과학에 대한 깊은 존경심을 가지게 되었습니다.
      </p>
    ]

    
}
