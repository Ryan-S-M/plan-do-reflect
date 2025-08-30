"use client";

import { useState } from "react";
import type { Project, Task } from "@/app/lib/definitions";

export default function ProjectRow({ project, tasks }: { project: Project; tasks: Task[] }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((v) => !v);
  }

  return (
    <div className="py-3">
      <button className="w-full text-left flex items-center justify-between" onClick={toggle}>
        <span className="font-medium">{project.name}</span>
        <span className="text-sm text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-2 pl-4 border-l">
          {tasks.length === 0 && <div className="text-sm text-gray-500">No tasks</div>}
          {tasks.length > 0 && (
            <ul className="list-disc pl-4 space-y-1">
              {tasks.map((t) => (
                <li key={t.id}>{t.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
