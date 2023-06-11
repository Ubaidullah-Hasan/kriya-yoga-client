import { Outlet } from "react-router-dom";
import DashHeader from "../Pages/Dashboard/Compo/DashHeader";


const Dashboard = () => {
    
    return (
        <div>
            <DashHeader></DashHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;