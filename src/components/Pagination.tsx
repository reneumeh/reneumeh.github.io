import { useTotalPageHandler } from '../utils/utils';
import styled from 'styled-components';

type paginationProps = {
  isMobile: boolean,
  currentPage: number,
  totalCount: number,
  setCurrentPage: (target_page: number) => void,
  pageSize: number,
}

const Pagination = ({
  isMobile,
  currentPage,
  totalCount,
  setCurrentPage,
  pageSize = 1,
} : paginationProps) => {
  const totalPage = useTotalPageHandler(totalCount, pageSize);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <PaginationWrapper>
      <button className='side-button' onClick={handlePreviousPage} disabled={currentPage === 0}>
        {'<'}
      </button>
      {
        Array(totalPage).fill(null).map((_, index) => (
            <button
            key={index}
            className={index === currentPage ? "page-button active" : "page-button"}
            onClick={() => { setCurrentPage(index); }}
            />
        ))
      }
      <button className='side-button' onClick={handleNextPage} disabled={currentPage === totalPage - 1 || totalPage === 0}>
        {'>'}
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  margin-top: 15px;
  .side-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B5B5B5;
    border: none;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }

  .page-button {
    border: none;
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 50%;
    background-color: #D1D3D4;
    transition: 0.7s ease all;
    &:hover {
      cursor: pointer;
    }
  }

    .active {
    background-color: white;
    }

  .page-text {
    color: white;
    align-self: center;
    .page-count {
      color: red;
    }
  }
  .page-size-select {
    position: absolute;
    font-size: 0.7rem;
    color: white;
    right: 0;
    width: 5.3rem;
    padding: 2px 7px;
    background-color: grey;
    border: none;
    border-radius: 5px;
    color: white;
    option {
      background-color: black;
    }
    :active {
      border: none;
      background-color: grey;
    }
  }
`;

