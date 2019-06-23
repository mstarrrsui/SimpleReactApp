import * as React from "react";
import TaskFetcher from "./TaskFetcher";

const DATA_URL = "http://localhost:3130/tasks/5480";

export default class TasksRenderProp extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <TaskFetcher url={DATA_URL}>
          {({ tasks, isLoading, error }) => {
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
                    {task.CurrentStackDescription}-{task.CurrentStepDescription}{" "}
                    -{task.InsuredName}
                  </div>
                ))}
              </div>
            );
          }}
        </TaskFetcher>
      </div>
    );
  }
}
