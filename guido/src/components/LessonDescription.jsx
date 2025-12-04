export default function LessonDescription(props) {
  const { number, title, description } = props;
  return (
    //description must be displayed halffway down the screen, so in the middle vertically
    <div className="fixed top-1/4">
      <h2>{title}</h2>
      <h3>Lesson {number}</h3>
      <p>{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Start Lesson</button>
    </div>
  );
}
