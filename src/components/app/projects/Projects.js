import React from 'react';
import Cards from './Cards';
import projectOne from '../../../../public/projectOne.jpg';
import projectTwo from '../../../../public/projectTwo.jpg';
import projectThree from '../../../../public/projectThree.jpeg';
import projectFour from '../../../../public/projectFour.jpg';
import projectFive from '../../../../public/projectFive.jpg';
import projectSix from '../../../../public/projectSix.jpg';
import Title from '../layouts/Title';

function Projects() {
  return (
    <div
      className="bg-primary scroll-space border-t border-t-black"
      id="project"
    >
      <div className="my-container p-20">
        <Title title="MY PORTFOLIO AND KEEP YOUR FEEDBACK" des=" My Projects" />
        <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 pt-20 px-20">
          <Cards
            title="SOCIAL MEDIA CLONE"
            context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad.."
            src={projectOne}
          ></Cards>
          <Cards
            src={projectTwo}
            title="E-COMMERCE WEBSITE"
            context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad.."
          />
          <Cards
            src={projectThree}
            title="CHATTING-APP"
            context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad.."
          />
          <Cards
            src={projectFour}
            title="GRAPHIC DESGIN"
            context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad.."
          />
          <Cards
            src={projectFive}
            title="UX-DESIGN"
            context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad.."
          />
          <Cards
            src={projectSix}
            title="BLOGGING"
            context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad.."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
