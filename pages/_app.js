import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import { MainLayout } from "../layouts/MainLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Learn Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainLayout>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
