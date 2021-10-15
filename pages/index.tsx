import Head from "next/head";
import Header from "../components/header";
import Block from "../components/block";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Luke&apos;s Next App</title>
      </Head>

      <Header />

      <Block>
        <h2>This is the home page</h2>
      </Block>

      <Footer />
    </>
  );
};

export default Home;
