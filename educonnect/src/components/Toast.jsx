import { useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiAlertCircle, FiX } from 'react-icons/fi';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const types = {
    success: { bg: 'bg-green-500', icon: FiCheckCircle },
    error: { bg: 'bg-red-500', icon: FiXCircle },
    warning: { bg: 'bg-yellow-500', icon: FiAlertCircle }
  };

  const { bg, icon: Icon } = types[type];

  return (
    <div className={`fixed top-4 right-4 ${bg} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fadeIn z-50`}>
      <Icon className="text-xl" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-80">
        <FiX />
      </button>
    </div>
  );
};

export default Toast;
