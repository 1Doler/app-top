import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/global.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
