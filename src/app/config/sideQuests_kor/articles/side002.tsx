import { ArticleType } from "../../../utils/types"


export const side002: ArticleType = {
    id: 9945102,
    title: '온라인 포트포리오 만드는 법',
    summary:  "온라인 포트폴리오를 만드는 것은 템플릿을 이용해 빠르게 할 수도 있고, 웹 개발에 대한 깊은 학습을 통해 더 복잡하게 할 수도 있습니다.",
    primaryImage: '/static/screenshot.webp',
    content: [
      <p key="1">
        작업을 보여주거나, 직업에 지원하거나, 친구들에게 멋진 웹 디자인을 자랑하고 싶다면, 온라인 포트폴리오는 오늘날 디지털 세계에서 필수입니다. 그러나 접근 방식에 있어서 약간의 갈림길이 있습니다.
      </p>,
      
      <h2 key="2">스크래치로 만들기 vs. 템플릿 사용하기</h2>,
      <p key="3">
        솔직히 말하자면, 웹사이트를 스크래치부터 만드는 방법을 배우는 데 시간을 투자했지만, 그 경험이 좋긴 했지만, 지식을 얻기 위해서가 아니라면 그렇게 추천하진 않습니다. 왜냐하면 가까운 미래에 AI 모델이 당신이 익힌 웹 디자인 기술을 복제할 가능성이 높기 때문입니다. 맞습니다, AI가 그만큼 뛰어나져서 프로페셔널한 웹사이트를 쉽게 만들어낼 수 있습니다.
      </p>,
      <p key="4">
        포트폴리오를 빨리 올리고 싶다면 시간을 절약하세요. 코드 작성 없이도 아름답고, 사용자 정의 가능하며, 사용하기 쉬운 웹사이트 템플릿이 많습니다—예를 들어, Squarespace, Wix, 또는 WordPress. 이 플랫폼들은 드래그 앤 드롭 기능, 사용자 정의 가능한 테마를 제공하며, 웹사이트를 몇 주가 아니라 몇 시간 안에 구축할 수 있습니다.
      </p>,
      
      <h2 key="5">웹 개발을 배우고 싶다면…</h2>,
      <p key="6">
        저처럼 웹사이트가 어떻게 작동하는지 알고 싶다면, HTML, CSS, JavaScript의 멋진 세계로 뛰어들 준비를 하세요. 다음은 시작하기 위한 간단한 로드맵입니다:
      </p>,
      
      <ul key="7">
        <li>HTML</li>
        <p>웹사이트의 기본 구조를 형성합니다. 여기서 콘텐츠(헤딩, 단락, 이미지 등)를 구성합니다.</p>
        <li>CSS</li>
        <p>웹사이트를 보기 좋게 만들어주는 스타일링을 담당합니다—색상, 폰트, 레이아웃 등.</p>
        <li>JavaScript</li>
        <p>작동의 핵심입니다. 상호작용 기능, 애니메이션, 팝업 등을 추가하고 싶다면 JavaScript가 필요합니다.</p>
      </ul>,
      
      <p key="8">
        HTML 기본을 배우려면 <a href='https://w3schools.com'>W3Schools</a>를 확인하세요. CSS를 단계별로 배우기에는 MDN Web Docs가 훌륭한 자료입니다. HTML, CSS, JavaScript에 대한 기본 이해를 얻은 후에는 React와 같은 프레임워크를 사용하여 더 높은 수준으로 발전할 수 있습니다.
      </p>,
      
      <h2 key="9">간단한 웹사이트 만들기: React 사용하기</h2>,
      
      <ul key="10">
        <li>디자인 만들기</li>
        <p>사이트가 어떻게 보이기를 원하는지에 대한 정신적인 지도나 명확한 디자인으로 시작하는 것이 좋습니다. Figma와 같은 전용 도구나 Canva와 같은 디자인 플랫폼을 사용할 수 있습니다.</p>
        <li>Node.js 및 npm 설치하기</li>
        <p>React는 npm과 같은 패키지 관리자가 필요하며, 이는 Node.js와 함께 제공됩니다. <a href='https://nodejs.org'>여기서 다운로드</a>할 수 있습니다.</p>
        <li>React 앱 만들기</li>
        <p>
          터미널을 열고 다음을 입력하세요:
          <p>
            npx create-react-app my-portfolio<br />
            cd my-portfolio<br />
            npm start
          </p>
        </p>
        <li>기본 콘텐츠 교체하기</li>
        <p>기본 콘텐츠를 자신의 것으로 교체하세요. 작업할 주요 파일은 src/App.js입니다. 여기서 컴포넌트를 구축할 수 있습니다(웹사이트의 빌딩 블록처럼 생각하세요).</p>
        <li>사이트 구조화하기</li>
        <p>디자인에 따라 사이트를 구조화하세요. 컴포넌트와 스타일을 사용하여 사이트를 원하는 대로 만들 수 있습니다.</p>
        <li>배포하기</li>
        <p>사이트가 로컬에서 멋지게 보이면, Netlify나 GitHub Pages와 같은 플랫폼에 배포하여 온라인으로 공개할 수 있습니다.</p>
      </ul>,
      
      <p key="11">
        웹사이트 포트폴리오를 구축하는 것은 당신이 원하는 만큼 간단하거나 복잡할 수 있습니다. 급하거나 프로페셔널한 것이 필요하다면 템플릿을 사용하세요. 그러나 웹사이트가 어떻게 작동하는지 궁금하고 코드에 뛰어드는 것을 꺼리지 않는다면, HTML, CSS, JavaScript 및 React와 같은 프레임워크를 배우는 것은 재미있는 실습 경험이 될 수 있습니다.
      </p>,
    ]    
}