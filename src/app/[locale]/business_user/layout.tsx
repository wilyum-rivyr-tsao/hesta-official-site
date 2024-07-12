import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header className="" />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
