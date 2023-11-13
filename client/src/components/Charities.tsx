import { useState, useEffect } from "react";

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
	}, []);

	console.log(result);

	return <div>Charities</div>;
};

export default Charities;
