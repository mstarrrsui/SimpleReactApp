import * as React from "react";

import TaskList from "./TaskList";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <TaskList />
      </div>
    );
  }
}
