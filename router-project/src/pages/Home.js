import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/product");
  }

  return (
    <div >
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="product"> the list of product</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  );
};
export default HomePage;
