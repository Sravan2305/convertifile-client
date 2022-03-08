import { AppProps } from 'next/app';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <section className=" relative">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </section>
);

export default MyApp;
