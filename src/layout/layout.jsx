import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import BottomNav from './bottomNav';

const Layout = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <BottomNav></BottomNav>
      <Outlet />
    </div>
  );
};

export default Layout;
