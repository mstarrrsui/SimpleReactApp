import * as React from "react";

const DATA_URL = "http://localhost:3130/tasks/5480";

interface Task {
  TaskID: number;
  CurrentStackDescription: string;
  CurrentStepDescription: string;
  InsuredName: string;
}

interface State {
  tasks: Task[];
}

const initialState: State = {
  tasks: []
};
export default class App extends React.Component<object, State> {
  public state: State = initialState;

  public componentDidMount(): void {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(tasks => {
        this.setState({ tasks });
      });
  }

  public render(): React.ReactNode {
    const { tasks } = this.state;

    return (
      <div>
        {tasks.map(task => (
          <div key={task.TaskID}>
            {task.CurrentStackDescription}-{task.CurrentStepDescription} -{" "}
            {task.InsuredName}
          </div>
        ))}
      </div>
    );
  }
}
