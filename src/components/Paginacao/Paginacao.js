import React from 'react';
import '../../assets/css/components/paginacao.css';


const Pagination = ({
  offset,
  setOffset, }) => {

  function onPageChange(page) {
    setOffset((page));
  }

  return (
    <ul className="paginacao">
      <li>
        <button
          onClick={() => onPageChange(offset + 1)}
        > Mais projetos
        </button>
      </li>
    </ul>
  )
};

export default Pagination;
