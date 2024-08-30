const randomSatellites = ['STARLINK-1554','ONEWEB-0514','NIGERIASAT 1','KOMPSAT 5','COSMOS 942','KEPLER-21','OCEANSAT 2','HELIOS 2A','VELOX 1','FENGYUN 3A','ISS (ZARYA)','BRITE-PL','STARLINK-4593','USA 3']
const randomSat1 = randomSatellites[Math.floor(Math.random() * randomSatellites.length)]
const randomSat2 = randomSatellites[Math.floor(Math.random() * randomSatellites.length)]

export const suggestedQuestionsList1 = [
  'Give me the recent conjunctions',
  `Is ${randomSat1} in any conjunctions?`,
  `Tell me about ${randomSat2}`,
  'Give the most probable conjunctions involving any Starlink satellite?',
];

export const suggestedQuestionsList2 = [
  'When was SPACEMAP founded?',
  'Who founded SPACEMAP Inc',
  "How do I subscribe to SPACEMAP's services",
  '한국어로 답변하세요',
];


