import { NextRequest, NextResponse } from "next/server";

// GET - Exemple d'une requête GET
export async function GET() {
  return NextResponse.json(
    { message: "Voici une requête GET" },
    { status: 200 }
  );
}

// POST - Exemple d'une requête POST pour ajouter des données
export async function POST() {
  return NextResponse.json(
    { message: "Les données sont enregistrées" },
    { status: 200 }
  );
}

// PUT - Exemple d'une requête PUT pour mettre à jour des données
export async function PUT() {
  return NextResponse.json(
    { message: "Voici une requête PUT" },
    { status: 200 }
  );
}

// DELETE - Exemple d'une requête DELETE pour supprimer des données
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  // Ajoutez ici votre logique pour supprimer la tâche par ID
  return NextResponse.json({ message: "Tâche supprimée" }, { status: 200 });
}
