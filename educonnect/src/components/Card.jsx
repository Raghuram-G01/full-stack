const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden ${hover ? 'hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
