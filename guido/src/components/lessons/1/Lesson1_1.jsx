import E from "../../../assets/sounds/117714__kyster__e.wav";
import G from "../../../assets/sounds/117717__kyster__g.wav";
import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import '../lessons.css';

export default function Lesson1_1() {
  function PlayE() {
    const audio = new Audio(E);
    audio.play();
    setSelectedNote("E");
  }

  function PlayG() {
    const audio = new Audio(G);
    audio.play();
    setSelectedNote("G");
  }

  function nextPart() {
    setPartsShown([...partsShown, parts[partcounter]]);
    setPartcounter(partcounter + 1);
    setShowContinue(false);
  }

  const part1 = (
    <div key={1}>
      <h1 className="text-3xl font-bold mb-6">What Is a Note?</h1>
      <p>
        Welcome to your first guitar theory lesson! Before we start learning
        chords, scales and songs, it's important to understand the concept of
        musical notes.
        <br />
        <br />
        A note is just a sound with a specific pitch, a pitch can be higher or
        lower. If a sound has a pitch we call it a note. 
        <br />
        If it doesn't have a pitch, like clapping or a drum hit, we don't.
        <br />
        <br />
      </p>
    </div>
  );
    let [selectedNote, setSelectedNote] = useState(null);
  const part2 = (
    <div key={2}>
        <p>Beneath are two examples of notes played on a guitar, which of these has the lowest pitch?</p>
        <br />
      <button onClick={PlayE} className={selectedNote ==='E' ? 'bg-gray-400 rounded-lg text-gray-800' : 'bg-blue-800'}>
        <FaVolumeUp />
      </button>
      <button onClick={PlayG} className={selectedNote ==='G' ? 'bg-gray-400 rounded-lg text-gray-800' : 'bg-blue-800'}>
        <FaVolumeUp />
      </button>
      <br />
      <button >Check</button>
    </div>
  );

  const parts = [part1, part2];

  let [partsShown, setPartsShown] = useState([part1]);
  let [partcounter, setPartcounter] = useState(1);
  let [showContinue, setShowContinue] = useState(true);


  return (
    <>
      <div className="mt-10 items-center justify-center flex flex-col h-full">
        <div className="p-8 w-3xl">{partsShown.map((part) => part)}</div>
        {showContinue && (
          <button onClick={nextPart} className="bg-blue-800 rounded-lg text-lg text-white p-3">
            Continue
          </button>
        )}
      </div>
    </>
  );
}
