import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Suggestions = ({ searchTerm }) => {
  const suggestions = [
    { title: 'Branches', content: 'Abstract Branches lets you manage, version, and document your design in one place.' },
    { title: 'Manage your account', content: 'Configure your account settings, such as your email, profile details, and password.' },
    { title: 'Manage organizations, teams, and Projects', content: 'Use Abstract organizations, teams, and projects to organize your people and your work.' },
    { title: 'Manage billing', content: 'Change subscriptions and payment details.' },
    { title: 'Authenticate to Abstract', content: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.' },
    { title: 'Abstract support', content: 'Get in touch with a human.' },
  ];

  const filteredSuggestions = suggestions.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-5">
      <Row>
        {filteredSuggestions.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className='bg-light' style={{height: '100%'}}>
              <Card.Body>
                <Card.Title className='border-bottom pb-3'>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Suggestions;
