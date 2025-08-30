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
        <div className="mt-2">
          <div className="pl-4 border-l">
            {tasks.length === 0 && <div className="text-sm text-gray-500">No tasks</div>}
            {tasks.length > 0 && (
              <ul className="pl-4 space-y-2">
                {tasks.map((t) => (
                  <li key={t.id}>
                    <div className="w-full rounded-md p-3 bg-emerald-500/5 ring-1 ring-emerald-500/20 dark:bg-emerald-400/5 dark:ring-emerald-400/20">
                      <div className="flex items-center justify-between">
                        <span>{t.name}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
