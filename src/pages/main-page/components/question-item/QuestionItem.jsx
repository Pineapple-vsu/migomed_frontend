import { useState } from "react";
import { Answer } from "../answer/Answer";
import { Question } from "../question/Question";
import styles from "./question-item.module.css";
import { Link } from "react-router";

export const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <Question
          onClick={toggleQuestion}
          question={question}
          isOpen={isOpen}
        />

        {isOpen && <Answer answer={answer} />}
      </div>
    </div>
  );
};
