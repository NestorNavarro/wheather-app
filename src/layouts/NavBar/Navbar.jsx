
import { Nav, Navbar as NavBarRs } from "rsuite";
import { UserBadge as Users }      from "@rsuite/icons";
import { useNavigate }             from "react-router-dom";

const Navbar = () => {

	const navigation = useNavigate();

	return (
		<NavBarRs className="rounded bg-white">
			<Nav>
				<Nav.Item  onClick={() => navigation("/dashboard/users")} icon={<Users />}>Inicio</Nav.Item>
			</Nav>
		</NavBarRs>
	);
};

export default Navbar;
