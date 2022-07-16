import EditPostForm from "../../features/EditPostForm";
import styles from "./EditPost.module.scss"
const EditPost = () => {
  return(
    <div className={styles.content}>
      <h1>Edit Post</h1>
      <EditPostForm />
    </div>
  )
};

export default EditPost;