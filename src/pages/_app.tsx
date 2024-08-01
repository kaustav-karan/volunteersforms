import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import '@/styles/global.css';

const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";

const pageTitle = "Volunteers Form | siNusoid v8";
const pageDescription = "Become an official volunteer for siNUsoid today!";
const faviconPath = "/sinuLogo.png";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href={faviconPath} />
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
