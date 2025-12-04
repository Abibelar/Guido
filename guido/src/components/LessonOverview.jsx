import LESSON_DATA from "../api/mock_data";
import { useState } from "react";
import LessonDescription from "./LessonDescription";
import Chapter from "./Chapter";

export default function LessonOverview(lessons) {
  lessons = LESSON_DATA;
  const [selectedLesson, setSelectedLesson] = useState(null);
  return (
    <div className="flex flex-row justify-center items-start p-8 gap-16">
      {/* <div className="w-3/12">
        <ChapterDescription
          title="Placeholder"
          description="Introduction to guitar"
        />
      </div> */}
      <div className="flex flex-col items-center w-7/12">
        {lessons.map((chapter, index) => (
          <Chapter
            key={index}
            chapterTitle={chapter.chapter}
            lessons={chapter.lessons}
            setSelectedLesson={setSelectedLesson}
          />
        ))}
      </div>
      <div className="w-5/12">
        {selectedLesson && (
          <LessonDescription
            number={selectedLesson.number}
            title={selectedLesson.title}
            description={selectedLesson.description || "No description yet"}
          />
        )}
      </div>
    </div>
  );
}
