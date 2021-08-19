import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import styles from "./header.module.css";
import { useState } from "react";
const headerImage1 = "/headerImage1.jpg";
const headerImage2 = "/headerImage2.jpg";
const headerImage3 = "/headerImage3.jpg";
const nepalMap = "/nepalMap.png";
function Header() {
  const imageList = [headerImage1, headerImage2, headerImage3];
  const [headerImage, setHeaderImage] = useState(headerImage1);
  useEffect(function componentDidMount() {
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const slideshow = () => {
    if (headerImage === headerImage1) {
      setHeaderImage(headerImage2);
    } else if (headerImage === headerImage2) {
      setHeaderImage(headerImage3);
    } else {
      setHeaderImage(headerImage1);
    }
  };

  setTimeout(slideshow, 4000);

  return (
    <>
      <div className={styles.fullHeader}>
        <div className={styles.header}>
          <div className={styles.textHolder}>
            <h1>A world where no child's life is torn apart by war.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates incidunt, mollitia beatae eaque temporibus veritatis
              consequatur. Corrupti autem est perspiciatis.
            </p>
            <button id={styles.donateNow} onClick={() => alert("Siddu Cutie")}>
              Donate Now
            </button>
          </div>
          <img
            src={nepalMap}
            alt="nepal-map-overlay"
            id={styles.mapOverlay}
            style={{ backgroundImage: `url("${headerImage}")` }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
