import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Award } from "../utils/types";
import { ModalWrapper } from "./PortfolioModal";
import { PALETTE } from "../utils/theme";
import { IconButton } from "@chakra-ui/react";
import { MdFormatListBulleted, MdViewModule } from "react-icons/md";
import { motion } from "framer-motion";

interface AwardsListProps {
  awardsList: Award[];
  collectionName: string;
}

const AwardsList = ({ awardsList, collectionName } : AwardsListProps) => {
  const [isListView, setIsListView] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false); 
  const modalEl = useRef(null);
  const [moveDirection, setMoveDirection] = useState<number>(0)

  useEffect(() => {
    if (isListView) {
      setHasAnimated(true);
    }
  }, [isListView]);
  
  const openImageViewer = (index : number) => {
    setCurrentIndex(index);
  };

  const closeImageViewer = () => {
    setCurrentIndex(-1);
  };

  const goToNext = () => {
    setMoveDirection(100)
    setCurrentIndex((prevIndex : number) =>
      prevIndex === awardsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setMoveDirection(-100)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awardsList.length - 1 : prevIndex - 1
    );
  };

  return (
    <AwardsListWrapper>
      <Header>
        <h1>{collectionName}</h1>
        <div className="flex">
          <IconButton
            className='module'
            aria-label="View image"
            icon={<MdViewModule size={20} />}
            onClick={() => {setIsListView(false)}}
            marginRight={'0.3rem'}
            bg= {PALETTE.BACKGROUND}
            _hover= {{ bg: `${PALETTE.SECONDARY.LIGHT}` }}
            size={"3rem"}
          />
          <IconButton
            className='list'
            aria-label='View list'
            icon={<MdFormatListBulleted size={20} />}
            onClick={() => {setIsListView(true)}}
            bg= {PALETTE.BACKGROUND}
            marginRight={'0.3rem'}
            _hover= {{ bg: `${PALETTE.SECONDARY.LIGHT}` }}
            size={"3rem"}
          />
        </div>
      </Header>

      {isListView ? (
        <motion.ul
          initial={{ opacity: 0, y: hasAnimated ? 0 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {awardsList.map((award, index) => (
            <motion.li 
              key={index} 
              onClick={() => openImageViewer(index)}
              initial={{ opacity: 0, backgroundColor: `${PALETTE.SECONDARY.LIGHT}`, y: hasAnimated ? 0 : -20 }}
              animate={{ opacity: 1, backgroundColor: `${PALETTE.BACKGROUND}`, y: 0 }}
              transition={{ duration: 0.15, delay: hasAnimated ? 0 : index * 0.07 }}
              whileHover={{ backgroundColor: `${PALETTE.SECONDARY.LIGHT}`, cursor: 'pointer' }}
            >
              {award.name}
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <motion.div 
          className="awards-gallery"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {awardsList.map((award, index) => (
            <div key={index} onClick={() => openImageViewer(index)} style={{ cursor: "pointer" }}>
              <img src={award.image} alt={award.name} />
              <p>{award.name}</p>
            </div>
          ))}
        </motion.div>
      )}

{currentIndex >= 0 && (
        <ModalWrapper handleCloseModal={closeImageViewer} modalEl={modalEl}>
          <motion.div
            ref= {modalEl}
            className="image-viewer-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.15 }}
          >
            <button
              className='previous'
              onClick={goToPrev}
            >
              <img className="arrow" src="/static/arrow.png" alt="previous image" />
            </button>
            <motion.img 
              key={currentIndex}
              src={awardsList[currentIndex].image} 
              alt={awardsList[currentIndex].name} 
              style={{ width: "80%", marginTop: '5rem' }}
              initial={{ opacity: 0, x: moveDirection }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.15 }}
            />
            <button
              className='next'
              onClick={goToNext}
            >
              <img className="arrow" src="/static/arrow.png" alt="next image" />
            </button>
            <p
            >{awardsList[currentIndex].name}</p>
          </motion.div>
        </ModalWrapper>
      )}
    </AwardsListWrapper>
  );
};

export default AwardsList;

const AwardsListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${PALETTE.BACKGROUND};
  font-family: Leaugue-Spartan-minor;
  border-top: 1px solid rgba(0,0,0,0.3);

  h1 {
    color: ${PALETTE.PRIMARY.DARK};
  }

  .flex {
    display: flex;
  }

  ul {
    list-style-type: square;
  }

  li {
    padding: 1rem;
  }

  .awards-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1.2fr);
    gap: 1rem;

    img {
      width: 10vw;
    }
  }

  .awards-gallery div {
    text-align: center;
  }

  .image-viewer-content {
    position: relative;
    z-index: 1001;
    text-align: center;
  }

  .arrow {
    position: relative;
    top: 3px;
    width: 30px;
    height: 1rem;
    object-fit: cover;
    cursor: pointer;
  }

  .previous {
    transform: scaleX(-1);
  }

  .image-viewer-content img {
    max-width: 65%;
    max-height: 80vh;
  }

  .image-viewer-content button {
    margin: 0.25rem;
    position: relative;
    top: -25vh;
    padding: 0.25rem 0.5rem;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }

  .module {
    border: none;
  }

  .list {
    border: none;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
