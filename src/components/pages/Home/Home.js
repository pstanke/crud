import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Posts } from '../../features/Posts';

export const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>All Posts</h1>
        </Col>
        <Col className='d-flex justify-content-end align-items-center'>
          <Button variant='outline-info' as={Link} to={'post/add'}>
            Add post
          </Button>
        </Col>
      </Row>
      <Posts />
    </>
  );
};
