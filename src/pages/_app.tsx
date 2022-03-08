import { AppProps } from 'next/app';

import { Header } from '@/components/Header';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <section className=" ">
    <Header />
    <Component {...pageProps} />
  </section>
);

export default MyApp;
