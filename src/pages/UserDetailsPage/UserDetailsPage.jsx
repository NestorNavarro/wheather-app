import { useSelector, shallowEqual } from "react-redux";
//rsuite
import { Panel } from "rsuite";

const UserDetailsPage = () => {
	const { userSlice } = useSelector( state => state, shallowEqual);


	return (
		<Panel className="bg-white p-3" shaded bordered bodyFill>
			<h1>{userSlice?.name} {userSlice?.lastname}</h1>
			<div className="row">
				<h3 className="col-lg-3 col-md-5">lat : {userSlice?.lat}</h3>
				<h3 className="col-lg-3 col-md-5">lon : {userSlice?.lon}</h3>
			</div>
		</Panel>
	);
};

export default UserDetailsPage;
