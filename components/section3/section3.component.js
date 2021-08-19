import Image from "next/image";
import Link from "next/link";
import styles from "./section3.module.css";
import { useState } from "react";

const Section3 = () => {

  const shortText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex..."
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  const [readMore, setReadMore] = useState(false);

  return (
    <div className={styles.section3}>
      <div>
        <Image
          className={styles.picture}
          src="/director.png"
          width={150}
          height={150}
        />
      </div>
      <div>
        <h1>Message from the Director</h1>
        <h2>Mr. Samrat Pal</h2>
      </div>
      <div className={styles.body}>
        <p>
          {readMore ? longText : shortText}
          <br/>
          <button onClick={()=> setReadMore(!readMore)}>Read {readMore? "less" : "more"}</button>
        </p>
      </div>
    </div>
  );
};

export default Section3;
