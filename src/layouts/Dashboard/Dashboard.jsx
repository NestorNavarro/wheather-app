import { Outlet } from "react-router-dom";
//Our Components
import NavBar from "../NavBar";

const Dashboard = () => {
	return (
		<div className="p-5">
			<NavBar />
			<div className="mt-4">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
