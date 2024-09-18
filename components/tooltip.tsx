"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
const people = [
    {
        id: 1,
        name: "Jerry Brown",
        designation: "Cyber Security Analyst",
        image:
            "/jerry.jpeg",
    },
    {
        id: 2,
        name: "Godstime Edet",
        designation: "Data Scientist",
        image:
            "/godstime.jpeg",
    },
    {
        id: 3,
        name: "Ogar Emmanuel",
        designation: "Software Engineer",
        image:
            "/p1.png",
    },
    {
        id: 4,
        name: "Amangi Sunday",
        designation: "Web Developer",
        image:
            "/p1.png",
    },
    {
        id: 5,
        name: "Yvonne Aderogba",
        designation: "Graphics designerr",
        image:
            "/p1.png",
    },
    {
        id: 6,
        name: "Batman",
        designation: "The Dark Knight",
        image:
            "/p1.png",
    },
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-end justify-end mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
