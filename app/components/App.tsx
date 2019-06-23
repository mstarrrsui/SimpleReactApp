import * as React from "react";

//import Tasks from "./Tasks";
import TasksRenderProp from "./TasksRenderProp";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Tasks</h2>
        <TasksRenderProp />
      </div>
    );
  }
}
