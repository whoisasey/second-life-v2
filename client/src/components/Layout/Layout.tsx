import { ReactElement } from "react";
import styled from "./Layout.module.scss";
import Nav from "../Nav/Nav";

type PropTypes = {
	children: ReactElement | ReactElement[];
};

export const Layout = ({ children }: PropTypes) => {
	return (
		<div className={styled.Layout}>
			<Nav />
			{children}
		</div>
	);
};
