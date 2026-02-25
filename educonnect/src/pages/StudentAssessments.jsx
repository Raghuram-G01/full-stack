import { Link } from 'react-router-dom';

const StudentAssessments = () => {
  const assessments = JSON.parse(localStorage.getItem('assessments') || '[]');

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Available Assessments
      </h1>

      {assessments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assessments.map(assessment => (
            <div key={assessment.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">{assessment.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Type: {assessment.type === 'quiz' ? 'Quiz' : 'Coding Problem'}
              </p>
              {assessment.duration && (
                <p className="text-sm text-gray-500 mb-4">Duration: {assessment.duration} minutes</p>
              )}
              <Link
                to={`/student/assessment/${assessment.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
              >
                Start Assessment
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No assessments available yet.</p>
      )}
    </div>
  );
};

export default StudentAssessments;
