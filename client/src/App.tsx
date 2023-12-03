import { Route, Routes } from "react-router-dom";
import Charities from "./components/Charities/CharitiesPage/Charities";
import { Layout } from "./components/Layout/Layout";

function App() {
	return (
		<Layout>
			<main>
				<Routes>
					<Route path="/charities" element={<Charities />} />
				</Routes>
			</main>
		</Layout>
	);
}

export default App;
