import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../redux/postsRedux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { dateToStr } from '../../utils/dateToStr';
export const Posts = () => {
  const posts = useSelector(getAllPosts);
  return (
    <Row>
      {posts.map((post) => (
        <Col xs={12} sm={6} lg={4}>
          <Card key={post.id} className='mt-4'>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <strong>Author:</strong> {post.author} <br />
                <strong>Published:</strong> {dateToStr(post.publishedDate)}
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Button variant='primary' as={Link} to={'post/' + post.id}>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
