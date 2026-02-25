const SubmissionResults = () => {
  const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Student Submissions
      </h1>

      {submissions.length > 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">Student Name</th>
                <th className="px-6 py-3 text-left">Assessment</th>
                <th className="px-6 py-3 text-left">Score</th>
                <th className="px-6 py-3 text-left">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(submission => (
                <tr key={submission.id} className="border-t dark:border-gray-700">
                  <td className="px-6 py-4">{submission.studentName}</td>
                  <td className="px-6 py-4">{submission.assessmentTitle}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-600">
                      {submission.score}/{submission.totalMarks}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {new Date(submission.submittedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No submissions yet.</p>
      )}
    </div>
  );
};

export default SubmissionResults;
