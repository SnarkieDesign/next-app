import Head from "next/head";
import Link from "next/link";
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
        <h1>Hello</h1>
        <h2>This is the about page</h2>
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </Block>

      <Footer />
    </>
  );
};

export default Home;
