import { useSelector } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getAllCategories } from '../../../redux/categoriesRedux';

export const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <>
      <h1>All Categories</h1>
      <Row className=' justify-content-center'>
        {categories.map((category) => (
          <Col key={category} xs={8}>
            <Button
              variant='outline-primary'
              className='my-2 d-flex justify-content-center '
              as={Link}
              to={'/category/' + category}
            >
              {category}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};
