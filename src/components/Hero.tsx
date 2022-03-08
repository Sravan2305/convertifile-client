import React from 'react';

import { Tooltip } from 'antd';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
    <div className="flex-col py-20 mt-20 w-full text-3xl font-bold text-white s:px-4 center-block cta">
      <p className="text-center">
        Filling an application that accepts document in a particular format only
        ?
      </p>
      <p className="mt-9 text-center">
        Worry no more. Convert files
        <Tooltip
          title="Yes! Absolutely free and complete privacy protection."
          color={'blue'}
          className=""
        >
          <span className="ml-2 text-4xl font-normal text-blue hover:underline hover:underline-offset-2">
            <Typewriter
              words={[
                'for Free!',
                'with complete privacy.',
                'as good as you are in incognito!',
              ]}
              loop={false}
            />
          </span>
        </Tooltip>
      </p>
      <Link href="#convert" passHref>
        <button className="py-[20px] px-8 mt-16 text-lg font-bold text-white hover:text-teal bg-blue hover:bg-white rounded-xl button-scale">
          Start converting
        </button>
      </Link>
    </div>
  );
};
