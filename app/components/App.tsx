import * as React from "react";
import Boxes from "./Boxes";

import styles from "./App.css";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Hello, from my simple React App</h2>
        <div className={styles.mainimgcontainer}>
          <div className={styles.mainimg} />
        </div>
        <Boxes />
      </div>
    );
  }
}
