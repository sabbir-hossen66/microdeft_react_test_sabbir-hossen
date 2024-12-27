import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './courseList.css';

const CourseList = () => {
  const [data, setData] = useState([])

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
        setData(response.data.data.data)
        console.log(response.data)

      })

  }, [])





  return (
    <div>
      <p>name:</p>
      <h3>hello</h3>
      <div className='display'>
        {

          data?.map((course) => (
            <div className="course-card">
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
        }

      </div>
    </div>
  );
};

export default CourseList;