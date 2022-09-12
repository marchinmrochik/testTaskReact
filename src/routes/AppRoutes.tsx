import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import { Products, SignIn, SignUp } from "../pages";
import { PrivateRoute } from "../components";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.signIn} element={<SignIn/>} />
        <Route path={routes.singUp} element={<SignUp/>} />
        <Route path={routes.products} element={
            <PrivateRoute>
                <Products />
            </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
};
