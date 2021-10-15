import Link from "next/link";
import Page from "../components/page";
import Block from "../components/block";

const About = () => {
  return (
    <Page>
      <Block>
        <h1>Hello</h1>
        <h2>This is the about page</h2>
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </Block>
    </Page>
  );
};

export default About;
