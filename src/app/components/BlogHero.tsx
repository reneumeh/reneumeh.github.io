
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PALETTE } from '../utils/theme';
import Image from 'next/image';
import useIsScrolling from '../hooks/useIsScrolling';
import useIsMobile from '../hooks/useIsMobile';

const BlogHero = () => {
    const { resetScroll } = useIsScrolling();
    const isMobile = useIsMobile();
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });

    useEffect(() => {
        resetScroll(); 
    }, [resetScroll]);

    const handleMouseEnter = (description: string) => (e: React.MouseEvent) => {
        setTooltip({
            visible: true,
            x: e.clientX,
            y: e.clientY,
            text: description,
        });
    };

    const handleMouseMove = (description: string) => (e: React.MouseEvent) => {
        setTooltip({
            visible: true,
            x: e.clientX + 10,
            y: e.clientY - 65,
            text: description,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, x: 0, y: 0, text: '' });
    };
    
    const blogHeroItems = [
        {
            id: "0",
            column: 1,
            src: "/static/race.mp4",
            description: 'Race Car Engineering',
            link: "#/blog/article?id=3194005",
            type: "video",
            height: "43.9%",
            width: "43.9%"
        },
        {
            id: "1",
            column: 1,
            src: "/static/racecar.jpg",
            description: 'Race Car Engineering',
            link: "#/blog/article?id=3194005",
            type: "img",
            height: "56.1%",
            width: "43.9%"
        },
        {
            id: "2",
            column: 2,
            src: "/static/screw.mp4",
            description: "Dumpling Screw Redesign",
            type: "video",
            link: "#/blog/article?id=3194003",
            height: "27%",
            width: "24.583%"
        },
        {
            id: "3",
            column: 2,
            src: '/static/rccar.png',
            description: 'RC Car Engineering',
            type: "img",
            link: "#/blog/article?id=3194005",
            height: "48.9%",
            width: "24.583%"
        },
        {
            id: "4",
            column: 2,
            src: "/static/lego.png",
            description: "Lego Brick Color Sorter",
            type: "img",
            link: "#/blog/article?id=3194004",
            height: "24%",
            width: "24.583%"
        },
        {
            id: '5',
            column: 3,
            src: "/static/spacemap.png",
            description: "Satellite Collision Prevention System",
            type: "img",
            link: "#/blog/article?id=3194004",
            height: "42.9%",
            width: "31.528%"
        },
        {
            id: '6',
            column: 3,
            src: '/static/kist.png',
            description: '2D to 3D Conversion AI Model',
            type: "img",
            link: "#/blog/article?id=3194004",
            height: "57.1%",
            width: "31.528%"
        },
    ];

    const blogHeroImages = blogHeroItems.filter((item)=> item.type == 'img')
    const [shownImageId, setShownImageId] = useState(blogHeroImages[0].id);

    const columns = [
        blogHeroItems.filter((item) => item.column == 1),
        blogHeroItems.filter((item) => item.column == 2),
        blogHeroItems.filter((item) => item.column == 3)]

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
            {isMobile ?
                blogHeroImages.map((image, index) => (
                    <div key={index}>
                    <img 
                        key={image.id} 
                        src={image.src} 
                        alt={`Slide ${image.id}`}
                        className={image.id === shownImageId ? 'active slideshow' : 'slideshow'} 
                    />
                    </div>
                ))
            :
                <CollageGrid>
                {columns.map((column, index) => (
                    <div className='column'>
                        {column.map((item,index) => (
                            <a 
                            href={item.link} 
                            style= {{ height: item.height }} 
                            onMouseEnter={handleMouseEnter(item.description)}
                            onMouseMove={handleMouseMove(item.description)}
                            onMouseLeave={handleMouseLeave}>
                            {item.type == "img" ?
                                <img 
                                key={item.id} 
                                src={item.src} 
                                alt={`Slide ${item.id}`}
                            /> :
                                <video                             
                                key={item.id} 
                                src={item.src}
                                muted
                                onMouseOver={(event) => (event.target as HTMLVideoElement).play()}
                                onMouseOut={(event) => (event.target as HTMLVideoElement).pause()}/>}
                            </a>
                        ))}
                    </div>
                ))}
                </CollageGrid>
}
                {tooltip.visible && (
                    <Tooltip key={tooltip.text} style={{ top: tooltip.y, left: tooltip.x }}>
                        {tooltip.text}
                    </Tooltip>
                )}
        </BlogHeroWrapper>
    );
};

export default BlogHero;

const BlogHeroWrapper = styled.div`
    max-height: 100vh;
    position: relative;

    .slideshow {
        background-color: white;
        position: absolute;
        max-height: 25vw;
        max-width: 35vw;
        object-fit: contain;
        opacity: 0;
        transition: opacity 2s ease-in-out;
        top: calc(25rem - 10vw);
        margin-right: 15vw;
        right: 40vw;
        box-shadow: 8px 8px ${PALETTE.PRIMARY.DARK};
        &.active {
            opacity: 1;
        }
    }

    .intro-1 {
        position: absolute;
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
        position: absolute;
        top: 25rem;
        left: 60vw;
        width: 38vw;
        font-family: Leaugue-Spartan;
        font-size: 3.7rem;
        line-height: 4.2rem;
        color: ${PALETTE.PRIMARY.DEFAULT};
    }

    @media screen and (max-width: 860px) {

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
    max-height: 45vw;
    top: calc(4.5em + 15.5vw);
    margin: auto;
    max-width: 60vw;
    left: 20vw;
    }

    .blob {
    display: none;
    }

    p {
        display: none;
    }
`;

const HeroWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #f4f4f4;
    text-align: center;
`;

const CollageGrid = styled.div`
    margin-top: 5.45rem;
    display: grid;
    grid-template-columns: 43.9% 24.583% 31.528%;
    width: 100vw;
    margin-bottom: 2rem;
    overflow: hidden;
    gap: 0px;

    a {
    display: block;
    overflow: hidden;
    background-color: ${PALETTE.BLACK};
    }

    .column {
    max-height: calc(100vh - 5.5rem);
    }

    img {
    object-fit: cover;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.5;
    transition: all ease 1s;

    &:hover {
        opacity: 1;
        }
    }

    video {
    object-fit: cover;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.5;
    transition: all ease 1s;

    &:hover {
        opacity: 1;
        }
    }
`;

const Tooltip = styled.div`
    position: absolute;
    background-color: ${PALETTE.PRIMARY.DEFAULT};
    color: ${PALETTE.WHITE};
    padding: 0.5rem;
    font-size: 1rem;
    pointer-events: none;
    white-space: nowrap;
    z-index: 10;
    opacity: 0.9;
    box-shadow: 4px 4px ${PALETTE.PRIMARY.DARK};
`;