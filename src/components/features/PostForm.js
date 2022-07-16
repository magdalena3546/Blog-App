import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate ||'');
  const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e =>{
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content});
  }
return(
  <form>
    <Row>
      <Col md={5}>
        <Form.Group className="my-3">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title}  onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={author} placeholder="Enter author" onChange={e => setAuthor(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <Form.Control type="text" onChange={e => setPublishedDate(e.target.value)} value={publishedDate} placeholder="Enter date" />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)}rows={4} placeholder = "Leave a comment here" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Main content</Form.Label>
          <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)}rows={10} placeholder = "Leave a comment here" />
        </Form.Group>
      </Col>
    </Row>
    <Button variant="primary" onClick={handleSubmit}>{actionText}</Button>
  </form>
)
};
PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  author: PropTypes.string,
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  publishedDate: PropTypes.string,
  content: PropTypes.string,
}

export default PostForm 