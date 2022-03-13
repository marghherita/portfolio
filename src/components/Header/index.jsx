import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import Menu from "../Menu";

import { useState } from "react";

import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Link to="/">
        <div onClick={() => setIsOpen(false)} className={styles.logo}>
          {isOpen ? <h1 style={{color: '#fd5602'}}>HH</h1> : <h1>MARGHHERITA</h1>}
        </div>
      </Link>
      <Link to="/progetti">
        <div className={styles.link_containers}>
          {isOpen ? "" : <p>All works <span style={{color: '#fd5602', fontWeight: "700"}}>+</span></p>}
        </div>
      </Link>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" size={25} />
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
