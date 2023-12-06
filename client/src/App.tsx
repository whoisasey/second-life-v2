import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import {
	Charities,
	LoginOrCreate,
	SignIn,
	CharityAdmin,
} from "./components/Charities";
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
					{/* show this only if logged in */}
					<Route path="/charities/admin/:id" element={<CharityAdmin />} />
				</Routes>
			</main>
		</Layout>
	);
}

export default App;
