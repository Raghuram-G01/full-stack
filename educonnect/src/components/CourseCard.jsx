import { FiUsers, FiClock, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Card from './Card';
import Button from './Button';

const CourseCard = ({ course, showEnroll = false, onEnroll }) => {
  return (
    <Card hover className="animate-fadeIn">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-primary bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
            {course.level}
          </span>
          <div className="flex items-center text-yellow-500">
            <FiStar className="fill-current" />
            <span className="ml-1 text-sm font-semibold">{course.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{course.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <FiUsers className="mr-1" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">by {course.instructor}</span>
          {showEnroll ? (
            <Button size="sm" onClick={() => onEnroll(course.id)}>Enroll</Button>
          ) : (
            <Link to={`/course/${course.id}`}>
              <Button size="sm">View Details</Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
