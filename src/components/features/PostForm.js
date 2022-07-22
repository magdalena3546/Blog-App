import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';
import shortid from 'shortid';
const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate ||'');
  const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const categories = useSelector(getAllCategories);

  const handleSubmit = () =>{
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate){
      action({ title, author, publishedDate, shortDescription, content, category});
    }
    console.log(categories);
  }
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
return(
  <form>
    <Row>
      <Col md={5}>
        <Form.Group className="my-3">
          <Form.Label>Title</Form.Label>
          <Form.Control {...register("title", { required: true, minLength: 3 })} value={title}  onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
          {errors.title?.type === 'required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
          {errors.title?.type === 'minLength' && <small className="d-block form-text text-danger mt-2">The title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control {...register("author", { required: true, minLength: 3 })} type="text" value={author} placeholder="Enter author" onChange={e => setAuthor(e.target.value)}/>
          {errors.author?.type === 'required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
          {errors.author?.type === 'minLength' && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={ (date) => setPublishedDate(date)} placeholder="Enter date" />
          {dateError && <small className="d-block form-text text-danger mt-2">Date is required</small>}
        </Form.Group>
        <Form.Control as="select" value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(elm=> <option key={shortid()} value={elm}>{elm}</option>)}
        </Form.Control>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control {...register("shortDescription", { required: true, minLength: 20 })} as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)}rows={4} placeholder = "Leave a comment here" />
          {errors.shortDescription?.type === 'required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
          {errors.shortDescription?.type === 'minLength' && <small className="d-block form-text text-danger mt-2">The shortDescription is too short (min is 20)</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Main content</Form.Label>
          <ReactQuill  value={content} onChange={setContent} placeholder = "Leave a comment here" />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
      </Col>
    </Row>
    <Button variant="primary" onClick={validate(handleSubmit)}>{actionText}</Button>
  </form>
)
};
PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  author: PropTypes.string,
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  publishedDate: PropTypes.object,
  content: PropTypes.string,
}

export default PostForm 