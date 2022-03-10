/* eslint-disable unused-imports/no-unused-vars */

import { Convert } from '@/components/Convert';
import { Hero } from '@/components/Hero';
import { SupportForm } from '@/components/SupportForm';
import { WhyUs } from '@/components/WhyUs';
import { Wave } from '@/SVG/Wave';

const Index = () => {
  return (
    <main className="overflow-x-hidden flex-col center-block">
      <Hero />
      <WhyUs />
      <Convert />
      <Wave />
      <SupportForm />
    </main>
  );
};

export default Index;
