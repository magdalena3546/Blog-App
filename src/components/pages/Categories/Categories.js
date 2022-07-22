import CategoriesRender from "../../features/CategoriesRender";
import styles from "./Categories.module.scss";

const Categories = () => {
return(
  <div className={styles.content}>
    <h1>All categories</h1>
    <CategoriesRender />
  </div>
)

};

export default Categories;