import React from "react";
import { NavLink } from "react-router-dom";
// import { useEffect, useContext } from "react";
// import { UserStateContext } from "../../context/UserStateContext";
import styled from "./Nav.module.scss";

const Nav = () => {
  // const { setLoggedIn, user, loggedIn, setUser } = useContext(UserStateContext);

  // useEffect(() => {
  // 	const getToken = async () => {
  // 		const userToken = await JSON.parse(localStorage.getItem("user")!);

  // 		if (userToken.token) {
  // 			setLoggedIn(true);
  // 			setUser({ id: userToken.id, name: userToken.name });
  // 		}
  // 	};

  // 	getToken();

  // 	// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user, loggedIn]);

  return (
    <nav className={styled.nav}>
      <NavLink to="/">Second Life</NavLink>

      <div className={styled.menu}>
        <NavLink to="/charities">Charities</NavLink>
        {/* {loggedIn && user ? ( */}
        <NavLink to={`/charities/admin/2`}>Go to My Charity Page</NavLink>
        {/* ) : ( */}
        <NavLink to="/charities/login">Register as a Charity</NavLink>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Nav;
