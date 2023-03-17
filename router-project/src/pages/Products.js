import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 'P1', title: "Product 1" },
  { id: 'P2', title: "Product 2" },
  { id: 'P3', title: "Product 3" },
];
const ProductPage = () => {
  return (
    <>
      <h2>My Product Page</h2>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductPage;
