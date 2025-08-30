// insert database operations here
import { Project } from "./definitions";

export async function getProjects() {
    try {   
        // const response = await fetch('/api/projects');
        // const data = await response.json();
        // return data;
        const projects: Project[] = [];
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

export async function getProject(id: string) {
    return {};
}

export async function getTasks() {
    return [];
}

export async function getTask(id: string) {
    return {};
}
