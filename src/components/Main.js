import React from "react";
import background from "../img/background-dark-fant.jpeg";

const styles = {
	container: {
		backgroundImage: `url(${background})`,
		height: "93vh",
	},
};

const Main = () => {
	return <div style={styles.container}>Main Container</div>;
};

export default Main;
