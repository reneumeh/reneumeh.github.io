
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PALETTE } from '../utils/theme';
import useIsScrolling from '../hooks/useIsScrolling';
import useIsMobile from '../hooks/useIsMobile';
import blogHeroItems from '../config/blog-hero-items';

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
            x: e.clientX + 10,
            y: e.clientY - 65,
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

    const blogHeroImages = blogHeroItems
    .filter((item) => item.type === 'img')
    .map((item, index) => ({ ...item, id: index }));
    
  const [shownImageId, setShownImageId] = useState(blogHeroImages[0].id);
  
  const columns = [
    blogHeroItems.filter((item) => item.column === 1),
    blogHeroItems.filter((item) => item.column === 2),
    blogHeroItems.filter((item) => item.column === 3),
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShownImageId((prevShownImageId) => {
        return prevShownImageId === blogHeroImages[blogHeroImages.length - 1].id 
          ? blogHeroImages[0].id 
          : blogHeroImages[prevShownImageId + 1].id;
      });
    }, 4000);
  
    return () => clearInterval(interval);
  }, [blogHeroImages]);

    return (
        <BlogHeroWrapper>
            {isMobile ?
            <Slideshow>
                {
                blogHeroImages.map((image, index) => (
                    <div key={index} className='slideshow-container'>
                    <img 
                        key={image.id} 
                        src={image.src} 
                        alt={`Slide ${image.id}`}
                        fetchPriority='high'
                        loading='eager'
                        className={image.id === shownImageId ? 'active slideshow' : 'slideshow'} 
                    />
                    <p className={image.id === shownImageId ? 'active' : ''}>
                        {image.description}
                    </p>
                    </div>
                ))}
                </Slideshow>
            :
                <CollageGrid>
                    <div className='intro-1'>This is where </div>
                    <div className='intro-2'>I write about </div>
                    <div className='intro-3'>stuff I&apos;ve worked on</div>
                {columns.map((column, index) => (
                    <div key ={index} className='column'>
                        {column.map((item,index) => (
                            <a 
                            key ={index}
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
                                fetchPriority='high'
                                loading='eager'
                            /> :
                                <video                             
                                key={item.id} 
                                src={item.src}
                                loop
                                preload='auto'
                                muted
                                onMouseOver={(event) => (event.target as HTMLVideoElement).play()}
                                onMouseOut={(event) => (event.target as HTMLVideoElement).pause()}
                                />}
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

    .slideshow-container {
        display: flex;
        flex-direction: column;
    }

    .slideshow {
        background-color: white;
        position: absolute;
        min-width: 100vw;
        height: 50vh;
        object-fit: cover;
        object-position: 50% 50%;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        box-shadow: 8px 8px ${PALETTE.PRIMARY.DARK};
        &.active {
            opacity: 1;
        }
    }

    p {
        position: absolute;
        top: 52vh;
        opacity: 0;
        place-self: center;
        &.active {
            opacity: 1;
        }
    }

    .intro-1 {
        position: absolute;
        top: 49vh;
        left: 10vw;
        width: 38vw;
        font-family: League-Spartan;
        font-size: 3.7rem;
        color: ${PALETTE.WHITE};
        z-index: 9;
    }

    .intro-2 {
        position: absolute;
        top: 57.8vh;
        left: 10vw;
        width: 38vw;
        font-family: League-Spartan;
        font-size: 3.7rem;
        color: ${PALETTE.WHITE};
        z-index: 9;
    }
    
    .intro-3 {
        position: absolute;
        top: 65vh;
        left: 10vw;
        width: 38vw;
        font-family: League-Spartan;
        font-size: 3.7rem;
        line-height: 4.2rem;
        color: ${PALETTE.WHITE};
        z-index: 9;
    }

    @media screen and (max-width: 1010px) {
    .intro-1, .intro-2 {
    display: none;
    }

    .intro-3 {
    top: 45vw;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
    font-size: calc(3vw + 1em);
    text-transform: capitalize;
    }
`;

const Slideshow = styled.div`
    height: 50vh;
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

    img, video {
    object-fit: cover;
    min-height: 100%;
    max-width: 100%;
    min-width: 100%;
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