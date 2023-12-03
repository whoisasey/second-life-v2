import { NavLink } from "react-router-dom";
import styled from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styled.nav}>
			<NavLink to="/">Second Life</NavLink>

			<div className={styled.menu}>
				<NavLink to="/charities">Charities</NavLink>
				<NavLink to="/charities/submit">Add A Charity</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
