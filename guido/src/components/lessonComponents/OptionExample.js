import { FaVolumeUp } from "react-icons/fa";

option = {
  value: "Example",
  label: FaVolumeUp,
  correct: true,
  onselect: () => {
    playSound("example.mp3");
  }
};
