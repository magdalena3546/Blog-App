import AddPostForm from "../../features/AddPostForm";
import style from "./AddPost.module.scss"
const AddPost = () => {
  return(
    <div className={style.content}>
      <header>
        <h2>AddPost</h2>
      </header>
      <AddPostForm />
    </div>
  )
};

export default AddPost;