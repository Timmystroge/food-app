import { Navigate, Outlet } from "react-router-dom";
// create Authentication
const Auth = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user;
};
// protect authentication if user not registered
const ProtectedAuth = () => {
  const userAuthentication = Auth();
  return userAuthentication ? <Outlet /> : <Navigate to={"/signup"} />;
};

export default ProtectedAuth;
