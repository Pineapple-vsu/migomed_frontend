import styles from "./video.module.css";
import { Link } from "react-router";
import React from "react";
import ReactPlayer from "react-player";

export const Video = ({
  title,
  videolink,
  firstparagraph,
  secondparagraph,
  thirdparagraph,
}) => {
  return (
    <div className={styles.content}>
      <h2>{title}</h2>
      <div className={styles.main}>
        <ReactPlayer
          className={styles.vid}
          url={videolink}
          controls
          width="420px"
          height="740px"
        />
        <div className={styles.text}>
          <p className={styles.paragraph}>{firstparagraph}</p>
          <p className={styles.paragraph}>{secondparagraph}</p>
          <p className={styles.paragraph}>{thirdparagraph}</p>
        </div>
      </div>
    </div>
  );
};
export default Video;
