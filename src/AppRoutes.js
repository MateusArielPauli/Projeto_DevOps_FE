import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import UserList from "./views/user/UserList";
import UserForm from "./views/user/UserForm";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Register from "./views/user/Register";
import Pacote from "./views/user/Pacote";
import Reserva from "./views/user/Reserva";
import DashboardAdmin from "./views/admin/DashboardAdmin";
import DashboardClient from "./views/user/DashboardClient";

const AppRoutes = () => {
    return(
        <Routes>
            
            <Route path = "/" element={<Home />}/>
            <Route path = "/user" element={<UserList />}/>
            <Route path = "/user/new" element={<UserForm />}/>
            <Route path = "/user/:id" element={<UserForm />}/>
            <Route path = "*" element={<NotFound />}/>
            <Route path = "/login" element={<Login />}/>
            <Route path = "/register" element={<Register />}/>
            <Route path = "/pacote/:id" element={<Pacote />}/>
            <Route path = "/reserva/:id" element={<Reserva />}/>
            <Route path = "/dashboardAdmin" element={<DashboardAdmin />}/>
            <Route path = "/dashboardClient" element={<DashboardClient />}/>
        </Routes>
    );
}

export default AppRoutes;