import * as React from "react";

//import Tasks from "./Tasks";
import TasksWithHooks from "./TasksWithHooks";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Tasks</h2>
        <TasksWithHooks />
      </div>
    );
  }
}
