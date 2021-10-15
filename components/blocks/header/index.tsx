import Block from "../block";
import styles from "./header.module.scss";

const Header: React.VFC = () => {
  return (
    <Block className={styles.block} size="small" as="header">
      <p>Header</p>
    </Block>
  );
};

export default Header;
