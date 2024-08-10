import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import '@/styles/global.css';

const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";

const pageTitle = "Coming Soon | siNusoid v8";
const pageDescription =
  "siNUsoid is NIIT University's annual tech fest. Stay tuned for the next edition!";
const faviconPath = "/socialLogo.jpg";

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
