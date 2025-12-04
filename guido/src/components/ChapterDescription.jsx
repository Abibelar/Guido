export default function ChapterDescription(props){
    const { title, description } = props;
    return (
        <div className="mt-10">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}