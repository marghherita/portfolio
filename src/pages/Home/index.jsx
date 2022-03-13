import styles from "./Home.module.scss";
import Item from "../../components/Item";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <div className={styles.bg_item}>
      <svg
        className={styles.circle_svg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="MyPath"
          fill="none"
          stroke="none"
          d="
        M 50, 50
        m -16, 0
        a 16,16 0 1,0 32,0
        a 16,16 0 1,0 -32,0
        "
        />

        <text>
          <textPath href="#MyPath" fill="#fd5602">
            SCROLL TO SEE MORE
          </textPath>
        </text>
      </svg>

      <Item />
      <Item />
    </div>
  );
};

export default Home;
