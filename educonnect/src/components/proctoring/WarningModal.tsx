import { useProctoring } from '../../context/ProctoringContext';

export const WarningModal = () => {
  const { warnings, isBlocked } = useProctoring();

  if (isBlocked) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md text-center">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold mb-4 text-red-600">Assessment Blocked</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You are blocked from this assessment due to suspicious behavior.
          </p>
          <p className="text-sm text-gray-500">
            Your assessment has been automatically submitted.
          </p>
        </div>
      </div>
    );
  }

  if (warnings > 0) {
    return (
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
        <div className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="font-bold">⚠️ Warning {warnings}/3</p>
          <p className="text-sm">Suspicious behavior detected!</p>
        </div>
      </div>
    );
  }

  return null;
};
