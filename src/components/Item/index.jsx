import styles from "./Item.module.scss";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div className={styles.items}>
      <div className={styles.number}>01</div>

      <span className={styles.line}></span>

      <Link to="/progetti">
        <h1 className={styles.title}>'Ddocu</h1>
      </Link>
    </div>
  );
};

export default Item;
