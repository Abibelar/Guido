import LessonNode from "./LessonNode";

export default function Chapter(props) {
  const { lessons, chapterTitle, setSelectedLesson } = props;
  return (
    <>
      <h1 className="text-4xl font-bold">{chapterTitle}</h1>
      {lessons.map((lesson, index) => (
        <LessonNode
          key={index}
          number={index + 1}
          title={lesson.title}
          onClick={() => setSelectedLesson(lesson)}
        />
      ))}
      <div className="w-full border-b-2 border-gray-200 pb-4 mb-6"></div>
    </>
  );
}
