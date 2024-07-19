import { CDN } from '@/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';

function SliderCard(props: any) {
  const [hover, setHover] = useState(false);
  const {
    title,
    showing,
    delay,
    icon,
    desc,
    size = 'h-[420px] w-[402px] -mt-[3.125vw] h-[11.4583vw] min-h-[220px] w-[15vw] min-w-[288px] 4xl:h-[604px] 4xl:w-[578px]',
    iconSize = '-mt-[3.125vw] h-[11.4583vw] min-h-[220px] w-[15vw] min-w-[288px] sm-screen:-mt-[60px] 4xl:h-[283px] 4xl:w-[403px]',
  } = props;

  return (
    <motion.div
      key={title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={
        showing
          ? {
              y: 0,
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.2,
        delay,
        ease: 'easeOut',
      }}
      initial={{ y: 1000, opacity: 0 }}
      style={{ backgroundImage: `url("${CDN}/imgs/about_us/card2.webp")` }}
      // h-[21.875vw] w-[20.9375vw]
      className={`flex shrink-0 flex-col items-center bg-contain bg-center bg-no-repeat px-[40px] ${size}`}
    >
      <motion.div
        style={{ backgroundImage: `url(${icon})` }}
        className={`bg-cover bg-center bg-no-repeat ${iconSize}`}
        animate={
          hover
            ? {
                scale: 1.2,
              }
            : {}
        }
      ></motion.div>
      <h3 className="mt-[17px] font-harmony text-[20px] font-bold">{title}</h3>
      <p className="mt-[20px] font-harmony text-[14px] font-thin">{desc}</p>
    </motion.div>
  );
}

export default SliderCard;
