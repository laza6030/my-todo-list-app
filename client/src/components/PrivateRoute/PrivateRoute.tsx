import { Navigate } from "react-router-dom";
import { isUserConnected } from "../../helpers";

interface IProps {
  children: React.ReactElement;
}

const PrivateRoute = ({ children }: IProps) => {
  if (!isUserConnected()) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default PrivateRoute;
