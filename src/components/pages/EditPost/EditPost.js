import EditPostForm from '../../features/EditPostForm';
import { Row, Col } from 'react-bootstrap';

const EditPost = () => {
  return (
    <Row className='d-flex justify-content-center'>
      <Col xs={8}>
        <h1>EditPost</h1>
        <EditPostForm />
      </Col>
    </Row>
  );
};
export default EditPost;
