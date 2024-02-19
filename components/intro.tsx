'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import profilePic from '@/public/anil.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDown, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import useSectionInView from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-margin-top: 7rem scroll-mt-28 "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="My Photo"
              quality="95"
              width={192}
              height={192}
              priority={true}
              className="h-25 w-25 rounded-full border-[0.35rem] border-white shadow-x1"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 left-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'swing',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            💻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, My name is
        <span className="font-bold"> Anil.</span> I'm a{' '}
        <span className="font-bold"> web developer</span> with{' '}
        <span className="font-bold">1+ years</span> of experience. I'm
        passionate about learning
        <span className="italic"> new things</span>. My focus is{' '}
        <span className="underline font-bold">
          JavaScript, TypeScript, React(Next.js)
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{' '}
          <BsArrowDown className="opacity-90 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/90"
          href="/CV.pdf"
          download
        >
          Download Resume{' '}
          <HiDownload className="opacity-60 group-hover:translate-x-2 transition  " />{' '}
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.25] hover:scale-125  hover:text-gray-950  active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/90"
          href="https://linkedin.com/in/anil-acar-cz"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.1rem] focus:scale-110 hover:scale-[1.25] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/90 "
          href="https://github.com/Acarjs"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
