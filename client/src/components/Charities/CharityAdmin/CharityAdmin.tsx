import { Link } from "react-router-dom";
type PropsType = {
  user: string;
  loggedIn: boolean;
};

const CharityAdmin = ({ user, loggedIn }: PropsType) => {
  if (!loggedIn) {
    return (
      <>
        <h2>Sorry, you are not authorized to view this page!</h2>
        <Link to="/charities/signin">Go Back</Link>
      </>
    );
  }

  return (
    <>
      <h2>Welcome Back, {user}</h2>
    </>
  );
};

export default CharityAdmin;
