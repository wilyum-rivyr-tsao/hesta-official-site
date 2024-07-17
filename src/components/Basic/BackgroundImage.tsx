import Image from 'next/image';
import React, { ReactNode } from 'react';

interface BackgroundImageProps {
  children?: ReactNode;
  src: string;
  alt?: string;
  className?: string;
  contentClass?: string;
  quality?: number;
  priority?: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  children,
  src,
  alt,
  className,
  contentClass,
  quality = 100,
  priority = false,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt ?? ''}
        fill
        style={{ objectFit: 'cover' }}
        quality={quality} // Adjust the quality as needed
        className="absolute inset-0 z-0"
        priority={priority}
      />
      <div className={`relative z-10 ${contentClass}`}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
