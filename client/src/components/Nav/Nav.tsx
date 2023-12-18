import { NavLink } from "react-router-dom";
import styled from "./Nav.module.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { UserStateContext } from "../../context/UserStateContext";

const Nav = () => {
  // const [token, setToken] = useState<string>();
  const { setLoggedIn } = useContext(UserStateContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(user);

    if (user.token) {
      setLoggedIn(true);
      // setToken(user.id);
    }
    // console.log(token);
  }, []);

  return (
    <nav className={styled.nav}>
      <NavLink to="/">Second Life</NavLink>

      <div className={styled.menu}>
        <NavLink to="/charities">Charities</NavLink>
        {/* {loggedIn ? (
					<NavLink to={`/charities/admin/${token}`}>
						Go to My Charity Page
					</NavLink>
				) : ( */}
        <NavLink to="/charities/login">Register as a Charity</NavLink>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Nav;
