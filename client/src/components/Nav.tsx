import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<NavLink to="/">Second Life</NavLink>

			<div>
				<NavLink to="/charities">Charities</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
