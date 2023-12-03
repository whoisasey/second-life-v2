type charitiesProps = {
	charityId: number;
	name: string;
	email: string;
};

const CharityCard = ({ ...items }: charitiesProps) => {
	console.log(items);

	return <div className="">CharityCard</div>;
};

export default CharityCard;
