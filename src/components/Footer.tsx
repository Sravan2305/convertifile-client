import React from 'react';

import { Linkedin } from '@/SVG/Linkedin';

export const Footer = () => {
  return (
    <>
      <footer id="support" className="relative w-full h-48">
        <div className=" top-24 right-8 text-lg font-bold text-blue s:top-6">
          <div className="flex flex-col justify-center items-end">
            <p className="mb-2"> Connect Me:</p>
            <Linkedin
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/sravankumar23',
                  '_blank',
                );
              }}
            />
          </div>
        </div>
        <div className=" top-48 right-8 s:top-20 s:mt-6">
          <div className="flex flex-col justify-center items-end">
            <p className="mb-2 text-lg font-bold text-blue"> Support:</p>
            <p className="text-md">
              {/* Reach out to &nbsp; */}
              <span className="text-sm text-blue underline text-bold">
                <a
                  href="mailto:convertifile@gmail.com"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  convertifile@gmail.com{' '}
                </a>
              </span>{' '}
            </p>
          </div>
        </div>
        <div className="text-xl font-bold text-center text-teal bg-white s:mt-28 xl:-mt-12">
          Please fork this project{' '}
          <a
            href="https://github.com/Sravan2305/convertifile-client"
            target={'_blank'}
            rel="noreferrer"
            className="text-red"
          >
            here
          </a>
          . Give credit to{' '}
          <span className="text-xl font-normal text-red brand_name">
            <a
              href="https://sravankumar.netlify.app/"
              target={'_blank'}
              rel="noreferrer"
            >
              {' '}
              Sravan Kumar{' '}
            </a>
          </span>{' '}
          if you like this project.
        </div>
      </footer>
    </>
  );
};
