import React from 'react';

import { Avatar } from 'antd';

export const Footer = () => {
  return (
    <footer className="py-10 px-20 w-full bg-[#010101] ">
      <div className="flex justify-between items-center s:flex-col">
        <div className="flex items-center s:flex-col">
          <p className="text-2xl text-white s:text-base">
            Meet the developers :{' '}
          </p>
          <div className="s:mt-2">
            <a
              target={'_blank'}
              href="https://www.linkedin.com/in/sravankumar23"
              rel="noreferrer"
            >
              <Avatar
                src="/assets/images/sravan.png"
                size={48}
                className=" mx-2 hover:opacity-50 cursor-pointer "
              />
            </a>
            <a
              target={'_blank'}
              href="https://www.linkedin.com/in/bhargav-raju-471401164/"
              rel="noreferrer"
            >
              <Avatar
                src="/assets/images/bhargav.jpg"
                size={48}
                className=" mx-2 hover:opacity-50 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col s:mt-10 ">
          <p className=" text-white s:text-xs">
            More cool features are coming in. Stay tuned.
          </p>
          <p className=" text-white s:text-xs">Keep using Convertifile.</p>
        </div>
      </div>
    </footer>
  );
};

// <footer id="support" className="relative w-full h-48">
// <div className=" top-24 right-8 text-lg font-bold text-blue s:top-6">
//   <div className="flex flex-col justify-center items-end">
//     <p className="mb-2"> Connect Me:</p>
//     <Linkedin
//       onClick={() => {
//         window.open(
//           'https://www.linkedin.com/in/sravankumar23',
//           '_blank',
//         );
//       }}
//     />
//   </div>
// </div>
// <div className=" top-48 right-8 s:top-20 s:mt-6">
//   <div className="flex flex-col justify-center items-end">
//     <p className="mb-2 text-lg font-bold text-blue"> Support:</p>
//     <p className="text-md">
//       {/* Reach out to &nbsp; */}
//       <span className="text-sm text-blue underline text-bold">
//         <a
//           href="mailto:convertifile@gmail.com"
//           target={'_blank'}
//           rel="noreferrer"
//         >
//           convertifile@gmail.com{' '}
//         </a>
//       </span>{' '}
//     </p>
//   </div>
// </div>
// <div className="text-xl font-bold text-center text-teal bg-white s:mt-28 xl:-mt-12">
//   Please fork this project{' '}
//   <a
//     href="https://github.com/Sravan2305/convertifile-client"
//     target={'_blank'}
//     rel="noreferrer"
//     className="text-red"
//   >
//     here
//   </a>
//   . Give credit to{' '}
//   <span className="text-xl font-normal text-red brand_name">
//     <a
//       href="https://sravankumar.netlify.app/"
//       target={'_blank'}
//       rel="noreferrer"
//     >
//       {' '}
//       Sravan Kumar{' '}
//     </a>
//   </span>{' '}
//   if you like this project.
// </div>
