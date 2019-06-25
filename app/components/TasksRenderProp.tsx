import * as React from "react";
import TaskRow from "./TaskRow";
import TaskFetcher from "./TaskFetcher";

const DATA_URL = "http://localhost:3130/tasks/5480";

export default class TasksRenderProp extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <TaskFetcher url={DATA_URL}>
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
      </div>
    );
  }
}
