import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const toPath = () => {
    navigate("/thanks");
  };

  return (
    <div>
      Cart page
      <button onClick={toPath}>Buy</button>
    </div>
  );
}

export default Cart;
