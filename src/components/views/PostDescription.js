import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const PostDescription = props => {
  return(
    <Col>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text><strong>Author: </strong>{props.author}</Card.Text>
          <Card.Text><strong>Published: </strong>{props.publishedDate}</Card.Text>
          <Card.Text>{props.shortDescription}</Card.Text>
          <Button  as={Link} to= {`/post/${props.id}`} variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default PostDescription; 