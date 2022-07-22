import { Card } from "react-bootstrap";
import { useSelector } from "react-redux"
import { getAllCategories } from "../../redux/categoriesRedux"
import {Link} from 'react-router-dom';
import shortid from "shortid";

const CategoriesRender = () => {
  const categories = useSelector(getAllCategories);
  return(
    <div className="mt-4">
      {categories.map(category => <Card key={shortid()} className="px-2 py-3" as = {Link} to= {`/category/${category}`}>{category}</Card>)}
    </div>
  )
};
export default CategoriesRender;
