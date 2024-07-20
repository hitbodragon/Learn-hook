import { useEffect, useState } from 'react';

// xử lý chức năng  thời gian thực
const lessons = [
    {
        id: 1,
        name: 'React là gì',
    },
    {
        id: 2,
        name: 'State và Effect',
    },
    {
        id: 3,
        name: 'Props và State',
    },
];
function Content() {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);
    return (
        <div>
            {lessons.map((lesson) => (
                <li
                    key={lesson.id}
                    style={{
                        color: lessonId === lesson.id ? 'red' : '#333',
                    }}
                    onClick={() => setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
        </div>
    );
}
export default Content;
