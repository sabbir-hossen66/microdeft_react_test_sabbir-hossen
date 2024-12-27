import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './courseList.css';

const CourseList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const setToken = localStorage.getItem('token');
    axios
      .get(
        'https://react-interview.crd4lc.easypanel.host/api/course',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${setToken}`,
          },
        }
      )
      .then((response) => {
        setData(response.data.data.data);
        console.log(response.data);
      });
  }, []);

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = data.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <div className='display'>
        {data.length === 0 ? (
          <div>
            <h1 className='text-center text-4xl'>
              Please Add Some Courses,{' '}
              <span className='text-xl font-semibold text-blue-500'>
                Go To Home PAGE
              </span>
            </h1>
          </div>
        ) : (
          currentCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                <div className="course-details">
                  <span
                    className="course-badge"
                    style={{ backgroundColor: course.badge_color }}
                  >
                    {course.badge_text}
                  </span>
                  <p className="course-instructor">Instructor: {course.instructor_name}</p>
                </div>
                <p className="course-date">Created at: {course.created_at}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination is here */}
      <div className="pagination-container">
        {totalPages > 1 && (
          <ul className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseList;
