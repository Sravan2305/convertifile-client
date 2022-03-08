import React from 'react';

import { Drawer } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import { Hamburger } from './Hamburger';

export const Header = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <>
      <nav className="flex fixed inset-x-0 z-50 justify-between items-center pr-6 bg-white s:h-20 xl:hidden">
        <Link href={'/'} passHref>
          <Image
            onClick={() => window.scroll(0, 0)}
            src="/assets/images/logo.png"
            alt="Convertifile"
            height={50}
            width={200}
          />
        </Link>

        <button
          onClick={() => setShowDrawer(true)}
          className="w-6 h-6 center-block"
        >
          <Hamburger />
        </button>
      </nav>
      {
        <Drawer
          title="Choose a topic"
          placement="right"
          onClose={() => setShowDrawer(false)}
          visible={showDrawer}
          width={'320px'}
        >
          <Link href="#why-us" passHref>
            <p className="mt-3 underline">Why Us?</p>
          </Link>
          <Link href="#support" passHref>
            <p className="mt-4 underline">Support</p>
          </Link>
        </Drawer>
      }
      <nav className="flex fixed inset-x-0 top-0 z-50 justify-between items-center px-16 h-20 bg-white s:hidden nav">
        <ul className="flex text-black">
          <Link href={'/'} passHref>
            <Image
              onClick={() => window.scroll(0, 0)}
              src="/assets/images/logo.png"
              alt="Convertifile"
              height={50}
              width={200}
            />
          </Link>
          <Link href="#convert" passHref>
            <li className="underline">Use Product</li>
          </Link>
        </ul>

        <ul className="flex text-blue">
          <Link href="#why-us" passHref>
            <li className="underline">Why Us?</li>
          </Link>
          <Link href="#support" passHref>
            <li className="underline">Support</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
