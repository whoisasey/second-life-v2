import { Route, Routes } from "react-router-dom";
import Charities from "./components/Charities";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="app">
			<Nav />
			<Routes>
				<Route path="/charities" element={<Charities />} />
			</Routes>
		</div>
	);
}

export default App;
