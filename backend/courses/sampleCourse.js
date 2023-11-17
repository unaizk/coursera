// Hard coded sample courses

const sampleCourse1 = {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'In progress',
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
    enrollmentStatus: 'In progress',
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
    enrollmentStatus: 'In progress',
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
    enrollmentStatus: 'In progress',
    thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/1*xdo0UBpyszvD7-7EH4TkIA.png', 
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

  const sampleCourse5 = {
    id: 5,
    name: 'Python Programming Basics',
    instructor: 'Alex Johnson',
    description: 'Get started with the fundamentals of Python programming language.',
    enrollmentStatus: 'In progress',
    thumbnail: 'https://www.freecodecamp.org/news/content/images/2022/08/maxresdefault-1.jpeg', // Link to the course thumbnail
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    complete: false,
    prerequisites: 'No prerequisites',
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Python',
        content: 'Overview of Python language and setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Python Syntax and Data Types',
        content: 'Understanding basic syntax and data types in Python.',
      },
    ],
    students: [],
  };
  
  const sampleCourse6 = {
    id: 6,
    name: 'Machine Learning Fundamentals',
    instructor: 'Sophia Rodriguez',
    description: 'Explore the basics of machine learning and its applications.',
    enrollmentStatus: 'In progress',
    thumbnail: 'https://www.freecodecamp.org/news/content/images/2022/01/machine-learning-banner-2.png', // Link to the course thumbnail
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    complete: false,
    prerequisites: 'Basic programming knowledge',
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Machine Learning',
        content: 'Overview of machine learning concepts and algorithms.',
      },
      {
        week: 2,
        topic: 'Supervised Learning',
        content: 'Understanding supervised learning and its applications.',
      },
    ],
    students: [],
  };
  
  const sampleCourse7 = {
    id: 7,
    name: 'Data Science with R',
    instructor: 'Daniel Brown',
    description: 'Learn data science using the R programming language.',
    enrollmentStatus: 'In progress',
    thumbnail: 'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg', // Link to the course thumbnail
    duration: '12 weeks',
    schedule: 'Wednesdays and Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    complete: false,
    prerequisites: 'Basic statistics knowledge',
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to R',
        content: 'Overview of R programming language and data science tools.',
      },
      {
        week: 2,
        topic: 'Data Visualization with ggplot2',
        content: 'Creating visualizations using the ggplot2 library.',
      },
    ],
    students: [],
  };
  
  const sampleCourse8 = {
    id: 8,
    name: 'Full Stack Web Development',
    instructor: 'Ethan Wilson',
    description: 'Become a full-stack web developer with hands-on projects.',
    enrollmentStatus: 'In progress',
    thumbnail: 'https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg', // Link to the course thumbnail
    duration: '14 weeks',
    schedule: 'Thursdays, 6:30 PM - 8:30 PM',
    location: 'Online',
    complete: false,
    prerequisites: 'Intermediate JavaScript knowledge',
    syllabus: [
      {
        week: 1,
        topic: 'Frontend Development with React',
        content: 'Building interactive user interfaces with React.js.',
      },
      {
        week: 2,
        topic: 'Backend Development with Node.js',
        content: 'Creating server-side applications with Node.js and Express.js.',
      },
    ],
    students: [],
  };
  
  
  // Exporting an array containing the sample courses
  export const sampleCourses = [sampleCourse1, sampleCourse2,sampleCourse3, sampleCourse4, sampleCourse5, sampleCourse6, sampleCourse7, sampleCourse8];
  