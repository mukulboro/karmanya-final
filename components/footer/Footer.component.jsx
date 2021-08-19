import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &#169; Copyright all rights reserved{" "}
        <Link href="">
          <a>qleap labs</a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
