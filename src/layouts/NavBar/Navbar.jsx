import { NavLink } from "react-router-dom";

import { Nav, Navbar as NavBarRs } from "rsuite";
import { UserBadge as Users }      from "@rsuite/icons";

const Navbar = () => {
	return (
		<NavBarRs className="rounded bg-white">
			<Nav>
				<Nav.Item icon={<Users />}> <NavLink  to="/dashboard/users">Inicio</NavLink></Nav.Item>
			</Nav>
		</NavBarRs>
	);
};

export default Navbar;
