import { NextResponse } from "next/server";
import { placeholderTasks } from "@/app/lib/placeholder";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const tasks = placeholderTasks.filter((t) => t.project_id === params.id);
  return NextResponse.json(tasks);
}
