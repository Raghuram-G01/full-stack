import { useNavigate } from 'react-router-dom';
import { FiBook, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: FiBook,
      title: 'Quality Courses',
      description: 'Access hundreds of courses from expert instructors'
    },
    {
      icon: FiUsers,
      title: 'Learn Together',
      description: 'Join a community of passionate learners'
    },
    {
      icon: FiAward,
      title: 'Get Certified',
      description: 'Earn certificates upon course completion'
    },
    {
      icon: FiTrendingUp,
      title: 'Track Progress',
      description: 'Monitor your learning journey with analytics'
    }
  ];

  return (
    <div className="animate-fadeIn">
      <section className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome to EduConnect
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-emerald-50">
            Your gateway to unlimited learning opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50" onClick={() => navigate('/register')}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600" onClick={() => navigate('/login')}>
              Sign In
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-emerald-50 dark:text-gray-900"/>
          </svg>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Why Choose EduConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center border border-emerald-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join thousands of students already learning on EduConnect
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50" onClick={() => navigate('/register')}>
            Create Free Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
