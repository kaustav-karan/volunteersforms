import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Join the Sinusoid Tech Fest as a volunteer! Gain valuable experience, network with tech enthusiasts, and help make this event a success. Sign up now to be part of an unforgettable tech journey!"
          />
          <meta name="title" content="Volunteers Form | siNUsoid v8" />
          {/* Add other meta tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
