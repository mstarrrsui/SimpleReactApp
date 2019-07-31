import * as React from "react";
import Task from "../models/Task";
import TaskRow from "./TaskRow";
import { useState, useEffect } from "react";

const DATA_URL = "http://localhost:3130/tasks/5480";

interface TaskFetcherResult {
  isLoading: boolean;
  error: Error | null;
  tasks: Array<Task>;
}

const useTaskFetcher = function(): TaskFetcherResult {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
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

const TasksWithHooks: React.SFC = function() {
  const { tasks, isLoading, error } = useTaskFetcher();

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

export default TasksWithHooks;
