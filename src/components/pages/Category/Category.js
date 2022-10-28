import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

import { dateToStr } from '../../../utils/dateToStr';
import { getPostByCategory } from '../../../redux/postsRedux';

export const Category = () => {
  const { category } = useParams();
  const posts = useSelector((state) => getPostByCategory(state, category));

  if (posts.length === 0)
    return (
      <>
        <h1>Category: {category}</h1>
        <h3>No posts in this category</h3>
      </>
    );
  return (
    <>
      <h1>Category: {category}</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12} sm={6} lg={4}>
            <Card key={post.id} className='mt-4'>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <strong>Author:</strong> {post.author} <br />
                  <strong>Published:</strong> {dateToStr(post.publishedDate)}
                  <br />
                  <strong>Category:</strong> {post.category}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button variant='primary' as={Link} to={'/post/' + post.id}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
