import * as React from "react";

import Task from "../models/Task";

interface Props {
  task: Task;
}

const TaskRow: React.SFC<Props> = function({ task }) {
  return (
    <div className="task" key={task.TaskID}>
      <span className="stackstep">
        [{task.CurrentStackDescription}-{task.CurrentStepDescription}]
      </span>
      - <span className="producerLocation">{task.ProducerLocation}</span>-{" "}
      {task.InsuredName}
    </div>
  );
};

export default TaskRow;
