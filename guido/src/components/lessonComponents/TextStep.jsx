export default function TextStep(paragraphs) {
  return paragraphs.forEach((t) => {
    <>
      <br />
      <p>{t}</p>
      <br />
    </>;
  });
}
