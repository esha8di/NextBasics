'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? 'text-red-900 font-bold' : 'text-gray-700'}
    >
      {children}
    </Link>
  );
};

export default NavLink;
