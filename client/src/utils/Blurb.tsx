import { Link } from "react-router-dom";

const Blurb = () => {
  return (
    <div>
      <h2>Welcome to Second Life!</h2>
      <h4>
        You're probably here because you've been shared a link or randomly got
        here through my GitHub.
      </h4>
      <h4>
        This project is <strong>under construction</strong>, so here is a
        rundown of what I have planned:
      </h4>
      <ul>
        <li>
          <Link to="/charities/login">Register A Charity</Link>
          <p>
            this will eventually be a page where the Charity has to create a
            profile before submitting a charity on their own behalf
          </p>
        </li>

        {/* <li>
					<Link to="/charities/login">Create/View a User Profile</Link>
					<p>
						Non-charity users will be able to make an account and keep track of
						charities they like
					</p>
				</li> */}
        {/* <li> */}
        {/* <Link to="/charities/submit"> */}
        {/* Create a Charity Profile */}
        {/* </Link> */}
        {/* </li>
						<li></li> */}
      </ul>
      <em>What makes this site different than other competitors?</em>
      <p>
        Second Life is built for the millennial (cliché, I know!) I want to
        create a space that is well-designed and easy for millennials to
        navigate and still feel attached to, without the corporate feel.
      </p>
      <ul>
        <p>Second Life is not:</p>
        <li>A place where donations are made directly on the site</li>
        <li>Sponsored by any organization</li>
      </ul>
    </div>
  );
};

export default Blurb;
