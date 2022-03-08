import React from 'react';

import Image from 'next/image';

import { Delete } from '@/SVG/Delete';
import { FIleConversion } from '@/SVG/FIleConversion';
import { Friendly } from '@/SVG/Friendly';
import { NewFeatures } from '@/SVG/NewFeatures';
import { Quality } from '@/SVG/quality';
import { Request } from '@/SVG/Request';

export function FeatureCard({
  logo,
  Comp,
  title,
  desc,
  isComp,
  bgColor,
}: {
  logo: string;
  Comp: React.ElementType;
  title: string;
  desc: string;
  isComp?: boolean;
  bgColor: string;
}) {
  return (
    <div
      className="flex flex-col justify-start items-start p-8 rounded-xl s:w-full xl:mt-12 xl:w-96"
      id="why-us"
      style={{ background: bgColor }}
    >
      {isComp ? (
        <div className="w-24">
          {' '}
          <Comp />{' '}
        </div>
      ) : (
        <div>
          <Image src={logo} alt={title} height={72} width={150} />
        </div>
      )}
      <h4
        className="mt-3 text-2xl font-bold"
        style={{ color: 'rgba(0,0,0,.7)' }}
      >
        {title}
      </h4>
      <p className="mt-2 text-lg" style={{ color: 'rgba(0,0,0,.6)' }}>
        {desc}
      </p>
    </div>
  );
}

export const WhyUs = () => {
  return (
    <div className="flex-col py-20 w-full text-3xl font-bold center-block">
      <h1 className="text-5xl font-bold text-center s:px-6 s:mb-16 s:text-3xl">
        Why should you use Convertifile ?
      </h1>
      <section className="flex flex-wrap justify-evenly w-full whyus">
        {[
          {
            logo: '',
            Comp: FIleConversion,
            title: 'Completely Free',
            desc: 'We don’t charge you any fees for using our service or rate limit our users.',
            bgColor: '#ecfef5',
            isComp: true,
          },
          {
            logo: '',
            Comp: Quality,
            title: 'Best Quality',
            desc: 'We follow the best practices to ensure the best quality of our service.',
            bgColor: '#feecf2',
            isComp: true,
          },
          {
            logo: '',
            Comp: NewFeatures,
            title: 'Latest Features',
            desc: 'More features will be rolled out every month, so stay tuned.',
            bgColor: '#f6ecfe',
            isComp: true,
          },
          {
            logo: '',
            Comp: Request,
            title: 'Request a Feature',
            desc: 'You can request a new feature by simply dropping us a line.',
            bgColor: '#f6ecfe',
            isComp: true,
          },
          {
            logo: '',
            Comp: Friendly,
            title: 'User Friendly',
            desc: 'We dont bother user with mobile or email sign in.',
            bgColor: '#f0f1fb',
            isComp: true,
          },
          {
            logo: '',
            Comp: Delete,
            title: '100% Secure',
            desc: 'We convert the files on the go and never store any of your data. All the files are permanently deleted.',
            bgColor: '#DAF7A6',
            isComp: true,
          },
        ].map(FeatureCard)}
      </section>
    </div>
  );
};
