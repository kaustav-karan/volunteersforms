import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="siNUsoid is NIIT University's annual tech fest. Stay tuned for the next edition!"
          />
          <meta name="title" content="Coming Soon | siNUsoid v8" />
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
