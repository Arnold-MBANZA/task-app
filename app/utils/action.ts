"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import tasks from "../data/tasks.json";
import { Task } from "../types/task";

export const addTask = async (data: FormData) => {
  const newTask: Task = {
    id: Date.now(),
    title: data.get("title") as string,
    description: data.get("description") as string,
    responsable: data.get("responsable") as string,
    statut: data.get("statut") as string,
    dueDate: data.get("dueDate") as string,
  };
  tasks.push(newTask);
  revalidatePath("/tasks");
  redirect("/tasks");
}