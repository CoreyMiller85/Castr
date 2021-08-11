import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
	const styles = {
		header: {
			height: "7vh",
			display: "flex",
			justifyContent: "space-between",
			background: "#333",
			color: "#fff",
		},
		logo: {
			color: "white",
			fontSize: "1.5rem",
			textDecoration: "none",
		},
		navLinks: {
			display: "flex",
			justifyContent: "space-around",
		},
		links: {
			color: "white",
			marginLeft: "1rem",
			fontSize: "1.5rem",
			listStyle: "none",
			textDecoration: "none",
		},
	};
	return (
		<div className="header" style={styles.header}>
			<Link to="/" style={styles.header}>
				CASTR
			</Link>
			<SearchBar
				query={props.query}
				searchValue={props.searchValue}
				onSubmit={(e) => props.onSubmit(e)}
			/>
			<nav>
				<ul className="header__nav-links" style={styles.navLinks}>
					<NavLink to="/collection" style={styles.links}>
						<li>Collection</li>
					</NavLink>
					<NavLink to="/decks" style={styles.links}>
						<li>Decks</li>
					</NavLink>
					<NavLink to="/login" style={styles.links}>
						<li>Log-In</li>
					</NavLink>
					<NavLink to="/register" style={styles.links}>
						<li>Register</li>
					</NavLink>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
