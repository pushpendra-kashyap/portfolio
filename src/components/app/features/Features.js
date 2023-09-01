import React from 'react';
import Cards from '../Cards';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaGlobe } from 'react-icons/fa';
import { SiProgress } from 'react-icons/si';
import {
  AiFillAppstore,
  AiFillMobile,
  AiOutlineAntDesign,
} from 'react-icons/ai';

function Features() {
  return (
    <div>
      <div className="bg-primary scroll-space" id="features">
        <div className="my-container border-t border-t-gray-500">
          <h1 className="text-[#ff014f] pt-10 px-20 text-lg ">FEATURES</h1>
          <h1 className="text-5xl text-white pt-6 px-20 font-semibold">
            What I Do
          </h1>
        </div>
        <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-20">
          <Cards
            title="Business Stratagy"
            context="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          >
            <GiHamburgerMenu size={50} className="text-designColor" />
          </Cards>
          <Cards
            title="App Development"
            context="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          >
            <AiFillAppstore size={50} className="text-designColor" />
          </Cards>
          <Cards
            title="SEO Optimisation"
            context="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          >
            <SiProgress size={50} className="text-designColor" />
          </Cards>
          <Cards
            title="Mobile Development"
            context="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          >
            <AiFillMobile size={50} className="text-designColor" />
          </Cards>
          <Cards
            title="UX Design"
            context="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          >
            <AiOutlineAntDesign size={50} className="text-designColor" />
          </Cards>
          <Cards
            title="Hosting Websites"
            context="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          >
            <FaGlobe size={50} className="text-designColor" />
          </Cards>
        </div>
      </div>
    </div>
  );
}

export default Features;
