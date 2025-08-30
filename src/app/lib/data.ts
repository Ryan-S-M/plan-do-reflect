// insert database operations here
import { Project } from "./definitions";
import { placeholderProjects } from "./placeholder";
import { placeholderTasks } from "./placeholder";
export async function getProjects() {
    try {   
        // const response = await fetch('/api/projects');
        // const data = await response.json();
        // return data;
        const projects: Project[] = placeholderProjects;
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

export async function getProject(id: string) {
    return placeholderProjects.find((project) => project.id === id);
}

export async function getTasks() {
    return placeholderTasks;
}

export async function getTask(id: string) {
    return placeholderTasks.find((task) => task.id === id);
}
