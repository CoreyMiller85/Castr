import React from "react";
import background from "../img/background-dark-fant.jpeg";
import Cards from "./Cards";

const styles = {
	container: {
		backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${background})`,
		height: "93vh",
	},
};

const Main = (props) => {
	return (
		<div style={styles.container}>
			<h2> Main Container </h2>
			<Cards cards={props.cards} nextPage={props.nextPage} />
		</div>
	);
};

export default Main;
