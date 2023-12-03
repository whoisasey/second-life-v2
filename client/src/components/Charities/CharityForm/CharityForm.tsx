import { ChangeEvent, FormEvent, useState } from "react";
interface FormData {
	charityId: string;
	name: string;
	email: string;
}

const CharityForm = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		charityId: "",
		email: "",
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await fetch("http://localhost:5500/api/charities/", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					charityId: formData.charityId,
				}),
			});
			const resJson = await res.json();

			if (res.status === 200) {
				console.log("charity submitted");
				setFormData(resJson);
			} else {
				console.log("error");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			<div>
				<label>
					Charity Name:{" "}
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Charity ID:
					<input
						type="number"
						name="charityId"
						value={formData.charityId}
						onChange={handleInputChange}
					/>
					<br />* this will be a dropdown array of charities*
				</label>
			</div>
			<div>
				<label>
					Charity Email:{" "}
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default CharityForm;
