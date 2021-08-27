import React, { useState } from "react";
import cardDBClient from "./API/CardDB";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			password,
		};
		cardDBClient.post("/auth/signup", { name, email, password });
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="name">
					Name:
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="password">
					Password:
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="email">
					email:
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Register;
