import * as React from "react";
import Boxes from "./Boxes";

import * as styles from "./App.css";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <h2>Hello, from my simple React App</h2>
        <div className={styles.mainimgcontainer}>
          <div className={styles.mainimg}></div>
        </div>
        <Boxes />
      </div>
    );
  }
}
