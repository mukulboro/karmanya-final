import Link from "next/link";
import styles from "./navBar.module.css";
import Button from "@material-ui/core/Button";
const MobileNav = ({ isClicked, onClick }) => {
  return (
    <ul className={styles.mobilenav} onClick={onClick}>
      <li>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </li>

      <li>
        <Link href="/mission">
          <a>Our Mission</a>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Button variant="outlined" color="black" size="medium">
          Donate us
        </Button>
      </li>
    </ul>
  );
};

export default MobileNav;
