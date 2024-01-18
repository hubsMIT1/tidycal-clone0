import { Outlet} from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

export default function PrivateRoute({isAuth,user}) {
 
    // if (!isAuth) {
    //     return <Navigate to="/login" />
    // }
    console.log(isAuth)
    return (
        <>
            <Navbar user={user} isAuth={isAuth}/>
            <Outlet />
        </>
      );
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool,
    user:PropTypes.string
  };