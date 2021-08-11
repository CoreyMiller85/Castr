import React from "react";

const SearchBar = (props) => {
	return (
		<div>
			<form onSubmit={props.onSubmit}>
				<input
					type="text"
					placeholder="search for card"
					onChange={(e) => props.query(e)}
					value={props.searchValue}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default SearchBar;
