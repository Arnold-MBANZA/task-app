import { Calendar, ClipboardCheck, Info, User } from "lucide-react";
import Link from "next/link";
import { Task } from "../types/task";

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  const getStatusStyles = (statut: Task["statut"]): string => {
    if (statut === "En cours") return "text-yellow-500 bg-yellow-100";
    if (statut === "Terminé") return "text-green-500 bg-green-100";
    if (statut === "En attente") return "text-red-500 bg-red-100";
    return "text-gray-500 bg-gray-100";
  };

  return (
    <Link
      href={`/tasks/${task.id}`}
      className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">{task.title}</h2>
      <div className="flex items-center mb-5">
        <div className="p-2 bg-gray-100 rounded-full mr-3">
          <Info className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-gray-600 line-clamp-3 text-sm">{task.description}</p>
      </div>
      <div className="flex flex-wrap gap-6 items-center mb-4">
        <p className="flex items-center text-gray-700 text-sm">
          <User className="w-4 h-4 mr-2" /> {task.responsable}
        </p>
        <p
          className={`p-2 rounded text-sm font-medium ${getStatusStyles(task.statut)} flex items-center`}
        >
          <ClipboardCheck className="w-4 h-4 mr-2" /> {task.statut}
        </p>
      </div>
      <p className="text-gray-500 text-sm flex items-center">
        <Calendar className="w-4 h-4 mr-2" /> {task.dueDate}
      </p>
    </Link>
  );
}