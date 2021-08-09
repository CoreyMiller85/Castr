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

	useEffect(() => {
		getCards();
	}, []);

	const getCards = async () => {
		const res = await cardDBClient.get("/api/cards");
		setCards([...res.data]);
	};
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/">
						<Main cards={cards} />
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
