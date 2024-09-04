
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PALETTE } from '../utils/theme';

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
            {/* <img className='blob' src='static/blob.png' alt='blob' /> */}
            {
                blogHeroImages.map((image) => (
                    <img 
                        key={image.id} 
                        src={image.src} 
                        alt={`Slide ${image.id}`}
                        className={image.id === shownImageId ? 'active slideshow' : 'slideshow'} 
                    />
                ))
            }
        </BlogHeroWrapper>
    );
};

export default BlogHero;

const BlogHeroWrapper = styled.div`
    height: 47em;
    position: relative;

    .blob {
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
        position: absolute;
        height: 28vw;
        object-fit: contain;
        top: calc(23rem - 10vw);
        margin-right: 15vw;
        right: 25vw;
    }

    .slideshow {
        position: absolute;
        height: 25vw;
        object-fit: contain;
        opacity: 0;
        transition: opacity 2s ease-in-out;
        top: calc(25rem - 10vw);
        margin-right: 15vw;
        right: 40vw;
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
        line-height: 4.2rem;
        color: ${PALETTE.PRIMARY.DEFAULT};
    }

    @media screen and (max-width: 860px) {
    height: calc(18em + 50vw) ;
     .intro-2 {
    display: none;
    }

    .intro-1 {
    display: none;
    }

    .intro-3 {
    top: calc(5em + 50vw);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
    font-size: calc(3vw + 1em);
    text-transform: capitalize;
    }

    .slideshow {
    height: 45vw;
    top: calc(4.5em + 15.5vw);
    margin: unset;
    left: 20vw;
    width: 60vw;
    }

    .blob {
    display: none;
    }
`;
