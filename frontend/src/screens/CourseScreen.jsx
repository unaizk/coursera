import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useCourseMutation, useEnrolledCourseMutation } from '../slices/userApiSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Loader from '../component/Loader';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const CourseScreen = () => {
    const { courseId } = useParams();
    const { userInfo } = useSelector((state) => state.auth);

    const [courseApiCall, { isLoading: isLoadingCourse }] = useCourseMutation();
    const [enrollCourseApiCall, { isLoading: isLoadingEnrollCourse }] = useEnrolledCourseMutation();
    const [course, setCourse] = useState(null);
    const [enrollCourse, setEnrollCourse] = useState(null)

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                console.log("Fetching course...");
                const courseData = await courseApiCall(courseId).unwrap();
                if (!userInfo) {
                    console.log('Regular Course:', courseData);
                    setCourse(courseData);
                } else if (userInfo && userInfo._id) {
                    const isUserEnrolled = courseData.students.includes(userInfo._id);

                    if (isUserEnrolled) {
                        const enrolledCourseData = await enrollCourseApiCall(courseId).unwrap();
                        console.log('Enrolled Course:', enrolledCourseData);
                        setEnrollCourse(enrolledCourseData);
                    } else {
                        setCourse(courseData);
                    }
                }
            } catch (error) {
                console.error("Error fetching course:", error);
                toast.error(error?.data?.message || error.error);
            }
        };

        fetchCourse();
    }, [courseApiCall, courseId, enrollCourseApiCall, userInfo]);

    return (
        <>
        {enrollCourse ? (
            // Render content for enrolled course
            <Card className="mx-auto shadow p-3 mb-5 bg-white rounded" style={{ width: '80%', height: 'fit-content', marginTop: '50px' }}>
                   <Card.Img
                    variant="top"
                    src={enrollCourse?.thumbnail}
                    style={{ width: '1320px', height: '400px', objectFit: 'cover' }}
                />
                {isLoadingEnrollCourse  && <Loader />}
                <Card.Body className="text-center">
                    <Card.Title>{enrollCourse?.name}</Card.Title>
                    <Card.Text>{enrollCourse?.instructor}</Card.Text>
                    <Card.Text><span style={{ fontWeight: 'bold' }}>Description</span>: {enrollCourse?.description}</Card.Text>
                    <Card.Text><span style={{ fontWeight: 'bold' }}>Duration</span>: {enrollCourse?.duration}</Card.Text>
                    <Card.Text><span style={{ fontWeight: 'bold' }}>Status</span>: {enrollCourse?.enrollmentStatus}</Card.Text>
                    <Card.Text><span style={{ fontWeight: 'bold' }}>Location</span>: {enrollCourse?.location}</Card.Text>
                    <Card.Text><span style={{ fontWeight: 'bold' }}>Prerequisites</span>: {enrollCourse?.prerequisites}</Card.Text>
                    <Card.Title><span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Syllabus</span></Card.Title>
                    {enrollCourse?.syllabus && enrollCourse.syllabus.map((item, index) => (
                        <div key={index}>
                            <p><span style={{ fontWeight: 'bold' }}>Week {item.week}:</span> {item.topic}</p>
                            <p>{item.content}</p>
                        </div>
                    ))}

                </Card.Body>
            </Card>
        ) : course ? (
            <>
     
            <Card className="mx-auto shadow p-3 mb-5 bg-white rounded" style={{ width: '80%', height: 'fit-content', marginTop: '50px' }}>
                <Card.Img
                    variant="top"
                    src={course?.thumbnail}
                    style={{ width: '1320px', height: '400px', objectFit: 'cover' }}
                />
                {isLoadingCourse  && <Loader />}
                <Card.Body className="text-center">
                    <Card.Title>{course?.name}</Card.Title>
                    <Card.Text>{course?.instructor}</Card.Text>
                    <Card.Text><span style={{ fontWeight: 'bold' }}>Description</span>: {course?.description}</Card.Text>
                    <Card.Text><span style={{ fontWeight: 'bold' }}>Duration</span>: {course?.duration}</Card.Text>
                    {userInfo ? <Button variant='dark' className='mt-3' size='lg'> Enroll</Button> :''}
                    
                </Card.Body>
            </Card>
        
           </>
        ) : (
            <Card className="mx-auto shadow p-3 mb-5 bg-white rounded" style={{ width: '80%', height: 'fit-content', marginTop: '50px' }}>
            <Card.Body className="text-center">
                <Card.Text>
                    Something went wrong. Please try again later!
                </Card.Text>
            </Card.Body>
        </Card>
        )}
    </>
    );
};

export default CourseScreen;
