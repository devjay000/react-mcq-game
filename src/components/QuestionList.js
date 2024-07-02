import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris",
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
    },
];

const QuestionList = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (option) => {
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div style={{alignItems:'center', height:'100vh', justifyContent:'center', display:"flex"}}>
            {showScore ? (
                <Score score={score} total={questions.length} />
            ) : (
                <Question
                    question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    );
};

export default QuestionList;
