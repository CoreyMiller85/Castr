import React from "react";

const styles = {
	form: {
		position: "relative",
	},
	bar: {
		backgroundColor: "#3F3A33",
		border: "none",
		borderRadius: "24.5px",
		width: "563px",
		height: "49px",
		color: "white",
		paddingLeft: " 1rem",
		fontSize: "1.5rem",
	},
	button: {
		position: "absolute",
		right: "0",
		top: "0",
		background: "#51493F",
		border: "none",
		height: "100%",
		borderRadius: "0px 20px 20px 0px",
		color: "#C2986E",
	},
};

const SearchBar = (props) => {
	return (
		<div>
			<form onSubmit={props.onSubmit} style={styles.form}>
				<input
					type="text"
					placeholder="search for card"
					onChange={(e) => props.query(e)}
					value={props.searchValue}
					style={styles.bar}
				/>
				<button type="submit" style={styles.button}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
