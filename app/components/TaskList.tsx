import * as React from "react";
import Task from "../models/Task";
import TaskRow from "./TaskRow";

const DATA_URL = "http://localhost:3130/tasks/5480";

interface Props {
  stack: string;
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
export default class TaskList extends React.Component<Props, State> {
  public state: State = initialState;

  private loadTasks(stack: string): void {
    this.setState({ isLoading: true, error: null });
    fetch(DATA_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((taskdata: Array<Task>) => {
        this.setState({ isLoading: false });
        if (stack !== "All Stacks") {
          const filtered = taskdata.filter(
            t => t.CurrentStackDescription === stack
          );
          this.setState({ tasks: filtered });
        } else {
          this.setState({ tasks: taskdata });
        }
      })
      .catch((e: Error) => {
        this.setState({ isLoading: false });
        this.setState({ error: e });
      });
  }
  public componentDidMount(): void {
    this.loadTasks(this.props.stack);
  }

  public componentDidUpdate(prevProps: Props): void {
    if (prevProps.stack !== this.props.stack) {
      this.loadTasks(this.props.stack);
    }
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
        {tasks.map((task, idx) => (
          <TaskRow key={task.TaskID} index={idx} task={task} />
        ))}
      </div>
    );
  }
}
