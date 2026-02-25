import { createContext, useContext, useState } from 'react';

const ProctoringContext = createContext(undefined);

export const ProctoringProvider = ({ children }) => {
  const [warnings, setWarnings] = useState(0);
  const [violations, setViolations] = useState([]);
  const [isBlocked, setIsBlocked] = useState(false);

  const addViolation = (type) => {
    const violation = {
      type,
      timestamp: new Date().toISOString()
    };
    
    setViolations(prev => [...prev, violation]);
    setWarnings(prev => prev + 1);

    // Log to console (simulate API call)
    console.log('Violation logged:', violation);

    if (warnings + 1 >= 3) {
      blockAssessment();
    }
  };

  const blockAssessment = () => {
    setIsBlocked(true);
    console.log('Assessment blocked. Violations:', violations);
  };

  return (
    <ProctoringContext.Provider value={{ warnings, violations, isBlocked, addViolation, blockAssessment }}>
      {children}
    </ProctoringContext.Provider>
  );
};

export const useProctoring = () => {
  const context = useContext(ProctoringContext);
  if (!context) throw new Error('useProctoring must be used within ProctoringProvider');
  return context;
};
