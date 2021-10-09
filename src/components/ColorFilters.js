import React from "react";
import ColorBtn from "./ColorBtn";
import redMana from "../img/red-mana.png";
import whiteMana from "../img/white-mana.png";
import blueMana from "../img/blue-mana.png";
import blackMana from "../img/black-mana.png";
import greenMana from "../img/green-mana.png";

const styles = {
	colorFilters: {
		width: "12.5rem",
		display: "flex",
		justifyContent: "space-between",
		alignContent: "center",
	},
};

function ColorFilters(props) {
	return (
		<div className="color-filters" style={styles.colorFilters}>
			<ColorBtn color="W" image={whiteMana} filterColors={props.filterColors} />
			<ColorBtn color="U" image={blueMana} filterColors={props.filterColors} />
			<ColorBtn color="B" image={blackMana} filterColors={props.filterColors} />
			<ColorBtn color="R" image={redMana} filterColors={props.filterColors} />
			<ColorBtn color="G" image={greenMana} filterColors={props.filterColors} />
		</div>
	);
}

export default ColorFilters;
