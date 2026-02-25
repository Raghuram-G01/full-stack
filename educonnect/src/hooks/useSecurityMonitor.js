import { useEffect } from 'react';
import { useProctoring } from '../context/ProctoringContext';

export const useSecurityMonitor = (isActive) => {
  const { addViolation, isBlocked } = useProctoring();

  useEffect(() => {
    if (!isActive || isBlocked) return;

    // Detect ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        addViolation('ESC key pressed');
      }
      if (e.key === 'PrintScreen') {
        addViolation('Screenshot attempt');
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        addViolation('Copy attempt');
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
        e.preventDefault();
        addViolation('Cut attempt');
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        e.preventDefault();
        addViolation('Paste attempt');
      }
    };

    // Detect tab switch
    const handleVisibilityChange = () => {
      if (document.hidden) {
        addViolation('Tab switched');
        addViolation('Tab switched - instant block');
        addViolation('Tab switched - instant block final');
      }
    };

    // Detect right click
    const handleContextMenu = (e) => {
      e.preventDefault();
      addViolation('Right click detected');
    };

    // Detect fullscreen exit
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        addViolation('Fullscreen exited');
      }
    };

    // Detect DevTools
    const detectDevTools = () => {
      const threshold = 160;
      if (window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold) {
        addViolation('DevTools detected');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    const devToolsInterval = setInterval(detectDevTools, 1000);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      clearInterval(devToolsInterval);
    };
  }, [isActive, isBlocked, addViolation]);
};
