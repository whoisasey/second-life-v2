import { ChangeEvent, FormEvent, useState } from "react";
import { charities } from "../../../utils/charities";
interface FormData {
	charityId: string;
	name: string;
	email: string;
	password: string;
}

type Value = "id" | "name";

interface ValueProps {
	name: Value;
	id: Value;
}

const CharityForm = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		charityId: "",
		email: "",
		password: "",
	});
	const [charityName, setCharityName] = useState<string>("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		const getName = charities.find((ch) => ch.id === value);
		setCharityName(getName.name);

		setFormData({
			...formData,
			charityId: value,
			name: getName.name,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await fetch("http://localhost:5500/api/users/", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					charityId: formData.charityId,
					password: formData.password,
				}),
			});
			const resJson = await res.json();

			if (res.status === 200) {
				console.log("charity submitted");
				setFormData(resJson);
			} else {
				console.log("error:", resJson);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<label>
						Charity:
						<select
							name={formData.charityId}
							value={formData.charityId}
							onChange={handleSelectChange}>
							<option value="" disabled>
								Select a Charity
							</option>
							{charities.map(({ id, name }: ValueProps) => (
								<option value={id} key={id}>
									{name}
								</option>
							))}
						</select>
					</label>
				</div>
				<div>
					<label>
						Charity Name:{" "}
						<input type="text" name="name" value={charityName} readOnly />
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
				<div>
					<label htmlFor="">
						Password:{" "}
						<input
							type="password"
							name="password"
							placeholder="Please enter a password"
							value={formData.password}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default CharityForm;
