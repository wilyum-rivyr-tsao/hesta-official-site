import Link from 'next/link';
import DragScroll from '../DragScroll';
import { forwardRef, Ref, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';

// const Index = forwardRef();

function Index(props: any, ref: Ref<HTMLDivElement>) {
  const { page } = props;
  const ref2 = useRef(null);
  const isInView = useInView(ref2);

  return (
    <div>
      <div className="flex h-[100vh] min-h-[700px] w-full flex-col items-center pt-[80px]">
        <motion.h2
          className={`w-full cursor-pointer text-center font-harmony text-[48px] font-bold text-[#383B43]`}
          animate={
            page === 3
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.1,
            ease: 'easeOut',
          }}
          initial={{ y: -30, opacity: 0 }}
        >
          住宅用户创新优势
        </motion.h2>

        <DragScroll showing={page === 3} />

        <div className="flex h-full items-center">
          <motion.div
            animate={
              page === 3
                ? {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.2,
              delay: 0.2,
              ease: 'easeOut',
            }}
            initial={{ y: 300, opacity: 0 }}
          >
            <ReadMoreBtn href="/customer_user" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Index;
