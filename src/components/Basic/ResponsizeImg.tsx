import Image from 'next/image';

function ResImg(props: { alt: string; src: string }) {
  const { alt, src } = props;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Image alt={alt} src={src} layout="fill" objectFit="contain" />
    </div>
  );
}

export default ResImg;
