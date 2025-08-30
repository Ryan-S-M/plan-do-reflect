import { getProjects } from "@/app/lib/data";
export default async function Page() {
    const projects = await getProjects();
    return (
        <div>
            <p>Dashboard Page</p>
            {projects.map((project) => (
                <div key={project.id}>
                    <p>{project.name}</p>
                </div>
            ))}
        </div>
    );
}