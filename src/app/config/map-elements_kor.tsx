import { useRef } from "react";

const MapElements = () => {
    const texasPin = useRef(null);
    const lagosPin = useRef(null);
    const seoulPin = useRef(null);
return ([
    {
        country: "미국",
        city: "오스틴",
        loc: {long: -97.7431, lat: 30.2672},
        explanation: <p>2021년 <a href='https://www.utexas.edu/' target="_blank">텍사스 대학교 오스틴</a> 캠퍼스에서 교환 학기를 보내기 위해 텍사스로 여행을 갔다. 여행을 하면서 완전히 독립해서 사는 것은 처음이었다. 학기가 끝나고 <a href="https://www.rice.edu/" target="_blank">라이스 대학</a>에서 인턴십을 했습니다.</p>,
        ref: texasPin
    },
    {
        country: "나이지리아",
        city: "라고스",
        loc: {long: 3.3792, lat: 6.5244 },
        explanation: <p>저는 나이지리아 라고스에서 다섯 자녀 중 둘째로 태어나고 자랐습니다. 돋보이려는 욕구는 대가족일 때 자연스럽게 나타납니다. <a href='https://stgregoryscollege.ng/' target='_blank'>세인트 그레고리</a> 졸업장으로 공부하고 졸업했습니다.</p>,
        ref: lagosPin
    },
    {
      country: "대한민국",
      city: "서울",
      loc: {long: 126.9971, lat: 37.5503 },
      explanation: <p>저는 학사학위를 위해 서울로 여행을 갔습니다. <a href='https://www.hanyang.ac.kr/' target="_blank">한양대하교</a>에서 한국어를 배웠다가 <a href='https://www.sdream.or.kr/' target='_blank'>삼성꿈장학재단</a>의 도움으로 기계 공학 학사를 마쳤습니다</p>, 
      ref: seoulPin
  },
])
}

export default MapElements