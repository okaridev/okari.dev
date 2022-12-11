import { FiExternalLink } from "react-icons/fi";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-screen px-10 bg-black justify-center">
      <Head>
        <title>Okari</title>
        <meta
          name="description"
          content="A collection of open source tools designed for developers."
        />
        <meta name="twitter:title" content="Okari" />
        <meta
          name="twitter:description"
          content="A collection of open source tools designed for developers."
        />
        <meta
          property="og:title"
          content="A collection of open source tools designed for developers."
        />
        <meta property="og:url" content="https://okari.dev/" />
        <meta property="og:site_name" content="Okari" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A collection of open source tools designed for developers."
        />
      </Head>
      <h1 className="font-bold text-5xl mb-6 text-center max-w-2xl tracking-tighter text-white">
        A collection of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          open source
        </span>{" "}
        tools designed for developers.
      </h1>
      <Link
        href="https://github.com/okaridev"
        target="_blank"
        title="Explore on GitHub"
      >
        <button
          className="flex font-black items-center justify-center h-12 px-6
        text-white rounded bg-gradient-to-r from-purple-400 to-pink-600
          outline-none duration-300 hover:opacity-80"
        >
          Explore on GitHub <FiExternalLink className="ml-2 text-xl" />
        </button>
      </Link>
    </div>
  );
};

export default Home;
