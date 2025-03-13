import Link from "next/link";
import TaskList from "../components/task-list";

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Toutes les tâches</h1>
          <Link href="/" className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Retour à l'accueil
          </Link>
        </div>
        <p className="text-gray-600 mb-4">Voici la liste de toutes vos tâches à gérer.</p>
        <hr className="border-gray-300 mb-4" />
        <TaskList />
      </div>
    </div>
  );
}