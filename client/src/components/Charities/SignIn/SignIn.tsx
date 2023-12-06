import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
	email: string;
	password: string;
}

const SignIn = () => {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await fetch("http://localhost:5500/api/auth/", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: formData.email,
					password: formData.password,
				}),
			});
			const resJson = await res.json();
			if (res.status === 200) {
				setFormData(resJson);
			} else {
				console.log("error:", resJson);
			}
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
					/>
				</label>
				<label htmlFor="">
					Password:
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default SignIn;
