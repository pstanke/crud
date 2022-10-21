import AddPostForm from '../../features/AddPostForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AddPost = () => {
  return (
    <Row className='d-flex justify-content-center'>
      <Col xs={8}>
        <h1> AddPost</h1>
        <AddPostForm />
      </Col>
    </Row>
  );
};
export default AddPost;
