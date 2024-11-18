import { useRef } from "react";

const MapElements = () => {
    const texasPin = useRef(null);
    const lagosPin = useRef(null);
    const seoulPin = useRef(null);
return ([
        {
            country: "USA",
            city: "Texas",
            loc: {long: -97.7431, lat: 30.2672},
            explanation: <p>In 2021, I travelled to Texas for an exchange semester at the <a href='https://www.utexas.edu/' target="_blank">University of Texas at Austin</a>. It was the first time I was travelling and living completely independently. I earned an internship at <a href="https://www.rice.edu/" target="_blank">Rice University</a> following the end of the semester.</p>,
            ref: texasPin
        },
        {
            country: "Nigeria",
            city: "Lagos",
            loc: {long: 3.3792, lat: 6.5244 },
            explanation: <p>I was born and raised as the second of five children in Lagos, Nigeria. The appetite to stand out comes naturally when you are from a big family. I studied and graduated as the valedictorian from <a href='https://stgregoryscollege.ng/' target='_blank'>St. Gregory&apos;s College.</a></p>,
            ref: lagosPin
        },
        {
        country: "South Korea",
        city: "Seoul",
        loc: {long: 126.9971, lat: 37.5503 },
        explanation: <p>I traveled to Seoul for my undergraduate degree. I learnt Korean at the Hanyang International Language Institute. Following that, I graduated summa cum laude from <a href='https://www.hanyang.ac.kr/web/eng' target="_blank">Hanyang</a>&apos;s Mechanical Engineering Program with the help of the <a href='https://www.sdream.or.kr/' target='_blank'>Samsung Dream Scholarship Foundation</a></p>, 
        ref: seoulPin
    },
    ])
}

export default MapElements