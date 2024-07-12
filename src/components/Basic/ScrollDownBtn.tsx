// components/ScrollDownButton.tsx
'use client'; // This directive indicates that the component is a client-side component

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
    <div onClick={handleScroll} className={`${className}`}>
      <Image
        src="/imgs/icon_guidearrow.png"
        alt={''}
        width={44}
        height={70}
        // style={{ width: '3.0556vw', height: '3.0556vw' }}
      />
    </div>
  );
};

export default ScrollDownButton;
