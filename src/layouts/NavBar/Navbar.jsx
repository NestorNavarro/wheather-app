
import { Nav, Navbar as NavBarRs } from "rsuite";
import { UserBadge as Users }      from "@rsuite/icons";

const Navbar = () => {
	return (
		<NavBarRs className="rounded bg-white">
			<Nav>
				<Nav.Item  href="/dashboard/users" icon={<Users />}>Inicio</Nav.Item>
			</Nav>
		</NavBarRs>
	);
};

export default Navbar;
