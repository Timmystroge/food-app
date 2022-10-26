import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div class="container" style="{text-align: center; color: red;}">
      <h2>404 Not Found</h2>
      <h4>Oops! E be like say you don lost o :( </h4>
      <p>Page not found. Kindly go back home</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Error404;
