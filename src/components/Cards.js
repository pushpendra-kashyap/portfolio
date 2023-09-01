import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

const Cards = ({ children, title, context }) => {
  return (
    <div className="transition-all duration-300 h-[340px] flex items-center overflow-hidden pt-14 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-lg hover:bg-gradient-to-r hover:from-[#1e2024] hover:to-[#000000] hover:cursor-pointer">
      <div className="transition-all duration-300 p-8 text-white hover:-translate-y-10">
        <div className="py-10">{children}</div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="py-10 font-medium">{context}</p>
        <span>
          <HiArrowSmRight size={30} className="text-designColor" />
        </span>
      </div>
    </div>
  );
};

export default Cards;
