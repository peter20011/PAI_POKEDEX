import { Routes, Route } from "react-router-dom";
import { Error404, Home, Login,SignUP,Favorite,Owned,ChangePassword} from "./pages";


const AppRouter = () => (
  <Routes>
    <Route path="*" element={<Error404 />} />
    <Route path="/app/Home" element={<Home />} />
    <Route path="/login" element={<Login />}/>
    <Route path="/signUP" element={<SignUP />}/>
    <Route path="/app/favorite" element={<Favorite />} />
    <Route path="app/owned" element={<Owned/>}/>
    <Route path="app/changepassword" element={<ChangePassword/>}/>
  </Routes>
);

export default AppRouter;
