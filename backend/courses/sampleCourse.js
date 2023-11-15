

const sampleCourse1 = {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://www.trycatchclasses.com/wp-content/uploads/2020/02/React-Native-1.jpg', // Link to the course thumbnail
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    complete : false,
    prerequisites: 'Basic JavaScript knowledge',
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
     
    ],
    students: [],
  };
  
  
  const sampleCourse2 = {
    id: 2,
    name: 'Advanced JavaScript',
    instructor: 'Jane Doe',
    description: 'Dive deep into advanced JavaScript concepts and best practices.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg', // Link to the course thumbnail
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    complete : false,
    prerequisites: 'Intermediate JavaScript knowledge', 
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
    enrollmentStatus: 'Open',
    thumbnail: 'https://elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg', // Link to the course thumbnail
    duration: '10 weeks',
    schedule: 'Mondays and Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    complete : false,
    prerequisites: 'Intermediate JavaScript knowledge',
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
    enrollmentStatus: 'Open',
    thumbnail: 'https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/f52b0521ed2e.jpg', 
    duration: '6 weeks',
    schedule: 'Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    complete : false,
    prerequisites: 'Basic JavaScript knowledge',
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
  
  // Exporting an array containing the sample courses
  export const sampleCourses = [sampleCourse1, sampleCourse2,sampleCourse3, sampleCourse4];
  