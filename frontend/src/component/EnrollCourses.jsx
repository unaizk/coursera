import React from 'react'
import Card from 'react-bootstrap/Card';


const EnrollCourses = ({ courses}) => {
  console.log(courses,'courses');
 

 
  return (

    <Card style={{ width: '20rem' , height : '28rem', marginTop : '30px', marginLeft : '40px' }} className='shadow'>
    <Card.Img variant="top" style={{width: 318}} src={courses.thumbnail} />
    <Card.Body>
      <Card.Title>{courses.name}</Card.Title>
      <Card.Text>
        {courses.instructor}
      </Card.Text>
      <Card.Text><span style={{ fontWeight: 'bold' }}>Description</span>: {courses.description}</Card.Text>
      <Card.Text><span style={{ fontWeight: 'bold' }}>Duration</span>: {courses.duration}</Card.Text>
      <Card.Text><span style={{ fontWeight: 'bold' }}>Status</span>: {courses.enrollmentStatus}</Card.Text>
      
    </Card.Body>
  </Card>
  )
}

export default EnrollCourses