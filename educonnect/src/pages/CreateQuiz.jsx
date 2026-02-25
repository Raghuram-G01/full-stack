import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateQuiz() {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState({
    title: '',
    description: '',
    duration: '',
    questions: []
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const handleAddQuestion = () => {
    if (currentQuestion.question && currentQuestion.options.every(opt => opt)) {
      setQuiz({ ...quiz, questions: [...quiz.questions, currentQuestion] });
      setCurrentQuestion({ question: '', options: ['', '', '', ''], correctAnswer: 0 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quiz created:', quiz);
    navigate('/teacher/courses');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create Quiz/Assessment</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Quiz Title</label>
          <input
            type="text"
            value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            value={quiz.description}
            onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Duration (minutes)</label>
          <input
            type="number"
            value={quiz.duration}
            onChange={(e) => setQuiz({ ...quiz, duration: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-bold mb-4">Add Question</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Question</label>
              <input
                type="text"
                value={currentQuestion.question}
                onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>

            {currentQuestion.options.map((option, index) => (
              <div key={index}>
                <label className="block mb-2">Option {index + 1}</label>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...currentQuestion.options];
                    newOptions[index] = e.target.value;
                    setCurrentQuestion({ ...currentQuestion, options: newOptions });
                  }}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}

            <div>
              <label className="block mb-2">Correct Answer</label>
              <select
                value={currentQuestion.correctAnswer}
                onChange={(e) => setCurrentQuestion({ ...currentQuestion, correctAnswer: parseInt(e.target.value) })}
                className="w-full p-2 border rounded"
              >
                {currentQuestion.options.map((_, index) => (
                  <option key={index} value={index}>Option {index + 1}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleAddQuestion}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Question
            </button>
          </div>
        </div>

        {quiz.questions.length > 0 && (
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-3">Questions Added: {quiz.questions.length}</h3>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          disabled={quiz.questions.length === 0}
        >
          Create Quiz
        </button>
      </form>
    </div>
  );
}

export default CreateQuiz;
