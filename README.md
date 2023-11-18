# Coursera

## Course Management Web Application

### Features
In this project, you will find a web application developed using React for showcasing a list of courses and their details, along with a student dashboard. Below are the key features of the project:

#### Frontend Features:

**1. Course Listing:**
   - Fetch a list of sample courses using a dummy API or ready-made backends like Firebase.
   - Display courses in a scrollable list with basic information.
   - Enable searching based on course name and instructor.

**2. Course Details Screen:**
   - Create a screen displaying detailed information about a selected course.
   - Accessible from the course listing screen.
   - Display course information including name, instructor, description, enrollment status, duration, schedule, location, prerequisites, and syllabus.

**3. Student Dashboard:**
   - User-friendly dashboard displaying enrolled courses.
   - Display course name, instructor name, thumbnail, due date, and a progress bar.
   - Implement a feature to mark courses as completed.

**4. Advanced State Management:**
   - Utilize a state management library such as Redux toolkit.

#### Backend Features:

**1. Retrieve Course List API:**
   - Create an API endpoint returning a list of sample courses.

**2. Retrieve API for Course Details:**
   - Create an API endpoint returning details of a particular course.

**3. API for Enroll in a Course:**
   - Create an API endpoint allowing students to enroll in a course.

**4. Retrieve Enrolled Courses:**
   - Implement an API endpoint returning a list of enrolled courses.

**5. Mark Courses as Completed:**
   - Create an API endpoint allowing students to mark a course as completed.

**6. Course Details for Dashboard:**
   - Implement an API endpoint providing detailed information about a specific course for the student's dashboard.

**7. User Authentication:**
   - Implement user authentication to ensure authorized access to the dashboard and enrollment features.
   - Secure API endpoints to require authentication and authorization checks.

**8. Pagination:**
   - Implement pagination for the course list API to limit the number of courses returned per request.

**9. Search Options:**
   - Create an API endpoint allowing students to search for courses based on specific criteria.
   - Search parameters are case-insensitive.

### Docker Integration
To run the full-stack project on your local system, you have two options:

**Option 1:**
   - Clone the project from GitHub.
   - Run `npm install` in the root folder and inside the frontend folder.
   - Execute `npm run dev` in the root folder to run both frontend and backend concurrently.

**Option 2:**
   - Clone the project from GitHub.
   - In the root folder, run `docker-compose up --build -d`.
   - The frontend and backend will run in your local system without npm install.

### API Documentation
The API documentation for the backend project is available in Postman. You can view the documentation [here](https://documenter.getpostman.com/view/29225438/2s9YXpWzAm). Please refer to this documentation for details on API endpoints and usage.

Feel free to explore the project and provide feedback or contribute to its development. Thank you! 🚀
