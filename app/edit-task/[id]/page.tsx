"use client";
import tasks from "@/app/data/tasks.json";
import { Task } from "@/app/types/task";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditTask({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const task = tasks.find((task) => task.id === Number(params.id));
    if (task) {
      setTask(task);
    } else {
      router.push('/tasks');
    }
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) return;

    const response = await fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      router.push('/tasks');
    } else {
      console.error('Erreur lors de la mise à jour de la tâche');
    }
  };

  if (!task) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">Modifier la tâche</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Form fields */}
        {/* Replace the following with proper inputs as shown in previous examples */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Titre
          </label>
          <input
            type="text"
            id="title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Other fields... */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enregistrer
          </button>
          <button
            type="button"
            onClick={() => router.push('/tasks')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}