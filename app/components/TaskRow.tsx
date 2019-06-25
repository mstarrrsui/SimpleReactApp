import * as React from "react";

import Task from "../models/Task";

interface Props {
  task: Task;
  index: number;
}

const TaskRow: React.SFC<Props> = function({ task, index }) {
  return (
    <div className="taskrow">
      {index} -
      <span className="stackstep">
        [{task.CurrentStackDescription}-{task.CurrentStepDescription}]
      </span>
      - <span className="producerLocation">{task.ProducerLocation}</span>-{" "}
      {task.InsuredName}
    </div>
  );
};

export default TaskRow;
