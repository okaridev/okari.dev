import { Layout } from '../components/Layout';

import { Main } from '../components/Main';
import { Seo } from '../components/Seo';
import { Nav } from '../components/Nav';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="A collection of open source tools designed for developers - Okari"
        description="A collection of open source tools designed for developers"
      />
      <Layout>
        <Nav />
        <Main />
      </Layout>
    </>
  );
};

export default Home;
