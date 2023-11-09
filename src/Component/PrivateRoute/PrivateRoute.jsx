import { useContext } from "react";
import PropTypes from "prop-types"
import { Navigate, useLocation,   } from "react-router-dom";
import { AuthContext } from "../ProviderFile/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location = useLocation();
    // const nav =useNavigate()
    console.log(loading)
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    
  

    if(user){
        return children 
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
    //  return nav('/login');
};


export default PrivateRoute;
PrivateRoute.propTypes = {children:PropTypes.node}