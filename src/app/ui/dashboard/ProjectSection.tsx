"use client";

import { Project, Task } from "@/app/lib/definitions";
import {useState} from "react";
import ProjectsList from "./ProjectsList";

export default function ProjectSection({ heading, projects, tasks }: { heading: string, projects: Project[]; tasks: Task[] }) {
    const [showCompleted, setShowCompleted] = useState(false);
    return (
        <div>
            <button className="w-full text-left flex items-center justify-between" onClick={() => setShowCompleted(!showCompleted)}>
                <span>{heading}</span> 
                <span className="text-sm text-gray-500">{showCompleted ? "-" : "+"}</span>
            </button>
            <div className="">
                {showCompleted && <ProjectsList projects={projects} tasks={tasks} />}
            </div>
        </div>
    );
}
