import React from "react";

const CardContainer = (props) => {
	return (
		<div style={{ color: "white" }}>
			<img
				src={props.card.image_uris.normal}
				alt={props.card.name}
				style={{ borderRadius: "20px", height: "425px", marginLeft: "1rem" }}
			/>
		</div>
	);
};
export default CardContainer;
