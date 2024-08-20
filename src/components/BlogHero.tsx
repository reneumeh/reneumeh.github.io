import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const BlogHero = () => {
    const blogHeroImages = [
        {
            id: "1",
            src: "/static/portfolio_analysis.png",
        },
        {
            id: "2",
            src: "/static/portfolio_partDesign.png",
        },
    ];

    const [shownImageId, setShownImageId] = useState(blogHeroImages[0].id);

    useEffect(() => {
        const interval = setInterval(() => {
            setShownImageId(prevShownImageId => {
                return prevShownImageId === blogHeroImages[blogHeroImages.length - 1].id 
                    ? blogHeroImages[0].id 
                    : String(Number(prevShownImageId) + 1);
            });
        }, 4000);

        return () => clearInterval(interval); 
    });

    return (
        <BlogHeroWrapper>
            <div className='intro-1'>This is where </div>
            <div className='intro-2'>I write about </div>
            <div className='intro-3'>stuff I've worked on</div>
            {
                blogHeroImages.map((image) => (
                    <img 
                        key={image.id} 
                        src={image.src} 
                        alt={`Slide ${image.id}`}
                        className={image.id === shownImageId ? 'active' : ''} 
                    />
                ))
            }
        </BlogHeroWrapper>
    );
};

export default BlogHero;

const BlogHeroWrapper = styled.div`
    height: 45.5em;
    position: relative;

    img {
        position: absolute;
        height: ;
        object-fit: contain;
        opacity: 0;
        transition: opacity 2s ease-in-out;
        top: 15rem;
        left: 20vw;
        &.active {
            opacity: 1;
        }
    }

    .intro-1 {
        position: relative;
        top: 19rem;
        left: 60vw;
        width: 38vw;
        font-family: Leaugue-Spartan;
        font-size: 3.7rem;
    }

    .intro-2 {
        position: absolute;
        top: 23.8rem;
        left: 60vw;
        width: 38vw;
        font-family: Leaugue-Spartan;
        font-size: 3.7rem;
    }
    
    .intro-3 {
        position: relative;
        top: 25rem;
        left: 60vw;
        width: 38vw;
        font-family: Leaugue-Spartan;
        font-size: 3.7rem;
        color: #AB957C;
    }
`;
