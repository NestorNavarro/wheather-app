import { Suspense, lazy }      from "react";
import { Navigate, useRoutes } from "react-router-dom";
// rsuite
import { Loader } from "rsuite";
// layouts
import { DashboardLayout } from "layouts";


const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={
			<div className="loading-center v-100">
				<Loader size="lg" content="Cargando.." />
			</div>
		}
		>
			<Component {...props} />
		</Suspense>
	);
};

// Dashboard
const Users        = Loadable(lazy(() => import("pages/UsersCardsPage")));
const UsersDetails = Loadable(lazy(() => import("pages/UserDetailsPage")));


export default function Router() {
	return useRoutes([
		{
			path    : "/",
			element : <Navigate to="/dashboard/users" replace />,
		},
		{
			path     : "/dashboard",
			element  : <DashboardLayout />,
			children : [
				{ path : "users", element : <Users /> },
				{ path : "user-details", element : <UsersDetails /> },
			],
		},
		{ path : "*", element : <Navigate to="/" replace /> },
	]);
}
