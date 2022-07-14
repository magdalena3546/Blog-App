import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from "react-router-dom";


const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(addPost({title, author, publishedDate, shortDescription, content}));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('../', { replace: true });
  }
return(
  <form onSubmit={handleSubmit}>
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
    <Button variant="primary" onClick={handleSubmit}>Add post</Button>
  </form>
)
};
export default AddPostForm;