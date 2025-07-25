import { CDN } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';

function ReadMore(props: any) {
  const { className, href } = props;
  const [hover, sethover] = useState(false);
  return (
    <Link
      href={href}
      style={{}}
      className={`flex h-[54px] w-[154px] items-center bg-[url("/imgs/btnarr.webp")] bg-cover bg-center bg-no-repeat hover:bg-[url("/imgs/btnarr_active.webp")] ${className} hover-button hover:text-white`}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      <span
        className={`-mt-2 ml-[10px] font-harmony text-[16px] font-thin ${hover ? 'text-white' : 'text-[#383b43]'}`}
      >
        read more
      </span>
    </Link>
  );
}

export default ReadMore;
