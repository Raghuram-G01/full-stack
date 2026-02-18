import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const StudentCourses = () => {
  const { user } = useAuth();
  const enrolledCourses = user?.enrolledCourses || [];
  const myCourses = courses.filter(c => enrolledCourses.includes(c.id));

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        My Enrolled Courses
      </h1>
      {myCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            You haven't enrolled in any courses yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentCourses;
