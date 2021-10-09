import React from "react";
import CardContainer from "./CardContainer";

const Cards = (props) => {
	const cardList = props.cards.map((card) => (
		<CardContainer key={card.id} card={card} />
	));

	return (
		<div style={{ display: "flex", width: "100%", flexFlow: "row wrap" }}>
			<div
				style={{ color: "white", fontSize: "96px", marginLeft: "1rem" }}
				onClick={props.prevPage}
			>
				-
			</div>
			{cardList}
			<div
				style={{ color: "white", fontSize: "96px", marginLeft: "1rem" }}
				onClick={props.nextPage}
			>
				+
			</div>
		</div>
	);
};

export default Cards;
