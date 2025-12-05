import { useState } from "react";

export default function QuizStep(question, options) {
  const [selectedOption, setSelectedOption] = useState(null);
  function checkAnswer() {
    if (selectedOption.isCorrect) {
    }
    return (
      <>
        <b>{question}</b>
        {options.map((e, index) => (
          <button key={index} onClick={() => setSelectedOption(e)}>
            {e.label + e.value}
          </button>
        ))}
        <button>Check</button>
      </>
    );
  }
}
