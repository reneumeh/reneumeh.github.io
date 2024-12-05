import { ArticleType } from "@/app/utils/types"


export const main004: ArticleType = {
    id: 3194104,
    title: '인공지능 프로그래밍 배우는 법',
    summary: 'Just the basics in the every changing world of Artificial Intelligence.',
    primaryImage: '/static/transformer.webp',
    content: [
      <p key="1">
        기계 학습(ML)에 대한 저의 공식적인 소개는 2학년 AI 수업에서 김 더글라스 덕수 교수님과 함께 시작되었습니다. 이 과정에서는 AI의 역사, 신경망의 진화, 그리고 기계 학습이 오늘날의 강력한 기술이 되기까지의 과정을 배웠습니다. 수업이 끝날 무렵에는 이론을 넘어 직접 CNN을 처음부터 끝까지 만들어 보는 경험을 하게 되었습니다.
      </p>,
      <p key="2">
        AI에 대한 기초를 배운 후, 단순한 학문적 지식을 넘어선 경험을 원했습니다. 그래서 한국과학기술원(KIST)에서 인턴십을 하게 되었고, 임화섭 교수님의 AI 연구실에 합류했습니다. 여기서 저는 AI가 실제로 어떻게 작동하는지를 직접 체험할 수 있었습니다. 매주 두 번씩 최첨단 연구 논문을 발표하고, DreamFusion부터 Plenoxels까지 다양한 주제를 논의했습니다. 또한 첫 번째 학술대회인 한국 컴퓨터 비전 학회(KCCV)에 참석하면서 AI의 광범위한 응용 분야를 알게 되었습니다.
      </p>,
      <p key="3">
        이 글을 읽고 있는 당신은 아마도 AI 여정을 어떻게 시작할지 궁금할 것입니다. 첫 번째 단계가 가장 어려울 수 있습니다—프로젝트를 찾는 것입니다. 저도 그랬습니다. 빈 페이지를 바라보며 “모든 게 이미 다 해졌잖아!”라고 생각했죠. 하지만 여기서 중요한 점은 완전히 새로운 것을 발명할 필요는 없다는 것입니다. 대신, 이미 존재하는 시스템을 가져와서 그 시스템의 기계적 또는 물리적 속성이 성능에 어떤 영향을 미치는지 실험해 보세요. 이것은 AI를 실용적이고 흥미롭게 배울 수 있는 훌륭한 방법입니다.
      </p>,
      <h2 key="4">학습 자료</h2>,
      <p key="5">
        AI의 훌륭한 점 중 하나는 시작할 수 있는 무료 자원이 많다는 것입니다. 멋진 학위나 비싼 교재 없이도 학습을 시작할 수 있습니다. 다음은 시작하는 데 유용한 무료 및 신뢰할 수 있는 자료 몇 가지입니다:
      </p>,
      <div className="flex margin-bottom" key="6">
        <a href='https://www.youtube.com/@codebasics' target="_blank">
          <img alt='codebasics' className='round' src="https://yt3.googleusercontent.com/DZidE7P_ESU8Y_dZ5_PrTAItOkSuayCfE2tYkKCnjtFYes7nA2sE-UF1fi3tZLjozlg0h1aK=s160-c-k-c0x00ffffff-no-rj" />
          <i>CodeBasics</i>
        </a>
        <p>
          이 YouTube 채널은 Python 프로그래밍, 기계 학습, 딥 러닝을 다룹니다. AI를 명확하고 단계별 튜토리얼로 배우고 싶다면 이곳이 좋은 출발점입니다.
        </p>
      </div>,
      <div className="flex margin-bottom" key="7">
        <a href='https://www.youtube.com/watch?v=dJYGatp4SvA&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r' target="_blank">
          <img alt='justin johnson' className='round' src="https://yt3.googleusercontent.com/ytc/AIdro_n6J3F2cS4pIQ4Aly4EOcV6ra8SBZwg9HE6nu8TTeeAScI=s160-c-k-c0x00ffffff-no-rj" />
          <i>Justin Johnson 교수님</i>
        </a>
        <p>
          또 다른 훌륭한 유튜버로, 복잡한 주제를 소화하기 쉬운 초급자 친화적인 레슨으로 설명합니다. 신경망, 기계 학습 알고리즘, AI 기초를 더 깊이 있게 배우고 싶다면 그의 튜토리얼이 적합합니다.
        </p>
      </div>,
      <div className="flex margin-bottom" key="8">
        <a href='https://www.youtube.com/@3blue1brown' target="_blank">
          <img alt='3blue1brown' className='round' src="https://yt3.googleusercontent.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s160-c-k-c0x00ffffff-no-rj" />
          <i>3 Blue 1 Brown</i>
        </a>
        <p>
          이 채널의 애니메이션은 모든 흥미로운 개념을 생생하게 전달하는 데 정말 도움이 됩니다. 제가 설명할 수 없는 방식으로 개념을 시각화해 주죠.
        </p>
      </div>,
      <h2 key="9">경쟁</h2>, 
      <p key="10">
        경쟁은 실제 데이터셋과 문제를 제공하므로 훌륭한 학습 경험이 됩니다.
      </p>,
      <div key="11">
        <a href='https://kaggle.com'>
          <img alt='kaggle' src="https://en.wikipedia.org/wiki/File:Kaggle_Logo.svg" sizes="150px" />
          <i>Kaggle</i>
        </a>
        <p>
          Kaggle은 기계 학습 경쟁의 대표 플랫폼입니다. 의료 이미지부터 자율주행차까지 다양한 데이터셋을 찾을 수 있으며, 커뮤니티는 항상 도움을 줄 준비가 되어 있습니다. 승리하지 못해도 경험은 매우 소중합니다.
        </p>
      </div>,
      <div key="12">
        <a href='https://youtube.com'>
          <img alt='Drivendata' src="https://google.com/" />
          <i>DrivenData</i>
        </a>
        <p>
          Kaggle과 유사한 경쟁 플랫폼이지만 종종 사회적 영향을 미치는 프로젝트에 중점을 둡니다. 기술을 유용한 목적에 사용하며 실력을 연마할 수 있는 좋은 방법입니다.
        </p>
      </div>,
      <p key="13">
        모든 답을 바로 알 필요는 없습니다—계속 탐구하려는 호기심만 있으면 됩니다. DreamFusion부터 Plenoxels까지 AI의 빠른 발전에 따라 항상 흥미로운 것들이 기다리고 있습니다.
      </p>
    ]

}
