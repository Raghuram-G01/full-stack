import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const AdminCourses = () => {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        All Courses
      </h1>
      
      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        Total Courses: {courses.length}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;
