import { Panel, Avatar }              from "rsuite";
import { Phone, UserBadge, Location } from "@rsuite/icons";

import styles from "./styles.module.css";

const UserCard = ({
	delegations : {
		user,
		getMainLettersFromName,
		handleNavigateToUserDetails,
	},
}) => {
	return (
		<div className="col" onClick={handleNavigateToUserDetails}>
			<Panel className={styles.userCard} shaded bordered bodyFill>
				<div className="row text-sm-center">
					<div className="col-lg-2 col-md-12">
						<Avatar circle size="lg">
							{getMainLettersFromName(`${user.name} ${user?.Apellido}`)}
						</Avatar>
					</div>

					<div className="col-lg-6 col-md-12 fw-bolder">
						<SectionInfo label={`${user?.name} ${user?.Apellido}`} Icon={UserBadge} />
						<SectionInfo label={user?.Telefono} Icon={Phone} />
					</div>

					<div className="col-lg-4  col-md-12 fw-bolder">
						<SectionInfo label="Ubicación" Icon={Location} />
						<div className="fw-normal">
							<span>lat: </span>
							<span>{user?.lat}</span>
						</div>
						<div  className="fw-normal">
							<span>lat:</span>
							<span>{user?.lon}</span>
						</div>
					</div>
				</div>
			</Panel>
		</div>
	);
};

const SectionInfo = ({ label, Icon }) => (
	<div className="d-flex align-items-center justify-content-sm-center">
		<Icon />
		<span className="ml-lg-2 ml-1">{label}</span>
	</div>
);

export default UserCard;
