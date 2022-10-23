import { useState } from 'react';
import { Form, FloatingLabel, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [content, setContent] = useState(props.content || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const id = props.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content, id });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Col xs={8} sm={6}>
        <Form.Group className='my-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            placeholder='Enter author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Published</Form.Label>
          <Form.Control
            placeholder='Enter date'
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </Form.Group>
      </Col>

      <Form.Group className='mb-3'>
        <Form.Label>Short description</Form.Label>
        <FloatingLabel label='Leave a comment here'>
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '100px' }}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Main content</Form.Label>
        <FloatingLabel label='Leave a comment here'>
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '100px' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>

      <Button type='submit' variant='primary'>
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  content: PropTypes.string,
  shortDescription: PropTypes.string,
};

export default PostForm;
