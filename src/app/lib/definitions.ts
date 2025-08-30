// insert definitions here
export type Project = {
    id: string;
    name: string;
    description: string;
    start_date: string;
    completed_date: string | null;
    completed: boolean;
    priority: number;
    tags: string[];
    created_at: string;
    updated_at: string;
}
export type Task = {
    id: string;
    name: string;
    description: string;
    start_date: string;
    completed_date: string | null;
    completed: boolean;
    priority: number;
    tags: string[];
    created_at: string;
    updated_at: string;
    project_id: string;
}