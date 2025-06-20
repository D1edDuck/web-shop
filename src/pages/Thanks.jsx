import { useNavigate } from "react-router-dom";

function Thanks() {
  const navigate = useNavigate();

  const timer = setTimeout(() => {
    navigate(-1, { replace: true });
  }, 5000);

  return <div>Thanks for buy, wait 5 second, back to home page</div>;
}

export default Thanks;
