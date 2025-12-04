import LessonNode from "./LessonNode";

export default function Chapter(props) {
  const { lessons, chapterTitle, setSelectedLesson } = props;
  return (
    <>
        <h1 className="text-4xl font-bold mb-6">{chapterTitle}</h1>
      {lessons.map((lesson, index) => (
        <LessonNode
          key={index}
          number={index + 1}
          title={lesson.title}
          onClick={() => setSelectedLesson(lesson)}
        />
      ))}
    </>
  );
}
