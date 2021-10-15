import type { GetStaticProps } from "next";
import Link from "next/link";
import Page from "components/page";
import Block from "components/block";

export interface AboutProps {
  title: string;
}

const About: React.FC<AboutProps> = ({ title }) => {
  return (
    <Page title={title}>
      <Block>
        <h1>This is the {title} page</h1>
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </Block>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "About",
    },
    revalidate: 5,
  };
};

export default About;
