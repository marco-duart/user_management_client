import { BrowserRouter, Routes, Route } from "react-router-dom";
import Baselayout from "../components/common/base-layout";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProfilePage from "../pages/profile";
import UsersPage from "../pages/users";
import { PrivateRoute } from "../components/private-route";
import { UserDTO } from "../services/user/DTO";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<Baselayout />}>
          <Route path="/users" element={<PrivateRoute requiredRole={UserDTO.Role.ADMIN}><UsersPage /></PrivateRoute>}></Route>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
