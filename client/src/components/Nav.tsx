import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-between",
				width: "100vw",
			}}>
			<div>Second Life</div>

			<div>
				<NavLink to="/charities">Charities</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
