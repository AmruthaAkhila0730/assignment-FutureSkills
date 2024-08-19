import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to the parent component
  };

  return (
    <Container className="text-center my-5">
      <h1>How can we help you?</h1>
      <Form.Control 
        type="text" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleSearchChange}
        className="mt-3 mx-auto" 
        style={{ maxWidth: '600px' }}
      />
    </Container>
  );
};

export default Hero;
