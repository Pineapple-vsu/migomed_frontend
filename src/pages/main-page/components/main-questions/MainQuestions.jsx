import { Answer } from "../answer/Answer";
import { Question } from "../question/Question";
import { QuestionItem } from "../question-item/QuestionItem";
import styles from "./main-questions.module.css";
import { Link } from "react-router";
import { QUESTIONS } from "./data";

export const MainQuestions = () => {
  return (
    <section className={styles.main}>
      <h2>Ответы на часто задаваемые вопросы</h2>
      <div className={styles.content}>
        {QUESTIONS.map((question, index) => (
          <QuestionItem
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </section>
  );
};
