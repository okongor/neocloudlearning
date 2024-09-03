import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-7xl mx-auto px-0">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    { title: ' HTML', description: 'this is for now', img: '/html.png', link: '/html/htmlintro' },
    { title: 'CSS', description: 'this is for now', img: '/css3.png', link: '/css/cssintro' },
    { title: 'JavaScript', description: 'this is for now', img: '/js.png', link: '/javascript/javascript' },
    { title: 'React', description: 'this is for now', img: '/react.png', link: '/react/reactintro' },
    { title: 'NodeJs', description: 'this is for now', img: '/nodejs.png', link: '/Nodejs/nodejs' },
    { title: 'MongoDB', description: 'this is for now', img: '/mongo-db.png', link: '/MongoDB/mongodbintro' },
    { title: 'Python', description: 'this is for now', img: '/python.png', link: '/python/home' },
    { title: 'Cybersecurity', description: 'this is for now', img: '/p1.png', link: '/cybersecurity/intro' },
    { title: 'Flutter', description: 'this is for now', img: '/p1.png', link: '/flutter/intro' },
    { title: 'Data Analytics', description: 'this is for now', img: '/p1.png', link: '/dataanalytics/intro' },
    { title: 'Data Science', description: 'this is for now', img: '/p1.png', link: '/Datascience/intro' },
    { title: 'Digital Marketing', description: 'this is for now', img: '/p1.png', link: '/Digitalmarketing/intro' },
    { title: 'UI/UX Design', description: 'this is for now', img: '/p1.png', link: '/ui/ux/intro' },
];
