import * as React from "react";
import TaskRow from "./TaskRow";
import TaskLoader from "./TaskLoader";

interface Props {
  stack: string;
}

export default class TaskListWithRenderProp extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <TaskLoader stack={this.props.stack}>
        {({ tasks, isLoading, error }) => {
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
        }}
      </TaskLoader>
    );
  }
}
