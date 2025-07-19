import React, { useState, useEffect } from 'react';
import { X, Check, AlertCircle, Trophy, RotateCcw } from 'lucide-react';

interface QuizModalProps {
  skill: string;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ skill, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const quizData = {
    'Frontend Development': [
      {
        question: 'What is the virtual DOM in React?',
        options: [
          'A copy of the real DOM kept in memory',
          'A browser API for DOM manipulation',
          'A CSS framework for styling',
          'A database for storing component state'
        ],
        correct: 0,
        explanation: 'The virtual DOM is a programming concept where a "virtual" representation of the DOM is kept in memory and synced with the "real" DOM.'
      },
      {
        question: 'Which hook is used for side effects in React?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correct: 1,
        explanation: 'useEffect is the hook used for performing side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.'
      },
      {
        question: 'What does Tailwind CSS provide?',
        options: [
          'JavaScript functionality',
          'Database connectivity',
          'Utility-first CSS framework',
          'Backend routing'
        ],
        correct: 2,
        explanation: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS.'
      }
    ],
    'Backend Development': [
      {
        question: 'What is Express.js?',
        options: [
          'A React component library',
          'A Node.js web application framework',
          'A database management system',
          'A CSS preprocessor'
        ],
        correct: 1,
        explanation: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
      },
      {
        question: 'What is middleware in Express?',
        options: [
          'A type of database',
          'Functions that execute during request-response cycle',
          'A frontend framework',
          'A testing library'
        ],
        correct: 1,
        explanation: 'Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application\'s request-response cycle.'
      },
      {
        question: 'What is MongoDB?',
        options: [
          'A relational database',
          'A NoSQL document database',
          'A web server',
          'A programming language'
        ],
        correct: 1,
        explanation: 'MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents, making it easy to store and query complex data structures.'
      }
    ]
  };

  const currentQuiz = quizData[skill as keyof typeof quizData] || quizData['Frontend Development'];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < currentQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === currentQuiz[index].correct) {
        correct++;
      }
    });
    setScore(Math.round((correct / currentQuiz.length) * 100));
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    if (score >= 80) return 'Excellent! You have strong knowledge in this area.';
    if (score >= 60) return 'Good job! Consider reviewing some concepts.';
    return 'Keep learning! Practice will make you stronger.';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {skill} Quiz
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showResults ? (
            <>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Question {currentQuestion + 1} of {currentQuiz.length}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {Math.round(((currentQuestion + 1) / currentQuiz.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / currentQuiz.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {currentQuiz[currentQuestion].question}
                </h4>

                <div className="space-y-3">
                  {currentQuiz[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-500'
                        }`}>
                          {selectedAnswers[currentQuestion] === index && (
                            <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                          )}
                        </div>
                        <span className="text-gray-900 dark:text-white">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
                >
                  {currentQuestion === currentQuiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center">
              <div className="mb-6">
                <Trophy className={`w-16 h-16 mx-auto mb-4 ${getScoreColor()}`} />
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Quiz Complete!
                </h4>
                <div className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
                  {score}%
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {getScoreMessage()}
                </p>
              </div>

              {/* Detailed Results */}
              <div className="space-y-4 mb-6">
                {currentQuiz.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correct;
                  
                  return (
                    <div key={index} className="text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <div className="flex items-start mb-2">
                        {isCorrect ? (
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white mb-1">
                            {question.question}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={resetQuiz}
                  className="flex items-center px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;