import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'student': return '/student/dashboard';
      case 'teacher': return '/teacher/dashboard';
      case 'admin': return '/admin/dashboard';
      default: return '/';
    }
  };

  return (
    <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div onClick={() => navigate('/')} className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-purple-500 to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transform group-hover:rotate-6 transition-all duration-300">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent">
              EduConnect
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" onClick={() => navigate(getDashboardLink())}>Dashboard</Button>
                <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                  <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {user.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({user.role})</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <FiLogOut className="inline mr-1" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
                <Button onClick={() => navigate('/register')}>Register</Button>
              </>
            )}
            <button onClick={toggleDarkMode} className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 text-white shadow-lg hover:shadow-glow transform hover:scale-110 transition-all duration-300">
              {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 text-white shadow-lg">
              {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
              {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 animate-slideIn">
          <div className="px-4 py-4 space-y-3">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" className="w-full" onClick={() => { navigate(getDashboardLink()); setMobileMenuOpen(false); }}>Dashboard</Button>
                <div className="text-sm text-center py-2 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                  <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{user.name}</span>
                  <span className="text-gray-500 dark:text-gray-400"> ({user.role})</span>
                </div>
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  <FiLogOut className="inline mr-1" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" className="w-full" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}>Login</Button>
                <Button className="w-full" onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}>Register</Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
