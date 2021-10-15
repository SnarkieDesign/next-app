import clsx from "clsx";
import styles from "./block.module.scss";

export interface BlockProps {
  className?: string;
  size?: "medium" | "small";
  as?: keyof JSX.IntrinsicElements;
}

const Block: React.FC<BlockProps> = ({
  children,
  className,
  size = "medium",
  as = "section",
}) => {
  const Element = as;

  return (
    <Element
      className={clsx(styles.block, className, styles[`block--size-${size}`])}
    >
      <div className={styles.container}>{children}</div>
    </Element>
  );
};

export default Block;
