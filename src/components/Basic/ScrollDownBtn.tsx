// components/ScrollDownButton.tsx
'use client'; // This directive indicates that the component is a client-side component

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { RefObject, useEffect, useState } from 'react';

const ScrollDownButton = (props: {
  className: string;
  nextPage: Function;
  nextEleRef: RefObject<HTMLDivElement>;
}) => {
  const { className, nextPage, nextEleRef } = props;

  const handleScroll = () => {
    if (nextEleRef?.current) {
      nextEleRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    nextPage();
  };

  return (
    <motion.div
      onClick={handleScroll}
      className={`${className} tinyShake10`}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 4.6,
        ease: 'easeOut',
      }}
      initial={{ y: -50, opacity: 0 }}
    >
      <Image
        src="/imgs/icon_guidearrow.webp"
        alt={''}
        width={44}
        height={70}
        // style={{ width: '3.0556vw', height: '3.0556vw' }}
      />
    </motion.div>
  );
};

export default ScrollDownButton;
