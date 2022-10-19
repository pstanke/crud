import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../redux/postsRedux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Posts = () => {
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
                <strong>Published:</strong> {post.publishedDate}
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
export default Posts;
