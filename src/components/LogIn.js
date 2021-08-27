import React, { useState } from "react";
import { useHistory } from "react-router";
import cardDBClient from "./API/CardDB";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await cardDBClient.post("/auth/login", {
			email,
			password,
		});
		if (response.data.error) {
			alert(response.data.error);
		} else {
			sessionStorage.setItem("accessToken", response.data);
			history.push("/");
		}
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<label htmlFor="email">
					email:
					<input
						type="email"
						name="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</label>
				<label htmlFor="password">
					Password:
					<input
						type="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default LogIn;
