import * as React from "react";

import Tasks from "./Tasks";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Tasks</h2>
        <Tasks />
      </div>
    );
  }
}
