import Image from 'next/image';
import React, { ReactNode } from 'react';

interface BackgroundImageProps {
  children?: ReactNode;
  src: string;
  alt?: string;
  className?: string;
  contentClass?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  children,
  src,
  alt,
  className,
  contentClass,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt ?? ''}
        fill
        style={{ objectFit: 'cover' }}
        quality={100} // Adjust the quality as needed
        className="absolute inset-0 z-0"
      />
      <div className={`relative z-10 ${contentClass}`}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
