import Block from "../block";
import styles from "./header.module.css";

const Header: React.VFC = () => {
  return (
    <Block className={styles.block} size="small" as="header">
      <h1>Hello</h1>
    </Block>
  );
};

export default Header;
