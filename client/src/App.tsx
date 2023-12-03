import { Route, Routes } from "react-router-dom";
import Charities from "./components/Charities/CharitiesPage/Charities";
import { Layout } from "./components/Layout/Layout";
import CharityForm from "./components/Charities/CharityForm/CharityForm";
import { Link } from "react-router-dom";

function App() {
	return (
		<Layout>
			<main>
				<Routes>
					<Route path="/charities" element={<Charities />} />
					<Route path="/charities/submit" element={<CharityForm />} />
				</Routes>
				<div>
					<h2>Welcome to Second Life!</h2>
					<h4>
						You're probably here because you've been shared a link or randomly
						got here through my GitHub.
					</h4>
					<h4>
						This project is <strong>under construction</strong>, so here is a
						rundown of what I have planned:
					</h4>
					<ul>
						<li>
							<Link to="/charities/submit">Submit A Charity</Link>
							<p>
								this will eventually be a page where the Charity has to create a
								profile before submitting a charity on their own behalf
							</p>
						</li>
						<li>
							{/* <Link to="/charities/submit"> */}
							Create/View a Charity Profile
							{/* </Link> */}
							<p>
								Charities will be able to make an account and maintain their
								info that will be displayed on the site
							</p>
						</li>
						<li>
							{/* <Link to="/charities/submit"> */}
							Create/View a User Profile
							{/* </Link> */}
							<p>
								Non-charity users will be able to make an account and keep track
								of charities they like
							</p>
						</li>
						{/* <li> */}
						{/* <Link to="/charities/submit"> */}
						{/* Create a Charity Profile */}
						{/* </Link> */}
						{/* </li>
						<li></li> */}
					</ul>
				</div>
			</main>
		</Layout>
	);
}

export default App;
