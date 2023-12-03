import { Route, Routes } from "react-router-dom";
import Charities from "./components/Charities/CharitiesPage/Charities";
import { Layout } from "./components/Layout/Layout";
import CharityForm from "./components/Charities/CharityForm/CharityForm";
function App() {
	return (
		<Layout>
			<main>
				<Routes>
					<Route path="/charities" element={<Charities />} />
					<Route path="/charities/submit" element={<CharityForm />} />
				</Routes>
			</main>
		</Layout>
	);
}

export default App;
