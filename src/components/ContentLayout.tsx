import { ReactNode } from 'react';
import Header from './Header';
import Foorter from './Footer';

function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full overflow-hidden">
      <Header></Header>
      {children}
      <Foorter></Foorter>
    </div>
  );
}

export default ContentLayout;
