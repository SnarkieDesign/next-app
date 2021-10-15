import Head from "next/head";
import Header from "../header/index";
import Footer from "../footer/index";

export interface PageProps {
  title?: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title && `${title} | `}Luke&apos;s Next App</title>
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Page;
