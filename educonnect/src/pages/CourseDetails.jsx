import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { assignments } from '../data/assignments';
import { FiClock, FiUsers, FiStar, FiBook, FiArrowLeft } from 'react-icons/fi';
import Button from '../components/Button';
import Card from '../components/Card';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));
  const courseAssignments = assignments.filter(a => a.courseId === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course not found
          </h2>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto animate-fadeIn">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <FiArrowLeft className="inline mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-primary bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {course.title}
                </h1>

                <div className="flex items-center gap-6 mb-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <FiStar className="text-yellow-500 fill-current mr-1" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <FiUsers className="mr-1" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    About this course
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    Instructor
                  </h2>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {course.instructor}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Course Instructor
                      </p>
                    </div>
                  </div>
                </div>

                {/* Assignments */}
                {courseAssignments.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Assignments
                    </h2>
                    <div className="space-y-4">
                      {courseAssignments.map(assignment => (
                        <div
                          key={assignment.id}
                          className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                <FiBook className="inline mr-2" />
                                {assignment.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {assignment.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                <span>Due: {assignment.dueDate}</span>
                                <span>Points: {assignment.points}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Course Info
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Level</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Students</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {course.students}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Assignments</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {courseAssignments.length}
                    </span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Enroll Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
