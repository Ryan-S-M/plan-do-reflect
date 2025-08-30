import { Project, Task } from "@/app/lib/definitions";
import ProjectRow from "@/app/ui/dashboard/ProjectRow";

export default function ProjectsList({
  projects,
  tasks,
}: {
  projects: Project[];
  tasks: Task[];
}) {
  return (
    <ul className="divide-y border-b">
      {projects.map((p) => {
        const projectTasks = tasks.filter((t) => t.project_id === p.id);
        return (
          <li key={p.id} className="py-2">
            <div className="rounded-md p-3 bg-slate-500/5 ring-1 ring-slate-300/40 dark:bg-slate-400/5 dark:ring-slate-700/50">
              <ProjectRow project={p} tasks={projectTasks} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
