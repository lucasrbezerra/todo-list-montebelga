import { Route, Routes } from "react-router-dom";
import {Groups, Tasks} from "../pages";

export default function Router () {
    return (
        <Routes>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/groups" element={<Groups/>}/>
        </Routes>
    );
}