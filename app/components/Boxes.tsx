import * as React from "react";

import * as styles from "./Boxes.css";

const Boxes = () => {
  return (
    <div className={styles.boxcontainer}>
      <div className={`${styles.box} ${styles.box1}`}>1</div>
      <div className={`${styles.box} ${styles.box2}`}>2</div>
      <div className={`${styles.box} ${styles.box3}`}>3</div>
      <div className={`${styles.box} ${styles.box4}`}>4</div>
      <div className={`${styles.box} ${styles.box5}`}>5</div>
    </div>
  );
};

export default Boxes;
