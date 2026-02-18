import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { FiBook, FiUsers, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const myCourses = courses.filter(c => c.instructorId === user?.id);
  const totalStudents = myCourses.reduce((sum, course) => sum + course.students, 0);

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Teacher Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your courses and students
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm">Total Courses</p>
              <p className="text-3xl font-bold mt-1">{myCourses.length}</p>
            </div>
            <FiBook className="text-4xl opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Students</p>
              <p className="text-3xl font-bold mt-1">{totalStudents}</p>
            </div>
            <FiUsers className="text-4xl opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Assignments</p>
              <p className="text-3xl font-bold mt-1">8</p>
            </div>
            <FiFileText className="text-4xl opacity-80" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <Link to="/teacher/create-course">
          <Button size="lg">
            <FiBook className="inline mr-2" />
            Create New Course
          </Button>
        </Link>
      </div>

      {/* My Courses */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          My Courses
        </h2>
        {myCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              You haven't created any courses yet.
            </p>
            <Link to="/teacher/create-course">
              <Button>Create Your First Course</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
