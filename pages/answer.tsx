import { useState } from "react";
import AnswerType from "@/model/Answer";

export default function Answer({
  answer,
  incrementCorrectAnswersFound,
}: {
  answer: AnswerType;
  incrementCorrectAnswersFound: () => void;
}) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    if (answer.correct && !clicked) incrementCorrectAnswersFound();
  }

  const classes = ["border-2", "rounded-md"];
  if (clicked && answer.correct) classes.push("bg-green-700");
  else if (clicked && !answer.correct) classes.push("bg-red-700");

  const classesString = classes.join(" ");

  return (
    <td className={classesString} onClick={handleClick}>
      <div className="container">{answer.text}</div>
    </td>
  );
}
