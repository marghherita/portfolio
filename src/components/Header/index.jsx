import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <h1>MARGHHERITA</h1>
        </div>
      </Link>
      <Link to="/progetti">
        <div className={styles.link_containers}>
          <p>All works +</p>
        </div>
      </Link>
      <button className={styles.h_menu}>
        <IoIosMenu />
      </button>
    </header>
  );
};

export default Header;
