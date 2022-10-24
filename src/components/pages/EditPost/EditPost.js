import { Row, Col } from 'react-bootstrap';

import { EditPostForm } from '../../features/EditPostForm';

export const EditPost = () => {
  return (
    <Row className='d-flex justify-content-center'>
      <Col xs={8}>
        <h1>EditPost</h1>
        <EditPostForm />
      </Col>
    </Row>
  );
};
