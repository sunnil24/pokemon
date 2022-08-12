import Head from "next/head";
import Header from "../src/components/Header";
import "../styles/globals.css";
import ErrorBoundary from "../src/components/ErrorBoundry";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ErrorBoundary>
        <Header />
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
