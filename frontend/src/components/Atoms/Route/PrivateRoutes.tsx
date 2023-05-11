import exp from 'constants'
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = ()=>{
  const auth={'token':sessionStorage.getItem("userToken")}
  return(
    auth.token ? <Outlet/> : <Navigate to="/login"/>
  )
};

export default PrivateRoutes