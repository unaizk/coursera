import React, { useEffect, useState } from 'react';
import Courses from '../component/Courses';
import { useCoursesMutation } from '../slices/userApiSlice';
import { toast } from 'react-toastify';
import Loader from '../component/Loader';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import Caraousel from '../component/Carousel';
import SearchBar from '../component/SearchBar';


const HomeScreen = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6); // Number of courses to display per page
  const [searchCourse,setSearchCourse] = useState([])// state for diplay the course when user search

  const [coursesApiCall, { isLoading }] = useCoursesMutation();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await coursesApiCall().unwrap();
        setCourses(res);
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    };

    fetchCourses();
  }, [coursesApiCall]);

  // Get current courses based on pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = searchCourse.length > 0 ? searchCourse.slice(indexOfFirstCourse, indexOfLastCourse) : courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (searchTerm) => {
    // Convert the search term to lowercase for case-insensitive comparison
    const searchTermLower = searchTerm.toLowerCase();

    // Filter courses based on the search term (case-insensitive)
    const filteredCourses = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTermLower) || 
        course.instructor.toLowerCase().includes(searchTermLower)
    );

    setSearchCourse(filteredCourses);
  };

  
  return (
    <>
      <Container>
        <SearchBar handleSearch={handleSearch} />
      </Container>
      <Row>
        <Col>
          <Caraousel courses={courses} />
        </Col>
      </Row>
      <Container>
        <Row>
          {isLoading && <Loader />}
          {currentCourses.map((course) => (
            <Col key={course.id} xs={12} md={6} lg={4}>
              <Courses courses={course} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3">
            <Pagination>
              {Array.from({ length: Math.ceil(courses.length / coursesPerPage) }, (_, index) => (
                <Pagination.Item 
                  linkStyle={{backgroundColor: index + 1 === currentPage ? 'black' : 'white', color: index + 1 === currentPage ? 'white' : 'black', borderColor : 'black'}}
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
  );
};

export default HomeScreen;
