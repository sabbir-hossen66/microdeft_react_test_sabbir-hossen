# MicroDeft - React Project with Tailwind, React Router, and Pagination

This is a React-based web application that features a variety of functionalities, including routing, animations, pagination, user authentication (login and registration), and the ability to add courses. The project uses React, Tailwind CSS for design, and implements pagination to display a list of courses.

### Live Link:
[MicroDeft Live](https://microdeft-frontend.vercel.app/)

## Features:
- **React Router**: Used for seamless page navigation.
- **Tailwind CSS**: For modern, responsive UI design.
- **Pagination**: Displays courses with pagination (8 items per page).
- **Login and Registration Pages**: Users can log in or register to use the platform.
- **Course Add Form**: Allows users to add courses, and the added course will be displayed in a list.
- **Animations**: Smooth animations using CSS to enhance the user experience.

## Technologies Used:
- React
- React Router DOM
- Tailwind CSS
- Axios (for API calls)
- Pagination logic
- LocalStorage (for managing authentication)

## Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/microdeft-frontend.git
Navigate into the project directory:


cd microdeft-frontend
Install the dependencies:



npm install
Run the application locally:



npm start
Open your browser and visit http://localhost:3000 to see the app in action.

Features Breakdown:
1. Login and Registration:
Users can register and log in using the form fields.
Login credentials are stored in localStorage for session management.
2. Course Management:
Users can add new courses using the course form.
The added course will immediately appear in the list.
3. Pagination:
Courses are displayed with pagination to show 8 items per page.
Clicking a page number will load the corresponding set of courses.
4. UI Design:
Tailwind CSS is used for clean, responsive, and modern design.
Animations are added for smooth transitions between pages.



Home Page:

Displays a list of courses with pagination (8 items per page).
Allows users to navigate between pages to view more courses.
Login Page:

Users can log in using the credentials stored in localStorage.
Registration Page:

Users can create a new account, which will be saved in localStorage.
Add Course Form:

Provides an input form to add new courses.
Upon submission, the course is displayed in the course list.
Contributing:
Feel free to fork the repository, create a branch for new features or bug fixes, and submit a pull request for review.

Fork the repo.
Create a new branch: git checkout -b feature/your-feature.
Commit your changes: git commit -m 'Add feature'.
Push to your fork: git push origin feature/your-feature.
Submit a pull request.
