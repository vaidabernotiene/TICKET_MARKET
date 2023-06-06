import { useContext, useEffect } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { AuthenticationContext } from "./AuthenticationContext";
import { HTTP } from "../constants";

const Protected = ({ isLoading, setIsLoading }) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);
  const { setUsername } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(HTTP + "/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
          setIsLoading(false);
          setUsername(response.data.name);
        }
      });
  }, [navigate, setIsSignedIn, setIsLoading, location.pathname, setUsername]);

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (!isSignedIn) {
    console.log('Successfully Logged out!')
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default Protected;
