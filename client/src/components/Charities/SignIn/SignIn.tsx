import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface FormData {
  email: string;
  password: string;
}

type PropsType = {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
// interface ErrorData {
// 	message: string;
// }

const SignIn = ({ setUser, setLoggedIn }: PropsType) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  // const [errorMsg, setErrorMsg] = useState<ErrorData>({ message: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false);
      return;
    }

    if (user.token !== undefined) {
      navigate(`/charities/admin/${user.id}`);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      fetch(`${import.meta.env.VITE_VERCEL_API}/auth/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
        .then((res) => res.json())
        .then((r) => {
          if (r.message === "success") {
            localStorage.setItem(
              "user",
              JSON.stringify({
                id: r.id,
                email: formData.email,
                token: r.token,
              }),
            ),
              setLoggedIn(true),
              setUser(r.name);
            console.log(r);

            navigate(`/charities/admin/${r.id}`);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3> Sign In</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Your Password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* <p>{errorMsg ? errorMsg : ""}</p> */}
    </>
  );
};

export default SignIn;
