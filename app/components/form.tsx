"use client";

import { addTask } from "../utils/action";

export default function FormTask() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action={addTask} className="space-y-4 max-w-sm w-full sm:w-96 md:w-80 lg:w-96 border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Créer une tâche</h2>
        <hr className="border-gray-300 mb-4" />

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">Titre</label>
          <input required
            type="text"
            name="title"
            id="title"
            placeholder="Titre de la tâche"
            className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
          <textarea required
            name="description"
            id="description"
            placeholder="Description de la tâche"
            className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="responsable" className="block text-sm font-medium text-gray-600">Responsable</label>
          <input required
            type="text"
            name="responsable"
            id="responsable"
            placeholder="Nom du responsable"
            className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="statut" className="block text-sm font-medium text-gray-600">Statut</label>
          <select required
            name="statut"
            id="statut"
            className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Sélectionner un statut</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
            <option value="En attente">En attente</option>
          </select>
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-600">Date d'échéance</label>
          <input required
            type="date"
            name="dueDate"
            id="dueDate"
            className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex space-x-4 justify-between">
          <button
            type="button"
            className="w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg hover:bg-gray-400 transition"
            onClick={() => window.history.back()} // Retourner à la page précédente
          >
            Retourner
          </button>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}