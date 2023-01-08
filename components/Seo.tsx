import Head from 'next/head';

type Props = {
  description: string;
  title: string;
};

export const Seo = ({ description, title }: Props) => {
  return (
    <Head>
      <title>
        A collection of open source tools designed for developers - Okari
      </title>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://okari.dev/" />
      <meta property="og:site_name" content="okari.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
    </Head>
  );
};
