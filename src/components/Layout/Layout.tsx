import { FC, ReactNode } from 'react';
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
