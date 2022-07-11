import PostRender from "../features/PostRender";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Home = () => {
  return(
    <>
      <div className="d-sm-flex justify-content-sm-between">
        <h1>All posts</h1>
        <Button className ="align-self-center"  as={ Link } to="/post/add" variant="outline-info">Add post</Button>
      </div>
      <PostRender />
    </>
  )
};

export default Home;