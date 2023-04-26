import Answer from "./answer";
import { useEffect, useState } from "react";
import Question from "@/model/Question";

const initialQuestion: Question = {
  question: "Who's a good boy?",
  answers: [
    { text: "1", correct: true },
    { text: "1", correct: true },
    { text: "1", correct: true },
    { text: "1", correct: true },
    { text: "1", correct: true },
    { text: "1", correct: true },
    { text: "1", correct: true },
    { text: "1", correct: true },
    { text: "1", correct: false },
    { text: "1", correct: false },
    { text: "1", correct: false },
    { text: "1", correct: false },
    { text: "1", correct: false },
    { text: "1", correct: false },
    { text: "1", correct: false },
    { text: "1", correct: false },
    { text: "1", correct: false },
  ],
};

export default function Home() {
  const [question, setQuestion] = useState<Question>(
    undefined as unknown as Question
  );

  const [correctAnswersFound, setCorrectAnswersFound] = useState(0);

  useEffect(() => setQuestion(initialQuestion), []);

  const incrementCorrectAnswersFound = () => {
    // Update state with incremented value
    setCorrectAnswersFound(correctAnswersFound + 1);
  };

  if (question == undefined) return;

  const numberOfCorrectAnswers = question.answers.filter(
    (ans) => ans.correct
  ).length;

  const classes = [
    "w-full",
    "h-screen",
    "flex",
    "flex-col",
    "text-center",
    "align-middle",
  ];
  if (correctAnswersFound == numberOfCorrectAnswers - 1)
    classes.push("bg-sky-500");
  else if (correctAnswersFound == numberOfCorrectAnswers)
    classes.push("bg-green-500");
  else classes.push("bg-sky-700");

  const classesString = classes.join(" ");

  return (
    <div className={classesString}>
      <h1 className="text-3xl p-4 pt-6">{question.question}</h1>
      <table className="w-full border-separate border-spacing-3 flex-1">
        <tbody>
          <tr>
            <Answer
              answer={question.answers[0]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[1]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[2]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[3]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
          </tr>
          <tr>
            <Answer
              answer={question.answers[4]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[5]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[6]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[7]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
          </tr>
          <tr>
            <Answer
              answer={question.answers[8]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[9]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[10]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[11]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
          </tr>
          <tr>
            <Answer
              answer={question.answers[12]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[13]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[14]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
            <Answer
              answer={question.answers[15]}
              incrementCorrectAnswersFound={incrementCorrectAnswersFound}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
