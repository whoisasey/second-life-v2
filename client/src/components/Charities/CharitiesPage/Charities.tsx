import { useState, useEffect } from "react";
import CharityCard from "../CharityCard/CharityCard";

type charitiesProps = {
	charityId: number;
	name: string;
	email: string;
};

const Charities = () => {
	const [result, setResult] = useState<charitiesProps[]>([]);

	const api = `${import.meta.env.VITE_VERCEL_API}/api/charities`;

	useEffect(() => {
		const getApi = async () => {
			const data = await fetch(api, {
				method: "GET",
			});

			const res = await data.json();
			setResult(res);
		};
		getApi();
	}, [result, api]);

	return (
		<>
			Charities
			{result.map((item) => (
				<CharityCard {...item} />
			))}
		</>
	);
};

export default Charities;
