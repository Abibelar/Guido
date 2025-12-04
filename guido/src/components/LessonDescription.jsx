import { Link } from "react-router-dom";

export default function LessonDescription(props) {
  const { id, number, title, description } = props;
  return (
    //description must be displayed halffway down the screen, so in the middle vertically
    <div className="fixed top-1/4 flex flex-col">
      <h2>{title}</h2>
      <h3>Lesson {number}</h3>
      <p>{description}</p>
      <Link
        to={`/lesson/${id}`}
        className="mt-4 w-fit px-4 py-2 bg-blue-500 text-white rounded"
      >
        Start Lesson
      </Link>
    </div>
  );
}
