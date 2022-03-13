import styles from "./Item.module.scss";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div className={styles.items}>
      <div className={styles.number}>01</div>

      <Link to="/progetti">
        <h1>'Ddocu</h1>
      </Link>
    </div>
  );
};

export default Item;
