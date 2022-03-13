import styles from "./Footer.module.scss";

import { AiOutlineInstagram} from "react-icons/ai";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.icon_list}> 
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
      <div>
        <a href = "mailto: margherita.grasso3@gmail.com">margherita.grasso3@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
