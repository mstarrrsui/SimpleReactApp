import * as React from "react";
import Task from "../models/Task";
import TaskRow from "./TaskRow";

const DATA_URL = "http://localhost:3130/tasks/5480";

interface TaskFetcherResult {
  isLoading: boolean;
  error: Error | null;
  tasks: Task[];
}

const useTaskFetcher = (): TaskFetcherResult => {
  const [tasks, setTasks] = React.useState<Array<Task>>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
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
        setTasks(tasks);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, []);
  return { isLoading, error, tasks };
};

const TasksHooks: React.SFC = function() {
  const { tasks, isLoading, error } = useTaskFetcher();

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Please wait... loading......</p>;
  }

  return (
    <div>
      {tasks
        //.filter(t => t.ReadableCompleteDate !== null)
        .map((task, idx) => (
          <TaskRow key={task.TaskID} task={task} index={idx} />
        ))}
    </div>
  );
};

export default TasksHooks;
