import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-7xl mx-auto px-0">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    { title: ' HTML', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/html.png', link: '/html/htmlintro' },
    { title: 'CSS', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now', img: '/css3.png', link: '/css/cssintro' },
    { title: 'JavaScript', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/js.png', link: '/javascript/javascript' },
    { title: 'React', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now', img: '/react.png', link: '/react/reactintro' },
    { title: 'NodeJs', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/nodejs.png', link: '/Nodejs/nodejs' },
    { title: 'PHP', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/php.png', link: '/Digitalmarketing/intro' },
    { title: 'MongoDB', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now', img: '/mongo-db.png', link: '/MongoDB/mongodbintro' },
    { title: 'Python', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/python.png', link: '/python/home' },
    { title: 'Cybersecurity', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/hacker.png', link: '/cybersecurity/intro' },
    { title: 'Flutter', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/flutter.png', link: '/flutter/intro' },
    { title: 'Cloud Computing', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/cloud.png', link: '/Digitalmarketing/intro' },
    { title: 'Pandas', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/panda.png', link: '/Datascience/intro' },
    // { title: 'Digital Marketing', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/p1.png', link: '/Digitalmarketing/intro' },
    // { title: 'UI/UX Design', description: 'this is for now i just have to add a placeholder ttext until i generate better content so this has to suffice for now ', img: '/p1.png', link: '/ui/ux/intro' },
];
