import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
	const styles = {
		header: {
			display: "flex",
			justifyContent: "space-between",
			background: "#333",
			color: "#fff",
		},
		navLinks: {
			display: "flex",
			justifyContent: "space-around",
		},
	};
	return (
		<div className="header" style={styles.header}>
			<Link to="/">CASTR</Link>
			<SearchBar />
			<nav>
				<ul className="header__nav-links" style={styles.navLinks}>
					<NavLink to="/collection">
						<li>Collection</li>
					</NavLink>
					<NavLink to="/decks">
						<li>Decks</li>
					</NavLink>
					<NavLink to="/login">
						<li>Log-In</li>
					</NavLink>
					<NavLink to="/signup">
						<li>Sign Up</li>
					</NavLink>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
