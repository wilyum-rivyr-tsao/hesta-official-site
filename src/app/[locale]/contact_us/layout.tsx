import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer className="relative z-20 -mt-[100px] bg-[#F9FAFC]" />
    </>
  );
}

export default Layout;
