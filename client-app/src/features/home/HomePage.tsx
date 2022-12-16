import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1>Home Page</h1>
      <h3>
        Go to <Link to='/activities'>Activities</Link>
      </h3>
    </Container>
  );
};

export default HomePage;
