import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
const sliderImage1 = "/sliderImage1.jpg";
const sliderImage2 = "/sliderImage2.JPG";
const sliderImage3 = "/sliderImage3.jpg";
import { useState } from "react";
import styles from "../styles/about.module.css";
export const AboutUs = () => {
  return (
    <>
      <h1 className={styles.h1}>About Us</h1>
      <HeadSlider />

      <section className={styles.content}>
        <h2>Who are we?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur saepe possimus! Aperiam rem voluptatem nulla excepturi esse molestiae tenetur quam est ullam. Debitis dolor magni illum esse magnam, deleniti repellat veritatis provident amet? Fuga, cum repellendus adipisci nemo cupiditate provident laudantium similique veniam, in quia tenetur repellat ipsam expedita.</p>

        <h2>What do we do?</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis optio cupiditate iusto aliquid aliquam totam. Porro illo nam explicabo eligendi laudantium necessitatibus et, amet officiis assumenda inventore voluptas, ad cupiditate pariatur, aliquam quis autem nobis sint deserunt. In atque reiciendis minus voluptatibus ducimus, voluptatum natus pariatur corrupti eos fugit nostrum, exercitationem, minima veniam qui ea? Minus nobis, perspiciatis delectus laboriosam, assumenda ab molestiae, totam accusamus odio facere quidem repellendus cumque?  </p>
    </section>

    </>
  );
};

const HeadSlider = () => {
  const headerContent1 = {
    title: "This is Karmanya",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate culpa voluptates facilis dolore sequi? Mollitia, eos quibusdam? Aliquam, iste a!",
    image: sliderImage1,
  };

  const headerContent2 = {
    title: "This is Another Slide",
    subtitle:
      "The header illustration slider is a good example of hero headers. With the illustrations you can grab the visitors’ attention, and with the CTAs you can.",
    image: sliderImage2,
  };

  const headerContent3 = {
    title: "This is The Final Slide",
    subtitle:
      "I'm leaving this comment in here so after a month or a year when someone likes it I get reminded of this song",
    image: sliderImage3,
  };

  const sliderContent = [headerContent1, headerContent2, headerContent3];

  const [sliderContentNumber, setSliderContentNumber] = useState(0);
  useEffect(function componentDidMount() {
    sliderContent.forEach((image) => {
      new Image().src = image;
    });
  }, []);
  const clickHandleLeft = () => {
    if (sliderContentNumber !== 0) {
      setSliderContentNumber(sliderContentNumber - 1);
    } else {
      setSliderContentNumber(sliderContent.length - 1);
    }
  };

  const clickHandleRight = () => {
    if (sliderContentNumber < sliderContent.length - 1) {
      setSliderContentNumber(sliderContentNumber + 1);
    } else {
      setSliderContentNumber(0);
    }
  };

  return (
    <section
      id={styles.headSlider}
      style={{
        backgroundImage: `url(${sliderContent[sliderContentNumber].image})`,
      }}
    >
      <main className={styles.headerContent}>
        <div
          className={`${styles.iconLeft} ${styles.icon}`}
          onClick={clickHandleLeft}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </div>

        <div className={styles.textMiddle}>
          <h2>{sliderContent[sliderContentNumber].title}</h2>
          <p>{sliderContent[sliderContentNumber].subtitle}</p>
        </div>

        <div
          className={`${styles.iconRight} ${styles.icon}`}
          onClick={clickHandleRight}
        >
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </div>
      </main>
    </section>
  );
};

export default AboutUs;
