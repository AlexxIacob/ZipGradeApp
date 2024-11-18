import React, { useState } from 'react';
import './creareTest.css'; 

const CreareTest = () => {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: '',
        answers: ['', '', '', ''],
        correctAnswers: [false, false, false, false],
      },
    ]);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (qIndex, aIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers[aIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerToggle = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correctAnswers[aIndex] =
      !updatedQuestions[qIndex].correctAnswers[aIndex];
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    console.log('Saved Exam:', questions);
    alert('The exam was saved succesfully!');
  };

  return (
    <div className="creare-test-container">
      <h1>Create Exam</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="question-block">
            <div className="question-header">
              <input
                type="text"
                placeholder="Introduce the question..."
                value={question.questionText}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                className="question-input"
              />
              <button
                type="button"
                className="delete-question-button"
                onClick={() => handleDeleteQuestion(qIndex)}
              >
                🗑️
              </button>
            </div>
            <div className="answers-container">
              {question.answers.map((answer, aIndex) => (
                <div key={aIndex} className="answer-block">
                  <input
                    type="text"
                    placeholder={`Answer ${aIndex + 1}`}
                    value={answer}
                    onChange={(e) =>
                      handleAnswerChange(qIndex, aIndex, e.target.value)
                    }
                    className="answer-input"
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={question.correctAnswers[aIndex]}
                      onChange={() =>
                        handleCorrectAnswerToggle(qIndex, aIndex)
                      }
                    />
                    Correct
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          type="button"
          className="add-question-button"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
        <button
          type="submit"
          className="submit-test-button"
          onClick={handleSubmit}
        >
          Save Exam
        </button>
      </form>
    </div>
  );
};

export default CreareTest;
