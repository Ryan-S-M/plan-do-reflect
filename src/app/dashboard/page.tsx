import { getProjects, getTasks } from "@/app/lib/data";
import ProjectsList from "@/app/ui/dashboard/ProjectsList";
export default async function Page() {
    const [projects, tasks] = await Promise.all([getProjects(), getTasks()]);

    const active_projects = projects.filter((p) => !p.completed);
    const completed_projects = projects.filter((p) => p.completed);
    
    return (
        <div>
            <p>Dashboard Page</p>
            <ProjectsList projects={active_projects} tasks={tasks} />
        </div>
    );
}