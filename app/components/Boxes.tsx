import * as React from "react";
import styles from "../index.css";

const Boxes: React.SFC = () => {
  return (
    <div className={styles.itemcontainer}>
      <div className={`${styles.box} ${styles.box1}`}>1</div>
      <div className={`${styles.box} ${styles.box2}`}>2</div>
      <div className={`${styles.box} ${styles.box3}`}>3</div>
      <div className={`${styles.box} ${styles.box4}`}>4</div>
      <div className={`${styles.box} ${styles.box5}`}>5</div>
      <div className={`${styles.box} ${styles.box6}`}>6</div>
      <div className={`${styles.box} ${styles.box7}`}>7</div>
      <div className={`${styles.box} ${styles.box8}`}>8</div>
      <div className={`${styles.box} ${styles.box9}`}>9</div>
    </div>
  );
};

export default Boxes;
