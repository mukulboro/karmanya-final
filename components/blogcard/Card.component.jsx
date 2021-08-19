import styles from "./card.module.css";
import Button from "@material-ui/core/Button";
import Link from "next/dist/client/link";

const BlogCard = ({ title, body, children, className, src, postID }) => {
  let postLink = `/blog/${postID}`
  return (
    <div className={`${styles.customcard} ${className}`}>
      <div className={styles.content}>
        <div className={styles.cardtitle}>
          {children} <span>{title}</span>
        </div>

        {src && (
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${src})`,
            }}
          ></div>
        )}
      </div>
      <Button variant="outlined" color="black">
        {" "}
        <Link href={postLink}><a className={styles.buttonLink}>Goto Post</a></Link>
      </Button>
    </div>
  );
};
export default BlogCard;
