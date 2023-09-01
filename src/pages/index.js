import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';
import image from '../../public/nav.jpg';
import Features from '@/components/app/Features';
import Projects from '@/components/app/projects/Projects';
import Resume from '@/components/app/Resume';

export default function Home() {
  const [text] = useTypewriter({
    words: [
      'Professional Programmer . . .',
      'Full Stack Developer . . .',
      'UI Designer . . .',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div className=" bg-primary">
        <div className="flex gap-8 my-container">
          <div className=" pt-40  px-20 w-[50%] ">
            <div className="text-gray-400 text-xl">WELCOME TO MY WORLD</div>
            <h1 className="text-5xl text-white font-bold pt-2">
              Hi, I&apos;m
              <span className="text-designColor"> Pushpendra </span>
            </h1>
            <h2 className="text-3xl font-bold text-white pt-2">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
            <p className="text-white pt-5 ">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I&apos;m
              not adding motion just to spruce things up, but doing it in ways
              that.
            </p>
            <div>
              <div>
                <div className="flex flex-col xl:flex-row lgl:gap-0  text-gray-400 justify-between mt-20 pb-[40%]">
                  <div>
                    <h2 className=" uppercase font-titleFont mb-4 justify-between">
                      Find me in
                    </h2>
                    <div className="flex gap-2">
                      <span className=" w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <FaFacebookF />
                      </span>
                      <span className=" w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <FaTwitter />
                      </span>
                      <span className=" w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <FaLinkedinIn />
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className=" uppercase font-titleFont mb-4">
                      BEST SKILL ON
                    </h2>
                    <div className="flex gap-2">
                      <span className=" w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <FaReact />
                      </span>
                      <span className=" w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <SiNextdotjs />
                      </span>
                      <span className=" w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <SiTailwindcss />
                      </span>
                      <span className=" w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <SiFigma />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] lgl:w-1/2 flex justify-center items-center  relative">
            <Image
              src={image}
              alt="background"
              className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[550px] z-10 absolute bottom-25  "
            />
            <div className="absolute  bottom-22 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
}
