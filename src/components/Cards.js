import React from "react";
import CardContainer from "./CardContainer";

const Cards = (props) => {
	const cardList = props.cards.map((card) => (
		<CardContainer key={card.id} card={card} />
	));

	return (
		<div style={{ display: "flex", width: "100%", flexFlow: "row wrap" }}>
			{cardList}
		</div>
	);
};

export default Cards;
