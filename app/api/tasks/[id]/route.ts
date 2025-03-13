import tasks from "@/app/data/tasks.json";
import { NextRequest, NextResponse } from "next/server";

type Task = {
  params: { id: number };
};

export async function GET(req: NextRequest, { params }: Task) {
  const task = tasks.find((task) => task.id === Number(params.id));
  if (!task) {
    return NextResponse.json(
      { message: "Tâche non trouvée" },
      { status: 404 }
    );
  }

  return NextResponse.json(task, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  // Attendre params avant d'accéder à id
  const { id } = await params;

  const taskIndex = tasks.findIndex((task) => task.id === Number(id));
  
  if (taskIndex === -1) {
    return NextResponse.json({ error: 'Tâche non trouvée' }, { status: 404 });
  }

  // Logique pour supprimer la tâche
  tasks.splice(taskIndex, 1); // Exemple de suppression
  return NextResponse.json({ message: 'Tâche supprimée avec succès' }, { status: 200 });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  // Attendre params avant d'accéder à id
  const { id } = await params;

  const body = await req.json();
  const taskIndex = tasks.findIndex((task) => task.id === Number(id));

  if (taskIndex === -1) {
    return NextResponse.json({ error: 'Tâche non trouvée' }, { status: 404 });
  }

  // Logique pour mettre à jour la tâche
  tasks[taskIndex] = { ...tasks[taskIndex], ...body }; // Exemple de mise à jour
  return NextResponse.json({ message: 'Tâche mise à jour avec succès' }, { status: 200 });
}