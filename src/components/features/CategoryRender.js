import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByCategory } from "../../redux/postsRedux";
import PostDescription from "../views/PostDescription";
import Row from 'react-bootstrap/Row';
const CategoryRender = () => {
  const {category} = useParams();
  const posts = useSelector(state => getPostByCategory(state, category));
  if (posts.length===0) return <p className="mt-4">No posts in this category...</p>
  return(
    <Row xs={1} md={3}>
      {posts.map(post => <PostDescription key={post.id} {...post} id={post.id} />)}
    </Row>
  )
};

export default CategoryRender;