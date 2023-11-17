// Carousel.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Caraousel = ({ courses }) => {
  return (
    <Carousel
      style={{
        marginTop : '20px',
        width: '77%', // Adjust the width as needed
        height: '55vh', // Set height to half of the width
        marginLeft: 'auto', // Center the carousel by adding margin left and right
        marginRight: 'auto',
        borderRadius: '10px', // Add border-radius for rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
        overflow: 'hidden', // Hide overflowing content,

      }}
    >
      {courses.map((course) => (
        <Carousel.Item key={course.id}>
         <img
            src={course.thumbnail}
            alt={course.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '100%' }}
          />
          <Carousel.Caption>
            <h3>{course.name}</h3>
            <p>{course.instructor}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Caraousel;
