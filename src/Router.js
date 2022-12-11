import { createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom";
import App from "./App";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";
import Home from "./Containers/Home/Home";


const Router = createBrowserRouter(
    createRoutesFromElements(

        <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
    )
)

export default Router;