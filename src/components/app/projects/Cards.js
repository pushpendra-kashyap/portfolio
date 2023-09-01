import Image from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

function Cards({ src, title, context }) {
  return (
    <div className=" h-[450px] flex items-center overflow-hidden bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-lg ">
      <div className="p-10 text-white ">
        <div className="h-60 overflow-hidden rounded-lg">
          <Image
            src={src}
            alt="src"
            className="h-full transition-all duration-300 mb-5 hover:scale-110 object-cover cursor-pointer "
          />
        </div>
        <div className="flex justify-between items-center py-5">
          <div>
            <span className="text-designColor text-sm">{title}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <AiFillGithub />
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <FaGlobe />
            </span>
          </div>
        </div>
        <div>
          <p className="font-sans">{context}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
