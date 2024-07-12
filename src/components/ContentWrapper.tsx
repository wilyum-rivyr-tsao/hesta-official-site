import { MotionValue, useScroll, useTransform, motion } from 'framer-motion';
import { ReactElement, useEffect, useRef } from 'react';

export default function ContentWrapper({
  id,
  scrollYProgress,
  length,
  children,
}: {
  id: number;
  scrollYProgress: any;
  length: number;
  children: ReactElement;
}) {
  const opacity = useTransform(scrollYProgress, [id / length, (id + 1) / length], [1, 0]);
  const y = useTransform(scrollYProgress, [id / length, (id + 1) / length], [0, 100]);

  return (
    <motion.div key={id} className="box" style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}
