import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import profile from '../../../public/nav.jpg';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 z-30 bg-primary text-gray-500 h-[100px]">
        <div className="my-container flex justify-between items-center h-full border-b border-b-gray-200">
          <div>
            <Image
              src={profile}
              alt="image"
              className="h-20 w-20 rounded-full "
            />
          </div>
          <div className="flex gap-10 ">
            <Link
              href="/"
              className={`${
                router.pathname == '/' ? 'text-designColor' : 'text-gray-500'
              }`}
            >
              Home
            </Link>
            <Link
              href="/#features"
              className={`${
                router.pathname == '/#features'
                  ? 'text-designColor'
                  : 'text-gray-500'
              }`}
            >
              Features
            </Link>
            <Link
              href="/#project"
              className={`${
                router.pathname == '/projects'
                  ? 'text-designColor'
                  : 'text-gray-500'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className={`${
                router.pathname == '/resume'
                  ? 'text-designColor'
                  : 'text-gray-500'
              }`}
            >
              Resume
            </Link>
            <Link
              href="/testimonial"
              className={`${
                router.pathname == '/testimonial'
                  ? 'text-designColor'
                  : 'text-gray-500'
              }`}
            >
              Testimonial
            </Link>
            <Link
              href="/contact"
              className={`${
                router.pathname == '/contact'
                  ? 'text-designColor'
                  : 'text-gray-500'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
