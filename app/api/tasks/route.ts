import tasks from "@/app/data/tasks.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(tasks, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  tasks.push(body);
  return NextResponse.json(tasks, { status: 200 });
}