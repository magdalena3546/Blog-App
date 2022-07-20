import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById, removePost } from "../../redux/postsRedux";
import { Navigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import dateToStr from "../../utils/dateToStr";


const Post = () => {
  const {id}= useParams();
  const postData = useSelector(state => getPostById(state, id));
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = e => {
    e.preventDefault();
    dispatch(removePost(id));
  };
  if (!postData) return <Navigate to="/" />
  return(
    <>
      <div className="d-sm-flex justify-content-sm-around">
        <div >
          <h2>{postData.title}</h2>
          <p className='mt-4'><strong>Author: </strong>{postData.author}</p>
          <p><strong>Published: </strong>{dateToStr(postData.publishedDate)}</p>
          <p dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
        <div>
            <Button  variant="outline-info" as={Link} to={`/post/edit/${id}`}>Edit</Button>
            <Button className="mx-2" variant = "outline-danger" onClick={handleShow}>Delete</Button>
          </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" onClick={handleRemove}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Post;