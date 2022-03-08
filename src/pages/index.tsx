/* eslint-disable unused-imports/no-unused-vars */
import { useRouter } from 'next/router';

import { Convert } from '@/components/Convert';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';

const Index = () => {
  const router = useRouter();

  return (
    <main className="flex-col center-block">
      <Hero />
      <WhyUs />
      <Convert />
    </main>
  );
};

export default Index;
