import * as React from "react";

interface Task {
  TaskID: number;
  CurrentStackDescription: string;
  CurrentStepDescription: string;
  InsuredName: string;
}

interface Props {
  url: string;
  children?: (props: ChildrenProps) => React.ReactNode;
}

interface State {
  isLoading: boolean;
  error: Error | null;
  tasks: Task[];
}

interface ChildrenProps extends State {}

const initialState: State = {
  isLoading: false,
  error: null,
  tasks: []
};

export default class TaskFetcher extends React.Component<Props, State> {
  public state: State = initialState;

  public componentDidMount(): void {
    this.setState({ isLoading: true, error: null });
    fetch(this.props.url)
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

    return (
      this.props.children && this.props.children({ tasks, isLoading, error })
    );
  }
}
