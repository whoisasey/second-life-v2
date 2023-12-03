import { Route, Routes } from "react-router-dom";
import Charities from "./components/Charities";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<main>
				<Routes>
					<Route path="/charities" element={<Charities />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
