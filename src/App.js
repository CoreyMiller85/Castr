import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Collection from "./components/Collection";
import Decks from "./components/Decks";
import cardDBClient from "./components/API/CardDB";

const App = () => {
	const [cards, setCards] = useState([]);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(0);
	const [queryString, setQueryString] = useState("");
	const [queryObject, setQueryObject] = useState({});

	useEffect(() => {
		getCards();
	}, []);

	const getCards = async (queryString = "legalities=standard", page = 0) => {
		const res = await cardDBClient.get(
			`/api/cards/q?${queryString}&page=${page}`
		);
		setCards(res.data.cards);
	};

	const handleColorsFilter = (color) => {
		if (queryObject.colors) {
			const oldColors = queryObject.colors;
			if (queryObject.colors.includes(color)) {
				const index = queryObject["colors"].indexOf(color);
				console.log(index);
				const filtered = queryObject["colors"].filter((col) => col !== color);
				console.log(filtered);
				setQueryObject({ ...queryObject, colors: filtered });
			} else {
				const newArray = [...oldColors, color];
				setQueryObject({ ...queryObject, colors: newArray });
			}
		} else {
			setQueryObject({ ...queryObject, colors: [color] });
		}
	};

	const handleQuery = (e) => {
		const value = e.target.value;
		setQuery(value);
		setQueryString(`name=${value}`);
		setQueryObject({ ...queryObject, name: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const urlParams = new URLSearchParams(queryObject);
		let string = [];
		for (const [key, value] of urlParams) {
			string.push(`${key}:${value}`);
		}
		const searchString = string.join("&");
		console.log(searchString);
		getCards(queryString);
	};

	const handleNextPage = async () => {
		setPage(page + 1);
		getCards(query, page);
	};

	const handlePrevPage = async () => {
		setPage(page - 1);
		getCards(query, page);
	};
	return (
		<Router>
			<div>
				<Header
					query={handleQuery}
					searchValue={query}
					onSubmit={handleSubmit}
					filterColors={handleColorsFilter}
				/>
				<Switch>
					<Route exact path="/">
						<Main
							cards={cards}
							nextPage={handleNextPage}
							prevPage={handlePrevPage}
						/>
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<LogIn />
					</Route>
					<Route exact path="/collection">
						<Collection />
					</Route>
					<Route exact path="/decks">
						<Decks />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
