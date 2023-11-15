
// Define a sample course object
const sampleCourse1 = {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'In-progress',
    thumbnail: 'your.image.here', // Link to the course thumbnail
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      },
      // Additional weeks and topics...
    ],
    students: [],
  };
  
  // Define another sample course object
  const sampleCourse2 = {
    id: 2,
    name: 'Advanced JavaScript',
    instructor: 'Jane Doe',
    description: 'Dive deep into advanced JavaScript concepts and best practices.',
    enrollmentStatus: 'In-progress',
    thumbnail: 'your.image.here', // Link to the course thumbnail
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge', 'Understanding of ES6'],
    syllabus: [
      {
        week: 1,
        topic: 'Closures and Scope',
        content: 'Understanding closure, lexical scope, and their applications.'
      },
      {
        week: 2,
        topic: 'Promises and Async/Await',
        content: 'Working with asynchronous JavaScript using promises and async/await.'
      },
     
    ],
    students: [ ],
  };

  const sampleCourse3 = {
    id: 3,
    name: 'Web Development with React',
    instructor: 'Emily Smith',
    description: 'Build modern web applications using React.js and its ecosystem.',
    enrollmentStatus: 'In-progress',
    thumbnail: 'your.image.here', // Link to the course thumbnail
    duration: '10 weeks',
    schedule: 'Mondays and Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge', 'Familiarity with HTML and CSS'],
    syllabus: [
      {
        week: 1,
        topic: 'React Fundamentals',
        content: 'Introduction to React components, state, and props.'
      },
      {
        week: 2,
        topic: 'React Hooks',
        content: 'Using React hooks for managing state and side effects.'
      },

    ],
    students: [],
  };
  
  const sampleCourse4 = {
    id: 4,
    name: 'Node.js Basics',
    instructor: 'Samuel Green',
    description: 'Learn the fundamentals of Node.js and server-side JavaScript.',
    enrollmentStatus: 'In-progress',
    thumbnail: 'your.image.here', // Link to the course thumbnail
    duration: '6 weeks',
    schedule: 'Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Node.js',
        content: 'Setting up Node.js, understanding event-driven architecture.'
      },
      {
        week: 2,
        topic: 'Express.js',
        content: 'Building web applications with the Express.js framework.'
      },
    ],
    students: [],
  };
  
  // Export an array containing the sample courses
  export const sampleCourses = [sampleCourse1, sampleCourse2,sampleCourse3, sampleCourse4];
  