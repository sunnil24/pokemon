import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
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
        <script src="/scripts.js" defer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
