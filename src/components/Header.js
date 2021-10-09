import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";
import ColorFilters from "./ColorFilters";

const Header = (props) => {
	const styles = {
		header: {
			height: "100%",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			background: "#2F2C26",
			color: "#fff",
		},
		logo: {
			padding: "12px",
			width: "171px",
			textDecoration: "none",
			fontFamily: "Orbitron",
			fontStyle: "normal",
			fontWeight: "normal",
			fontSize: "42px",
			lineHeight: "53px",
			textAlign: "center",
			color: "#C2986E",
		},
		navLinks: {
			display: "flex",
			justifyContent: "space-around",
			marginRight: "1rem",
		},
		links: {
			background: "#DB8D3A",
			color: "white",
			marginLeft: "1rem",
			padding: "0.5rem 1rem",
			borderRadius: "4px",
			fontSize: "1.5rem",
			listStyle: "none",
			textDecoration: "none",
		},
	};

	return (
		<div className="header" style={styles.header}>
			<Link to="/" style={styles.logo}>
				CASTR
			</Link>
			<SearchBar
				query={props.query}
				searchValue={props.searchValue}
				onSubmit={(e) => props.onSubmit(e)}
			/>
			<ColorFilters filterColors={props.filterColors} />
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
