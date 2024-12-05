type PortfolioItem = {
    name: string;
    explanation: string;
    image: string;
};

type PortfolioCategories = {
    [key: string]: PortfolioItem[];
};

export const portfolio_stuff : PortfolioCategories = {
    'MECHANICAL ENGINEERING': [
        {
            name: "PART DESIGN",
            explanation: "Using machine element design principles, I work to find innovative designs and features with a plethora of CAD platforms including Catia, SOLIDWORKS & Ansys DesignModeller",
            image: "/static/portfolio_partDesign.webp",
        },
        {
            name: "ANALYSIS",
            explanation: "I perform solid (static & dynamic) and fluid simulations using CAE and compare the results to theoretical estimations",
            image: "/static/portfolio_analysis.webp",
        },
        {
            name: "AUTOMOBILE",
            explanation: "I am especially well-versed in automobile engineering literature and I have a background in suspension control for formula racing cars",
            image: "/static/portfolio_automobile.webp",
        },
        {
            name: "CODING",
            explanation: "I am proficient in Python, MATLAB, C++, and many other engineering programming languages",
            image: "/static/portfolio_coding.webp",
        },
    ],
    'PROGRAMMING AND DESIGN': [
        {
            name: "AI & DL/ML",
            explanation: "I am conversant with the latest literature concerning different architectures of Artificial Intelligence and Machine Learning. I have experience with building and finetuning AI models",
            image: "/static/portfolio_aiDlMl.webp",
        },
        {
            name: "3D MODELING",
            explanation: "I have special experience with 3D asset management and 3D reconstruction using Deep Learning.",
            image: "/static/portfolio_3dModeling.webp",
        },
        {
            name: "UI/UX DESIGN",
            explanation: "I am a self-taught UI/UX designer and I have professional experience with designing and maintaining webpages",
            image: "/static/portfolio_uiUxDesign.webp",
        },
        {
            name: "WEB DEV",
            explanation: "I am proficient with TypeScript and JavaScipt and I have professional experience building responsive webpages like this one",
            image: "/static/portfolio_webDev.webp",
        },
    ],
    'EXTRACURRICULAR ACTIVITIES': [
        {
            name: "STUDENT COUNCIL",
            explanation: "I served as President of the Samsung Global Dream Scholarship Foundation's Student Council for 2023",
            image: "/static/portfolio_studentCouncil.webp",
        },
        {
            name: "SOCIAL MEDIA",
            explanation: "I have managed the social media pages of the Samsung Global Dream Scholarship Foundation's Student Council and SpaceMap Inc",
            image: "/static/portfolio_socialMedia.webp",
        },
        {
            name: "DEBATE",
            explanation: "I enjoy debate and I participated as a member of the university debate society",
            image: "/static/portfolio_debate.webp",
        },
        {
            name: "VOLUNTEER",
            explanation: "I enjoy volunteering and I have volunteered at the Seoul Welfare Center For the Elderly and the Austin Animal Center",
            image: "/static/portfolio_volunteer.webp",
        },
    ]
}
    