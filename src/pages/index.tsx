/* eslint-disable unused-imports/no-unused-vars */
import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="" description="" />}>
      <h1>Convertifile</h1>
    </Main>
  );
};

export default Index;
