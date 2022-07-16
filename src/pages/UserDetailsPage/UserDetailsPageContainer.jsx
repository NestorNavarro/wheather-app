import { useEffect }                 from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useNavigate }               from "react-router-dom";

import UserDetailsPage from "./UserDetailsPage";

const UserDetailsPageContainer = () => {
	const { userSlice } = useSelector( state => state, shallowEqual);

	const navigate = useNavigate();

	useEffect(() => {
		if (!userSlice?.lon || !userSlice?.lat) {
			console.log(userSlice?.lat);
			navigate("/dashboard/users", { replace : true });
		}
	}, [userSlice]);

	return (
		<UserDetailsPage />
	);
};

export default UserDetailsPageContainer;
