import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const TakeAssessment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const assessments = JSON.parse(localStorage.getItem('assessments') || '[]');
  const assessment = assessments.find(a => a.id === parseInt(id));

  const [answers, setAnswers] = useState(assessment?.type === 'quiz' ? [] : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    let score = 0;
    if (assessment.type === 'quiz') {
      score = answers.reduce((total, answer, index) => {
        return total + (answer === assessment.questions[index].correctAnswer ? 1 : 0);
      }, 0);
    } else {
      score = 50; // Default score for coding
    }

    const submission = {
      id: Date.now(),
      assessmentId: assessment.id,
      assessmentTitle: assessment.title,
      studentName: user.name,
      studentId: user.id,
      score,
      totalMarks: assessment.type === 'quiz' ? assessment.questions.length : 100,
      submittedAt: new Date().toISOString(),
      answers
    };

    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    localStorage.setItem('submissions', JSON.stringify([...submissions, submission]));

    alert(`Assessment submitted! Your score: ${score}/${submission.totalMarks}`);
    navigate('/student/assessments');
  };

  if (!assessment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Assessment not found</h2>
          <Button onClick={() => navigate('/student/assessments')}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{assessment.title}</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {assessment.type === 'quiz' ? (
            assessment.questions.map((q, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
                  Q{index + 1}. {q.question}
                </h3>
                {q.options.map((option, optIndex) => (
                  <label key={optIndex} className="block mb-2 text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-emerald-50 dark:hover:bg-gray-700 p-2 rounded">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={optIndex}
                      onChange={() => {
                        const newAnswers = [...answers];
                        newAnswers[index] = optIndex;
                        setAnswers(newAnswers);
                      }}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))
          ) : (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Problem Description:</h3>
              <p className="mb-4 whitespace-pre-wrap bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-800 dark:text-gray-200">
                {assessment.description}
              </p>
              
              {assessment.testCases && (
                <>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Test Cases:</h3>
                  <div className="mb-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    {assessment.testCases.map((tc, idx) => (
                      <div key={idx} className="mb-2 text-gray-700 dark:text-gray-300">
                        <span className="font-mono text-sm">Input: {tc.input} → Output: {tc.output}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Your Code:</label>
              <textarea
                value={answers}
                onChange={(e) => setAnswers(e.target.value)}
                className="w-full p-4 border rounded-lg font-mono text-sm bg-gray-900 text-green-400"
                rows={20}
                placeholder="// Write your function here"
                required
              />
            </div>
          )}

          <Button type="submit" className="w-full" size="lg">
            Submit Assessment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TakeAssessment;
