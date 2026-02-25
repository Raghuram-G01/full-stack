import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAssessment = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('quiz');
  const [assessment, setAssessment] = useState({
    title: '',
    duration: '',
    questions: []
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const [codingProblem, setCodingProblem] = useState({
    title: '',
    description: '',
    testCases: [{ input: '', output: '' }]
  });

  const handleAddQuestion = () => {
    if (currentQuestion.question && currentQuestion.options.every(opt => opt)) {
      setAssessment({ ...assessment, questions: [...assessment.questions, currentQuestion] });
      setCurrentQuestion({ question: '', options: ['', '', '', ''], correctAnswer: 0 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const assessments = JSON.parse(localStorage.getItem('assessments') || '[]');
    const newAssessment = {
      id: Date.now(),
      type,
      ...(type === 'quiz' ? assessment : codingProblem),
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('assessments', JSON.stringify([...assessments, newAssessment]));
    navigate('/faculty/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create Assessment</h1>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Assessment Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 border rounded">
          <option value="quiz">Quiz</option>
          <option value="coding">Coding Problem</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {type === 'quiz' ? (
          <>
            <div>
              <label className="block mb-2 font-semibold">Quiz Title</label>
              <input
                type="text"
                value={assessment.title}
                onChange={(e) => setAssessment({ ...assessment, title: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Duration (minutes)</label>
              <input
                type="number"
                value={assessment.duration}
                onChange={(e) => setAssessment({ ...assessment, duration: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-bold mb-4">Add Question</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Question"
                  value={currentQuestion.question}
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                {currentQuestion.options.map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...currentQuestion.options];
                      newOptions[index] = e.target.value;
                      setCurrentQuestion({ ...currentQuestion, options: newOptions });
                    }}
                    className="w-full p-2 border rounded"
                  />
                ))}
                <select
                  value={currentQuestion.correctAnswer}
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, correctAnswer: parseInt(e.target.value) })}
                  className="w-full p-2 border rounded"
                >
                  {currentQuestion.options.map((_, index) => (
                    <option key={index} value={index}>Correct: Option {index + 1}</option>
                  ))}
                </select>
                <button type="button" onClick={handleAddQuestion} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add Question
                </button>
              </div>
            </div>

            {assessment.questions.length > 0 && (
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Questions Added: {assessment.questions.length}</h3>
              </div>
            )}
          </>
        ) : (
          <>
            <div>
              <label className="block mb-2 font-semibold">Problem Title</label>
              <input
                type="text"
                value={codingProblem.title}
                onChange={(e) => setCodingProblem({ ...codingProblem, title: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Problem Description</label>
              <textarea
                value={codingProblem.description}
                onChange={(e) => setCodingProblem({ ...codingProblem, description: e.target.value })}
                className="w-full p-2 border rounded"
                rows="5"
                required
              />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Test Cases</h3>
              {codingProblem.testCases.map((tc, index) => (
                <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                  <input
                    type="text"
                    placeholder="Input"
                    value={tc.input}
                    onChange={(e) => {
                      const newTestCases = [...codingProblem.testCases];
                      newTestCases[index].input = e.target.value;
                      setCodingProblem({ ...codingProblem, testCases: newTestCases });
                    }}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Expected Output"
                    value={tc.output}
                    onChange={(e) => {
                      const newTestCases = [...codingProblem.testCases];
                      newTestCases[index].output = e.target.value;
                      setCodingProblem({ ...codingProblem, testCases: newTestCases });
                    }}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => setCodingProblem({ ...codingProblem, testCases: [...codingProblem.testCases, { input: '', output: '' }] })}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Add Test Case
              </button>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          disabled={type === 'quiz' && assessment.questions.length === 0}
        >
          Create Assessment
        </button>
      </form>
    </div>
  );
};

export default CreateAssessment;
