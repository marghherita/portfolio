import styles from "./Menu.module.scss";

import { AiOutlineInstagram} from "react-icons/ai";
import { FiLinkedin, FiGithub } from "react-icons/fi";

import { Link } from "react-router-dom";

const Menu = ({setIsOpen}) => {
  const items = [
    { itemText: "Home", itemLink: "/" },
    { itemText: "Tutti i progetti", itemLink: "/progetti" },
    { itemText: "Manifesto", itemLink: "/progetti" },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.list_item}>
        {items.map((item, index) => (
          <Link to={item.itemLink} key={index} onClick={() => setIsOpen(false)}>
            {item.itemText}
          </Link>
        ))}
      </div>
      <div className={styles.list_contact}>
      <ul> 
        <li>
          <a href="https://www.instagram.com/marghherita/">
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/margheritagrasso/">
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/marghherita">
            <FiGithub />
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Menu;
