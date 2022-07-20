import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import PostDescription from "../views/PostDescription";
import Row from 'react-bootstrap/Row';
import dateToStr from '../../utils/dateToStr';
const PostRender = () => {
  const posts = useSelector(getAllPosts);
  return(
    <Row xs={1} md={3}>
      {posts.map(post => <PostDescription key={post.id} date= {dateToStr(post.publishedDate)} {...post} id={post.id} />)}
    </Row>
  )
};
export default PostRender;