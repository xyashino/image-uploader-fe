import { Outlet } from 'react-router-dom';
import { Footer } from '@components/Footer/Footer.tsx';
import { Wrapper } from '@components/Wrapper/Wrapper.tsx';

export const MainLayout = () => {
  return (
    <Wrapper>
      <div />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
