import Block from "../block";
import styles from "./footer.module.scss";
import Image from "next/image";
import vercel from "../../public/vercel.svg";

const Footer: React.VFC = () => {
  return (
    <Block className={styles.block} size="small" as="footer">
      <div className={styles.layout}>
        <p>&copy; Luke Underwood</p>
        <div className={styles.logo}>
          <Image src={vercel} alt="Vercel logo" layout="responsive" />
        </div>
      </div>
    </Block>
  );
};

export default Footer;
