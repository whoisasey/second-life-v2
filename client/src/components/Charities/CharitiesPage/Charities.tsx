import { useState, useEffect } from "react";
import CharityCard from "../CharityCard/CharityCard";

type charitiesProps = {
	charityId: string;
	name: string;
	email: string;
};

const Charities = () => {
	const [result, setResult] = useState<charitiesProps[]>([]);

	const api = `${import.meta.env.VITE_VERCEL_API}/api/users`;

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
			{result.map((item, i) => (
				<CharityCard {...item} key={i} />
			))}
		</>
	);
};

export default Charities;
