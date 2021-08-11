import React from "react";

const CardContainer = (props) => {
	const image = props.card.image_uris ? (
		<img
			src={props.card.image_uris.normal}
			alt={props.card.name}
			style={{ borderRadius: "20px", height: "425px", marginLeft: "1rem" }}
		/>
	) : null;
	return (
		<div style={{ color: "white" }}>
			<h2>{props.name}</h2>
			{image}
		</div>
	);
};
export default CardContainer;
