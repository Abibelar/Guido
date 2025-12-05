import { useState } from "react";

export default function Lesson(title, steps) {
    const steps = [...steps];
    const [shownSteps, setShownsteps] = useState(steps[1]);
    
}