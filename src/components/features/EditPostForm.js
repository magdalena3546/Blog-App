import { useDispatch } from 'react-redux';
import { editPost, getPostById } from '../../redux/postsRedux';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import dateToStr from '../../utils/dateToStr';
const EditPostForm = () => {
  const {id} = useParams();
  const postData = useSelector(state => getPostById(state, id))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = post =>{
    dispatch(editPost({...post, id}));
    navigate('/');
  }
  if (!postData) return <Navigate to = "/" />
   return(
    <PostForm action={handleSubmit} actionText = "Edit post" title={postData.title} author={postData.author} publishedDate={postData.publishedDate} shortDescription={postData.shortDescription} content={postData.content} />
    )
};

export default EditPostForm;