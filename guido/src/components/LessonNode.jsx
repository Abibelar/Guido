export default function LessonNode(props) {
    const {number, title, description, onClick} = props
    return (
        <div className="bg-blue-950 w-15 p-4 m-4 rounded-lg text-white flex items-center justify-center" onClick={onClick}>
            {number}
        </div>
    );
}