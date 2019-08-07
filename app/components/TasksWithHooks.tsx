import * as React from "react";
import Task from "../models/Task";
import TaskRow from "./TaskRow";
import { useState, useEffect } from "react";

const DATA_URL = "http://localhost:3130/tasks/5480";

interface Props {
  stack: string;
}

interface TaskLoaderResult {
  isLoading: boolean;
  error: Error | null;
  tasks: Task[];
}

const useTaskLoader = (stack: string): TaskLoaderResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [tasks, setTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(DATA_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((taskdata: Array<Task>) => {
        setIsLoading(false);
        if (stack !== "All Stacks") {
          const filtered = taskdata.filter(
            t => t.CurrentStackDescription === stack
          );
          setTasks(filtered);
        } else {
          setTasks(taskdata);
        }
      })
      .catch((e: Error) => {
        setIsLoading(false);
        setError(e);
      });
  }, [stack]);

  return { isLoading, error, tasks };
};

const TaskListWithHooks: React.SFC<Props> = ({ stack }) => {
  //calculatePremium(inputVal);

  const { isLoading, error, tasks } = useTaskLoader(stack);

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
};

export default TaskListWithHooks;
