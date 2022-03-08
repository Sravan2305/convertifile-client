/* eslint-disable unused-imports/no-unused-vars */

import { Convert } from '@/components/Convert';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';

const Index = () => {
  return (
    <main className="overflow-x-hidden flex-col center-block">
      <Hero />
      <WhyUs />
      <Convert />
    </main>
  );
};

export default Index;
