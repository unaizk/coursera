import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useCourseMutation, useEnrolledCourseMutation } from '../slices/userApiSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Loader from '../component/Loader';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useEnrollingCourseMutation } from '../slices/userApiSlice';
import { useCompletedCourseMutation } from '../slices/userApiSlice';

import ToggleButton from 'react-bootstrap/ToggleButton';


const CourseScreen = () => {
    const { courseId } = useParams();
    const { userInfo } = useSelector((state) => state.auth);


    const [courseApiCall, { isLoading: isLoadingCourse }] = useCourseMutation();
    const [enrollCourseApiCall, { isLoading: isLoadingEnrollCourse }] = useEnrolledCourseMutation();
    const [enrollingCourseApiCall, {isLoading : isLoadingEnrollingCourse}] = useEnrollingCourseMutation()
    const [course, setCourse] = useState(null);
    const [enrollCourse, setEnrollCourse] = useState(null)
    const [checked, setChecked] = useState(false);
    const [completeCourseApi, {isLoading : isLoadingCompleteCourse}] = useCompletedCourseMutation()

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                console.log("Fetching course...");
                const courseData = await courseApiCall(courseId).unwrap();
                if (!userInfo) {
                    console.log('Regular Course:', courseData);
                    setCourse(courseData);
                } else if (userInfo && userInfo._id) {
                    const isUserEnrolled = courseData.students.some(studentId => studentId.userId == userInfo._id);
                    if (isUserEnrolled) {
                       
                        console.log('Enrolled Course:', courseData);
                        setEnrollCourse(courseData);
                        setChecked(courseData.complete)
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
        
    }, [courseApiCall, courseId, enrollCourseApiCall, userInfo, completeCourseApi]);

    
    const enrollingCourse = async (courseId) => {
        try {
            console.log(courseId);
            // Making the API call to enroll the course
            await enrollingCourseApiCall({ courseId }).unwrap();
    
            // Refetching the enrolled course details
            const enrolledCourseData = await enrollCourseApiCall(courseId).unwrap();
    
            // Updating enrollCourse state with the new data
            setEnrollCourse(enrolledCourseData);
        } catch (error) {
            console.error("Error enrolling course:", error);
            toast.error(error?.data?.message || error.error);
        }
    };                   
    
    const handleToggleClick = async () => {
        try {
            const res = await completeCourseApi({ courseId});
            setChecked(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    



    return (
        <>
        {enrollCourse ? (
            // Rendering content for enrolled course
            <Card className="mx-auto shadow p-3 mb-5 bg-white rounded" style={{ width: '80%', height: 'fit-content', marginTop: '50px' }}>
                   <Card.Img
                    variant="top"
                    src={enrollCourse?.thumbnail}
                    style={{ width: '1320px', height: '400px', objectFit: 'cover' }}
                />
                {isLoadingEnrollCourse  && <Loader />}
                {isLoadingEnrollingCourse  && <Loader />}
                
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
                   <ToggleButton
                    className="mb-2"
                    id="toggle-check"
                    type="checkbox"
                    variant={checked ? 'dark' : 'outline-dark'}
                    checked={checked}
                    value="1"
                    
                    onClick={() => handleToggleClick(enrollCourse.id)}
                    >
                    {checked ? 'Completed' : 'Incomplete'}
                    </ToggleButton>

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
                    {userInfo ? <Card.Text><span style={{ fontWeight: 'bold' }}>Status</span>: {course?.enrollmentStatus}</Card.Text> : <span style={{color : 'red', fontWeight: 'bold'}}>Sign in for Enroll the course</span>}
                    {userInfo ?  <Button onClick={() => enrollingCourse(course.id)} variant='dark' className='mt-3' size='lg'>Enroll now</Button> :''}
                    
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
