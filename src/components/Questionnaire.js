"use client";
import { useState } from 'react';

const questions = [
  "What is ...?",
  "What is ...?",
  "What is ...?",
  "What is ...?",
  "What is ...?",
  "What is ...?",
  "What is ...?",
  "What is ...?",
  "What is ...?",
  "What is ...?",
];

export function Questionnaire() {
  const [answers, setAnswers] = useState({});

  const handleInputChange = (index, value) => {
    setAnswers({
      ...answers,
      [index]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted answers:', answers);
  };

  return (
    <div className="w-3/4 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Questionnaire</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {questions.map((question, index) => (
            <div key={index}>
              <label className="block text-gray-700 mb-2">
                {question}
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={answers[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
