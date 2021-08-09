import React from "react";
import background from "../img/background-dark-fant.jpeg";
import Cards from "./Cards";

const styles = {
	container: {
		backgroundImage: `url(${background})`,
		height: "93vh",
	},
};

const Main = (props) => {
	return (
		<div style={styles.container}>
			<h2> Main Container </h2>
			<Cards cards={props.cards} />
		</div>
	);
};

export default Main;
