import Head from "next/head";
import Header from "../src/components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="theme-color"
          content="#319197"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#872e4e"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="dark light" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
