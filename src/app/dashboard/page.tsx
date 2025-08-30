import { getProjects, getTasks } from "@/app/lib/data";
import ProjectsList from "@/app/ui/dashboard/ProjectsList";
export default async function Page() {
    const [projects, tasks] = await Promise.all([getProjects(), getTasks()]);
    return (
        <div>
            <p>Dashboard Page</p>
            <ProjectsList projects={projects} tasks={tasks} />
        </div>
    );
}