import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<LogIn />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
