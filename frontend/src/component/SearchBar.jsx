
import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ handleSearch }) => {
  return (
    <Form style={{ marginTop: '50px' }}>
      <Form.Control
        type="text"
        placeholder="Search courses"
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: '200px', boxShadow: 'none', borderColor : 'black' }} 
      />
    </Form>
  );
};

export default SearchBar;

