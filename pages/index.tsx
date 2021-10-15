import Link from "next/link";
import Page from "../components/page";
import Block from "../components/block";

const Home = () => {
  return (
    <Page>
      <Block>
        <h1>Hello</h1>
        <h2>This is the home page</h2>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Block>
    </Page>
  );
};

export default Home;
