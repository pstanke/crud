import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FloatingLabel, Button, Col } from 'react-bootstrap';

export const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(
    props.publishedDate || new Date()
  );
  const [content, setContent] = useState(props.content || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [contentError, setContentError] = useState(false);
  const [publishedDateError, setPublishedDateError] = useState(false);
  const id = props.id;
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setPublishedDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, id });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Col xs={8} sm={6}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register('title', { required: true, minLength: 3 })}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Enter title'
          />
          {errors.title && (
            <small className='d-block form-text text-danger mt-2'>
              This field is required (min.3)
            </small>
          )}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicAuthor'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register('author', { required: true, minLength: 3 })}
            placeholder='Enter author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className='d-block form-text text-danger mt-2'>
              This field is required (min.3)
            </small>
          )}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPublishedDate'>
          <Form.Label>Published</Form.Label>
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
          {publishedDateError && (
            <small className='d-block form-text text-danger mt-2'>
              This filed is required
            </small>
          )}
        </Form.Group>
      </Col>

      <Form.Group className='mb-3' controlId='formBasicShortDescription'>
        <Form.Label>Short description</Form.Label>
        <FloatingLabel label='Leave a comment here'>
          <Form.Control
            {...register('shortDescription', { required: true, minLength: 20 })}
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '100px' }}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          {errors.shortDescription && (
            <small className='d-block form-text text-danger mt-2'>
              This field is required (min.20)
            </small>
          )}
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicContent'>
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
          value={content}
          theme='snow'
          onChange={setContent}
        />
        {contentError && (
          <small className='d-block form-text text-danger mt-2'>
            This filed is required
          </small>
        )}
      </Form.Group>

      <Button className='mt-5' type='submit' variant='primary'>
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
  publishedDate: PropTypes.object,
  content: PropTypes.string,
  shortDescription: PropTypes.string,
};
