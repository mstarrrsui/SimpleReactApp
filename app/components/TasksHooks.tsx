import * as React from "react";

const DATA_URL = "http://localhost:3130/tasks/5480";

interface Task {
  TaskID: number;
  CurrentStackDescription: string;
  CurrentStepDescription: string;
  InsuredName: string;
}

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
      {tasks.map(task => (
        <div className="task" key={task.TaskID}>
          {task.CurrentStackDescription}-{task.CurrentStepDescription} -
          {task.InsuredName}
        </div>
      ))}
    </div>
  );
};

export default TasksHooks;
