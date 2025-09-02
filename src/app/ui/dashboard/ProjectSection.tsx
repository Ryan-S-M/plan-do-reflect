"use client";

import { Project, Task } from "@/app/lib/definitions";
import {useState} from "react";
import ProjectsList from "./ProjectsList";

export default function ProjectSection({ heading, projects, tasks }: { heading: string, projects: Project[]; tasks: Task[] }) {
    const [showCompleted, setShowCompleted] = useState(false);
    return (
        <div className="rounded-md ring-1 ring-purple-500/20 bg-purple-500/5 dark:bg-purple-400/5">
            <button
                className={`w-full text-left flex items-center justify-between p-3 ${showCompleted ? "border-b border-purple-500/20" : ""}`}
                onClick={() => setShowCompleted(!showCompleted)}
            >
                <span className="font-medium">{heading}</span>
                <span className="text-sm text-gray-500">{showCompleted ? "−" : "+"}</span>
            </button>
            {showCompleted && (
                <div className="p-3">
                    <ProjectsList projects={projects} tasks={tasks} />
                </div>
            )}
        </div>
    );
}
