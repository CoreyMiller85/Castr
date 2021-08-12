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

	useEffect(() => {
		getCards();
	}, []);

	const getCards = async (name = "jace") => {
		const res = await cardDBClient.get(`/api/cards/?name=${name}`);
		setCards(res.data.cards);
	};

	const handleQuery = (e) => {
		const value = e.target.value;
		setQuery(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(query);
		getCards(query);
	};

	const handleNextPage = async () => {
		setPage(page + 1);
		const res = await cardDBClient.get(`/api/cards?name=${query}&page=${page}`);
		setCards(res.data.cards);
	};

	return (
		<Router>
			<div>
				<Header
					query={handleQuery}
					searchValue={query}
					onSubmit={handleSubmit}
				/>
				<Switch>
					<Route exact path="/">
						<Main cards={cards} nextPage={handleNextPage} />
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
