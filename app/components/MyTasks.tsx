import * as React from "react";
import StackSelector from "./StackSelector";
//import TaskList from "./TaskList";
//import TaskListWithRenderProps from "./TaskListWithRenderProps";
import TasksWithHooks from "./TasksWithHooks";

interface State {
  stack: string;
}

const initialState: State = {
  stack: "Renewals"
};

export default class MyTasks extends React.Component<{}, State> {
  public state: State = initialState;

  constructor(props: {}) {
    super(props);
    this.handleStackSelect = this.handleStackSelect.bind(this);
  }

  public handleStackSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
    const { target } = event;
    this.setState(() => ({ stack: target.value }));
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h2>My Tasks</h2>
        <StackSelector
          stack={this.state.stack}
          onStackChange={this.handleStackSelect}
        />
        <TasksWithHooks stack={this.state.stack} />
      </div>
    );
  }
}
