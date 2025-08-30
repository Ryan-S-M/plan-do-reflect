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
    <ul className="divide-y">
      {projects.map((p) => {
        const projectTasks = tasks.filter((t) => t.project_id === p.id);
        return (
          <li key={p.id}>
            <ProjectRow project={p} tasks={projectTasks} />
          </li>
        );
      })}
    </ul>
  );
}
