import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div
      class="container"
      style={{
        textAlign: "center",
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        lineHeight: "30px"
      }}
    >
      <h2>404 Not Found!</h2>
      <h4>Oops! E be like say you don lost o : ( </h4>
      <p>Page not found. Kindly go back home</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Error404;
