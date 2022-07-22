import { useParams } from "react-router-dom";
import CategoryRender from "../features/CategoryRender";

const Category = () => {
  const {category} = useParams();
  return(
    <>
      <h1>Category: {category}</h1>
      <CategoryRender />
    </>
  )
};

export default Category;