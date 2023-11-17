import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Courses = ({ courses}) => {
  return (
     
      <Card style={{ width: '20rem' , height : '19rem', marginTop : '60px', marginLeft : '40px' }} className='shadow'>
        <Card.Img variant="top" style={{width: 318}} src={courses.thumbnail} />
        <Card.Body>
          <Card.Title>{courses.name}</Card.Title>
          <Card.Text>
            {courses.instructor}
          </Card.Text>
        </Card.Body>
      </Card>
    
  );
};

export default Courses;
