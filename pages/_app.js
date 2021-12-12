import Head from "next/head";

import { MainLayout } from "../layouts/MainLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Learn Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
