import AddPostForm from "../../features/AddPostForm";
import styles from "./AddPost.module.scss"
const AddPost = () => {
  return(
    <div className={styles.content}>
      <header>
        <h2>Add Post</h2>
      </header>
      <AddPostForm />
    </div>
  )
};

export default AddPost;