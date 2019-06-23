import * as React from "react";

const DATA_URL = "http://localhost:3130/tasks/5480";

interface Task {
  TaskID: number;
  CurrentStackDescription: string;
  CurrentStepDescription: string;
  InsuredName: string;
}

interface State {
  isLoading: boolean;
  error: Error | null;
  tasks: Task[];
}

const initialState: State = {
  isLoading: false,
  error: null,
  tasks: []
};
export default class App extends React.Component<object, State> {
  public state: State = initialState;

  public componentDidMount(): void {
    this.setState({ isLoading: true, error: null });
    fetch(DATA_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("error...");
          throw Error("Error fetching the data!!!");
        }
      })
      .then(tasks => {
        this.setState({ tasks, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false, error });
      });
  }

  public render(): React.ReactNode {
    const { tasks, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Please wait... loading......</p>;
    }

    return (
      <div>
        {tasks.map(task => (
          <div className="task" key={task.TaskID}>
            {task.CurrentStackDescription}-{task.CurrentStepDescription} -
            {task.InsuredName}
          </div>
        ))}
      </div>
    );
  }
}
