import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const PortfolioItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a href={item.link} target='_blank' rel="noopener noreferrer" className="project__button">
                Source Code <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    );
}

export default PortfolioItems;