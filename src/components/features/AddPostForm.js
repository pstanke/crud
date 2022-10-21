import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Col xs={8} sm={6}>
        <Form.Group
          className='my-3'
          controlId='formGroupTitle'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder='Enter title' />
        </Form.Group>
        <Form.Group
          className='mb-3'
          controlId='formGroupAuthor'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <Form.Label>Author</Form.Label>
          <Form.Control placeholder='Enter author' />
        </Form.Group>
        <Form.Group
          className='mb-3'
          controlId='formGroupDate'
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
        >
          <Form.Label>Published</Form.Label>
          <Form.Control placeholder='Enter date' />
        </Form.Group>
      </Col>
      <Form.Group className='mb-3'>
        <Form.Label>Short description</Form.Label>
        <FloatingLabel
          controlId='floatingTextarea1'
          label='Leave a comment here'
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        >
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Main content</Form.Label>
        <FloatingLabel
          controlId='floatingTextarea2'
          label='Leave a comment here'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Form.Group>
      <Button type='submit' variant='primary' onClick={() => navigate(-1)}>
        Add post
      </Button>
    </Form>
  );
};
export default AddPostForm;
