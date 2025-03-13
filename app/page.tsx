import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('./montagne.jpg')" }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 p-6">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Bienvenue sur Task Manager</h1>
        <p className="text-xl text-white mb-8 text-center">Gérez vos tâches efficacement et en toute simplicité.</p>
        <div className="flex gap-4">
          <Link
            href="/add-task"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Ajouter une tâche
          </Link>
          <Link
            href="/tasks"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Voir toutes les tâches
          </Link>
        </div>
      </div>
    </div>
  );
}