import { getProjects, getTasks } from "@/app/lib/data";
import ProjectSection from "@/app/ui/dashboard/ProjectSection";
export default async function Page() {
    const [projects, tasks] = await Promise.all([getProjects(), getTasks()]);

    const active_projects = projects.filter((p) => !p.completed);
    const completed_projects = projects.filter((p) => p.completed);
    
    return (
        <div>
            <div className="mb-[32px]">
                <ProjectSection heading="Active Projects" projects={active_projects} tasks={tasks} />
            </div>

            <div className="mb-[32px]">
                <ProjectSection heading="Completed Projects" projects={completed_projects} tasks={tasks} />
            </div>
        </div>
    );
}