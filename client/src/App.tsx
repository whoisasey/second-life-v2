import { Route, Routes } from "react-router-dom";
import Charities from "./components/Charities/CharitiesPage/Charities";
import { Layout } from "./components/Layout/Layout";
import LoginOrCreate from "./components/Charities/LoginOrCreate/LoginOrCreate";
import SignIn from "./components/Charities/SignIn/SignIn";
import Blurb from "./utils/Blurb";

function App() {
	return (
		<Layout>
			<main>
				<Routes>
					<Route path="/" element={<Blurb />} />
					<Route path="/charities" element={<Charities />} />
					<Route path="/charities/login" element={<LoginOrCreate />} />
					<Route path="/charities/signin" element={<SignIn />} />
				</Routes>
			</main>
		</Layout>
	);
}

export default App;
