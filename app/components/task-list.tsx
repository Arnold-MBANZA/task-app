import tasks from "@/app/data/tasks.json";
import TaskCard from "./task-card";

export default function TaskList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-5 mt-4">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}