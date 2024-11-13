import { Suspense } from 'react';
import Dropdown from './Dropdown';
import Logo from './Logo';
import Search from './Search';

const Navbar = () => {
  return (
    <header className="border-b border-gray-400 py-4">
      <nav className="flex items-center justify-between px-4">
        <Logo />
        <Suspense fallback={<></>}>
          <Search />
        </Suspense>
        <Dropdown />
      </nav>
    </header>
  );
};

export default Navbar;
