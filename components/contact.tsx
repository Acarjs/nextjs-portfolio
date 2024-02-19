'use client';

import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import useSectionInView from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.75);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-3 dark:text-gray-200">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:anil.acar@hotmail.com">
          anil.acar@hotmail.com
        </a>{' '}
        or via this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        ref={formRef}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          formRef.current?.reset();
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent succussfully!');
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack p-4 dark:text-gray-900 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:text-gray-900 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all"
          name="message"
          placeholder="Your message"
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
