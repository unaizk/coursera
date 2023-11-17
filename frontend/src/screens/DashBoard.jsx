import React, { useEffect, useState } from 'react';
import { useEnrollingCoursesMutation } from '../slices/userApiSlice';
import { toast } from 'react-toastify';
import Loader from '../component/Loader';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import SearchBar from '../component/SearchBar';
import { Link } from 'react-router-dom';
import EnrollCourses from '../component/EnrollCourses';
import Card from 'react-bootstrap/Card';

const DashBoard = () => {
  const [enrollCourses, setEnrollCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6); // Number of courses to display per page
  const [searchCourse,setSearchCourse] = useState([])// state for diplay the course when user search

  const [enrollCoursesApiCall, { isLoading }] = useEnrollingCoursesMutation();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await enrollCoursesApiCall().unwrap();
        setEnrollCourses(res);
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
      console.log('render');
    };

    fetchCourses();
  }, []);

  // Get current courses based on pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = searchCourse.length > 0 ? searchCourse.slice(indexOfFirstCourse, indexOfLastCourse) : enrollCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (searchTerm) => {
    // Convert the search term to lowercase for case-insensitive comparison
    const searchTermLower = searchTerm.toLowerCase();
  
    // Filter courses based on the search term (case-insensitive)
    const filteredCourses = enrollCourses.filter(
      (course) =>
        course.name.toLowerCase() === searchTermLower || 
        course.instructor.toLowerCase() === searchTermLower
    );
  
    setSearchCourse(filteredCourses);
  };
  

  
  return (
    enrollCourses.length > 0 ? (
      <>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lato, sans-serif', fontSize: '50px', fontWeight: 'bold', marginTop: '30px' }}>
          DASHBOARD
        </h1>
        <Container>
          <SearchBar handleSearch={handleSearch} />
        </Container>
  
        <Container>
          <Row>
            {isLoading && <Loader />}
            {currentCourses.map((course) => (
              <Col key={course.id} xs={12} md={6} lg={4}>
                <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
                  <EnrollCourses courses={course} />
                </Link>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <Pagination>
                {Array.from({ length: Math.ceil(enrollCourses.length / coursesPerPage) }, (_, index) => (
                  <Pagination.Item
                    linkStyle={{ backgroundColor: index + 1 === currentPage ? 'black' : 'white', color: index + 1 === currentPage ? 'white' : 'black', borderColor: 'black' }}
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Col>
          </Row>
        </Container>
      </>
    ) : (
      
      <Card className="mx-auto shadow p-3 mb-5 bg-white rounded text-center" style={{ width: '80%', height: 'fit-content', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Card.Body>
       
          <Card.Text>
            <h5 style={{ fontFamily: 'Lato, sans-serif', fontSize: '50px', fontWeight: 'bold' }}>
              You have not enrolled in any Courses
            </h5>
          </Card.Text>
        </Card.Body>
      </Card>

    )
  );
}

export default DashBoard