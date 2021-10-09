import React from "react";

const styles = {
	colorBtn: {
		marginRight: "1rem",
		height: "100%",
	},
	manaSymbol: {
		width: "45px",
	},
};

function ColorBtn(props) {
	return (
		<div
			className="color-btn"
			style={styles.colorBtn}
			onClick={() => props.filterColors(props.color)}
		>
			<img
				src={props.image}
				alt={`${props.color} mana symbol`}
				className="mana-symbol"
				style={styles.manaSymbol}
			/>
		</div>
	);
}

export default ColorBtn;
