import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    { message: "Voici une requête GET" },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json(
    { message: "Les données sont enregistrées" },
    { status: 200 }
  );
}

export async function PUT(req: NextRequest) {
  return NextResponse.json(
    { message: "Voici une requête PUT" },
    { status: 200 }
  );
}