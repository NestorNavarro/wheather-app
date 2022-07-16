//rsuite
import { Container } from "rsuite";
//or componetns
import { userApi }  from "store/api/userApi";
import UserCard     from "components/UserCard";
import isValidArray from "helpers/isValidArray";


const UsersCardsPage = () => {

	const { data } = userApi.useGetDataQuery();

	return (
		<Container>
			<div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
				{
					isValidArray(data?.users) &&
						data.users.map( (user, index) => <UserCard key={user?.name + index} user={user} /> )
				}
			</div>

		</Container>
	);
};

export default UsersCardsPage;
