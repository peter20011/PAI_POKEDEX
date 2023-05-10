import { Routes, Route } from "react-router-dom";
import { Error404, Home, Login,SignUP,Favorite,Owned,ChangePassword,Description} from "./pages";
import PrivateRoutes from "./components/Atoms/Route/PrivateRoutes";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<Error404 />} />
    <Route path="/login" element={<Login />}/>
    <Route path="/signUP" element={<SignUP />}/>
    {/* <Route element={<PrivateRoutes/>}> */}
      <Route path="/app/Home" element={<Home />} />
      <Route path="/app/favorite" element={<Favorite />} />
      <Route path="/app/owned" element={<Owned/>}/>
      <Route path="/app/changepassword" element={<ChangePassword/>}/>
      <Route path="/description/:name" element={<Description />} />
    {/* </Route> */}
  </Routes>
);

export default AppRouter;
