'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import useSectionInView from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection('About');
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a web developer, I started working as{' '}
        <span className="font-medium">Frontend Developer</span> on a web
        development project of a big pharma brand, using web development
        technologies daily such as{' '}
        <span className="font-medium">Astro.js, React and TypeScript</span> .
        Before that, I volunteered 1+ years of my time to gain professional
        level experience as a self-taught full-stack web developer.
        Additionally, I attended an intensive coding bootcamp where I spent over
        420 hours focusing on essential web development skills. In addition to
        my web development experience, I also have 2+ years of IT Technical
        Support experience targeted to learn the ability to simplify, manage and
        resolve problems in a professional and timely manner.
      </p>
    </motion.section>
  );
}
