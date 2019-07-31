import * as React from "react";
import TaskRow from "./TaskRow";
import TaskFetcher from "./TaskFetcher";

export default class TasksWithRenderProp extends React.Component {
  public render(): React.ReactNode {
    return (
      <TaskFetcher>
        {function({ tasks, isLoading, error }) {
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
      </TaskFetcher>
    );
  }
}
