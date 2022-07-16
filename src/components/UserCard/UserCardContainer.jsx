import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userSlice } from "store/slice";
import UserCard      from "./UserCard";

const UserCardContainer = ({ user }) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const getMainLettersFromName = (name) => {
		if (typeof name !== "string") return;

		const firstTwoLetters = name
			.split(" ")
			?.reduce((acc, val) => acc + (val[0] ?? ""), "")
			?.toUpperCase();

		return (firstTwoLetters ?? "")?.substring(0, 2).toUpperCase();
	};

	const handleNavigateToUserDetails = () =>  {
		dispatch(userSlice.actions.setUserData(user));
		navigate("/dashboard/user-details", { replace : false });
	};

	return (
		<UserCard
			delegations={{
				user,
				getMainLettersFromName,
				handleNavigateToUserDetails,
			}}
		/>
	);
};

export default UserCardContainer;
