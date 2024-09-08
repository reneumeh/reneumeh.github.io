import { ArticleType } from "@/app/utils/types"
import Image from 'next/image';

export const main003: ArticleType = {
    id: 3194103,
    title: '특허 쓰는 법 (학사)',
    summary: "이 글에서는 우수한 특허를 작성하는 방법을 자세히 설명하고, CJ Foods에서의 만두 스크류 재설계 프로젝트를 통해 얻은 교훈을 공유합니다.",
    primaryImage: '/static/screw.png',
    content: [
      <p key="1">특허를 작성하는 것은 완벽한 사워도우 빵을 구우는 것과 비슷합니다. 과정이 길고 독특하며, 제대로 맞추기 위해 많은 반복이 필요합니다. 저는 사워도우 빵을 구운 적도 없고 실제 공식 특허를 만든 적도 없지만, 제 조언을 조금 유념해 주세요 (비유를 잘 연결하는 건 저의 장기입니다). 그러나 저는 CJ Foods에서 만두 스크류를 재설계하는 프로젝트를 진행했으며, 이 글은 그 과정에서 배운 것들에 대한 기사입니다. 만두 스크류를 재설계하는 과정에는 많은 반죽과 엔지니어링, 그리고 많은 수정이 포함되었습니다. 하지만 그 부분은 나중에 더 자세히 설명하겠습니다. 먼저 기본적인 사항부터 시작해서 완벽한 특허의 &apos;사워도우&apos;를 만드는 방법을 알아보겠습니다.</p>, 
      <h2 key="2">명확한 문제 정의로 시작하기</h2>,
      <p key="3">물론, 어딘가에서 시작하고, 벤치마크를 설정하며, 목표를 설정해야 합니다. 이는 일반적인 프로젝트에서도 표준이지만, 특허 작성에서는 특히 중요합니다. 제 경우에는 기존 설계에 접근하기 전에 많은 문서 작업이 필요했습니다. 그러나 목표를 설정하는 아이디어는 있었습니다. 예를 들어, 스크류의 반죽 유지율을 줄여 효율성을 높이고 오염을 줄이려 했습니다. 또한 스크류를 재설계하여 반죽을 더 효율적으로 반죽하고 운반할 수 있도록 하려 했습니다. 공학적으로 말하자면, 우리는 높은 전단 영역과 전단 속도를 증가시키고자 했습니다.</p>,
      <p key="4">시작하려면 스스로에게 이렇게 질문하세요: 정확히 무엇을 해결하려고 하는가? 문제를 명확히 정의할수록 해결책을 개발하는 것이 쉬워집니다. 특허의 맥락에서 이 &apos;문제 정의&apos;는 당신의 북극성이 되어 디자인을 안내하고 당신이 만든 모든 것이 목적이 있도록 보장합니다.</p>,
      <h2 key="5">기존 솔루션 조사하기</h2>,
      <p key="6">일반적으로 문제를 해결하려고 할 때, 누군가 이미 이에 대해 책이나 논문을 썼을 가능성이 큽니다. 스크류 컨베이어에 관한 책이 있다는 사실을 믿기 어려울지도 모르겠습니다. 주요 목표는 적절한 자료를 찾는 것입니다. 아직 학교에 재학 중이라면 학교에서 학술 저널에 접근할 수 있는지 확인하세요. 또한, 주제에 대한 책을 얻으려고 해보세요. 그것은 고려해야 할 사항들을 실제로 이해하는 데 도움이 되며, 보통 필요한 대부분의 요소나 방정식을 한 곳에서 찾을 수 있습니다.</p>,
      <h2 key="7">디자인 및 반복</h2>,
      <p key="8">만두 스크류의 경우, 높은 전단 속도(반죽을 제대로 반죽하기 위해)와 스크류 자체의 마모를 최소화하는 것 사이의 균형을 맞춰야 했습니다. 이는 비행 각도와 기하학을 조정하여 반죽 흐름을 최적화하는 데 많은 시간을 소요했습니다.</p>,
      <p key="9">이 단계에서는 아이디어가 완벽할 필요는 없습니다. 대략적인 개념을 스케치하고, 이를 정신적으로 (혹은 ANSYS Fluent와 같은 시뮬레이션 소프트웨어를 통해) 테스트하고, 계속해서 개선하세요. 목표는 디자인을 반복하여 문제를 가장 잘 해결하는 것입니다.</p>,
      <h2 key="10">시뮬레이션 및/또는 프로토타입 제작</h2>,
      <p key="11">프로젝트를 수행할 때, 주장을 뒷받침할 테스트 모델이나 시뮬레이션이 필요할 것입니다. 여기서 큰 무기를 꺼내야 합니다. 우리는 스크류와 관련된 다양한 조정을 CAD 모델로 만든 후, Ansys Fluent에서 시뮬레이션을 시작했습니다.</p>,
      <div className="center" key="12">
        <video height={250} src='/static/screw.mp4' controls/>
      </div>,
      <p key="13">어떤 수정이 반죽을 잘 반죽하고 챔버 내의 식품 잔여물 없는 지역에서 반죽을 운반하는 데 가장 좋은 결과를 내는지 결정한 후, 우리는 테스트를 위해 미니어처 프로토타입을 3D 프린트했습니다. 이 전체 과정과 각 단계에서의 결과를 디자인 북이나 디지털로 기록하세요. 가능하다면, 시뮬레이션이나 프로토타입을 통해 디자인을 테스트해보세요. 이는 특허를 위해 아이디어를 언어로 표현하기 전에 아이디어를 다듬는 데 도움이 됩니다. 또한 주장을 뒷받침할 수 있는 실질적인 데이터를 제공하여 견고한 특허를 만드는 데 필수적입니다.</p>,
      <div className="up-and-down center" key="14">
        <img alt='example' src='/static/screw.png' /> 
        <i>우리의 미니어처 설정</i>
      </div>,
      <h2 key="15">특허 초안 작성하기</h2>,
      <p key="16">실제 특허 문서는 명확하고, 상세하며, 구체적이어야 합니다. 디자인을 핵심 요소로 나누고 그것이 1단계에서 정의한 문제를 어떻게 해결하는지 설명하세요. 우리는 다행히도 회사에서 특허를 위한 형식을 이미 가지고 있었습니다.</p>,
      <p key="17">모의 특허에서는 스크류의 기하학을 상세히 설명하고, 최적화된 비행 각도가 반죽 유지율을 줄이면서 반죽 효율성을 높이는 방법을 설명했습니다. 또한 디자인을 설명하는 다이어그램을 제공했습니다 (안타깝게도 NDA로 인해 이를 공유할 수는 없지만, 반죽으로 마법을 부리는 아름답게 엔지니어링된 금속 조각을 상상해 보세요).</p>,
      <p key="18">자신의 특허를 작성할 때, 다음 기본 구조를 따르세요:</p>,
      <ul key="19">
        <li>제목: 간단하면서도 설명적인 제목을 작성하세요.</li>
        <li>초록: 프로젝트를 몇 문장으로 요약하세요.</li>
        <li>배경: 문제와 기존 솔루션이 왜 부족한지 설명하세요.</li>
        <li>상세 설명: 이것이 특허의 핵심입니다. 발명품의 모든 부분과 그 작동 방식을 자세히 설명하세요.</li>
        <li>도면: 디자인을 시각화할 수 있도록 다이어그램이나 도면을 포함하세요.</li>
      </ul>,
      <p key="20">만두 스크류 재설계 경험을 되돌아보면, 모의 특허를 작성하는 과정에서 배운 한 가지는: 엔지니어링은 반복적이라는 것입니다. 특허를 작성하든 디자인을 조정하든, 각 반복에서 배우는 것이 중요합니다. 각 단계가 최종 제품에 더 가까워지게 하며, 각 수정이 특허를 더 탄탄하게 만드는 과정입니다.</p>
    ]

}