import styles from "./Footer.module.scss";

import { AiOutlineInstagram, AiFillBehanceCircle } from "react-icons/ai";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
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
      <div>
        <p>margherita.grasso3@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
