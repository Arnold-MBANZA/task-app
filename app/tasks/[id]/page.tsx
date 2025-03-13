"use client";
import tasks from "@/app/data/tasks.json";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

export default function TaskDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const task = tasks.find((task) => task.id === Number(params.id));

  if (!task) {
    notFound();
  }

  const handleDelete = async () => {
    const response = await fetch(`/api/tasks/${task.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/tasks");
    } else {
      console.error("Erreur lors de la suppression de la tâche");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg border border-gray-200 space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 text-center">{task.title}</h1>
        <p className="text-gray-600 mt-2 text-center">{task.description}</p>

        <div className="mt-4 space-y-2 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">Responsable :</span> {task.responsable}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Statut :</span> {task.statut}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date d'échéance :</span> {task.dueDate}
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href={`/edit-task/${task.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Modifier
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Supprimer
          </button>
          <Link
            href="/tasks"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Annuler
          </Link>
        </div>
      </div>
    </div>
  );
}
