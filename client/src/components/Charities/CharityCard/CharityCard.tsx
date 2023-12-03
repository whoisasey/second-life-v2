import styled from "./CharityCard.module.scss";

type charitiesProps = {
	charityId: string;
	name: string;
	email: string;
};

const CharityCard = ({ name }: charitiesProps) => {
	return (
		<div className={styled.CharityCard}>
			<h4>{name}</h4>
		</div>
	);
};

export default CharityCard;
