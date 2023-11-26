import Charities from "./components/Charities";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<h1>hello world</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/charities" element={<Charities />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
