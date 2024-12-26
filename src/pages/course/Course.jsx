import React, { useState } from 'react';
import axios from 'axios';

const Course = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    badge_text: '',
    badge_color: '',
    instructor_name: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        'https://react-interview.crd4lc.easypanel.host/api/course',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: '',
          },
        }
      )
      .then((response) => {
        setMessage(`Course added successfully: ${response.data}`);
        setFormData({
          title: '',
          description: '',
          badge_text: '',
          badge_color: '',
          instructor_name: '',
        });
      })
      .catch((error) => {
        setMessage(
          error.response?.data?.message || 'Failed to add course. Please try again.'
        );
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create A Course</h1>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Badge Text</label>
          <input
            type="text"
            name="badge_text"
            value={formData.badge_text}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Badge Color</label>
          <input
            type="text"
            name="badge_color"
            value={formData.badge_color}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="#ff0000"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Instructor Name</label>
          <input
            type="text"
            name="instructor_name"
            value={formData.instructor_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Course;