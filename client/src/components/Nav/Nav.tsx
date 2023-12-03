import { NavLink } from "react-router-dom";
import styled from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styled.nav}>
			<NavLink to="/">Second Life</NavLink>

			<div>
				<NavLink to="/charities">Charities</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
