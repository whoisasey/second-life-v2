import { Link } from "react-router-dom";
import CharityForm from "../CharityForm/CharityForm";
const LoginOrCreate = () => {
	return (
		<>
			<h4>
				Already have an account? <Link to="/charities/signin">Sign in </Link>
			</h4>

			<h3>Create an account</h3>
			<CharityForm />
		</>
	);
};

export default LoginOrCreate;
