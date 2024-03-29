
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <li className="categories__item">
      <Link to={`${product.id}`}>
        <img
          className="categories__item-img"
          src={`./backend/public/${product.image}`}
        ></img>
        <h3 className="categories__item-name">{product.title}</h3>
      </Link>
    </li>
  );
};

export default Product;
