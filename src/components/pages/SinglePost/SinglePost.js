import { getPostById, removePost } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Card, Col, Button, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SinglePost = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(removePost(id));
  };

  if (!postData) return <Navigate to='/' />;
  return (
    <>
      <Row className='d-flex justify-content-center'>
        <Col xs={8}>
          <Card border='light' className='mt-4'>
            <Card.Body>
              <Row>
                <Col>
                  <h1>{postData.title}</h1>
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                  <Button
                    variant='outline-info'
                    as={Link}
                    to={'/post/edit/' + postId}
                    className='mx-1'
                  >
                    Edit
                  </Button>
                  <Button
                    variant='outline-danger'
                    className='mx-1'
                    onClick={handleShow}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
              <Card.Text>
                <strong>Author:</strong> {postData.author} <br />
                <strong>Published:</strong> {postData.publishedDate}
              </Card.Text>
              <Card.Text>{postData.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this post from the app.
          <br />
          Are you sure, you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant='danger'
            onClick={() => {
              handleClose();
              deletePost(postData.id);
            }}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SinglePost;
