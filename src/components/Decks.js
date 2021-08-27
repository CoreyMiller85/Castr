import React, { useEffect, useState } from "react";
import cardDBClient from "./API/CardDB";

const Decks = () => {
	const [data, setData] = useState({});
	const [error, setError] = useState("");
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await cardDBClient.get("/decks/", {
			headers: {
				accessToken: sessionStorage.getItem("accessToken"),
			},
		});
		if (response.data.error) {
			setError(response.data);
		} else {
			setData(response.data);
		}
	};

	return (
		<div>
			{error ? (
				<h1>{error.error.message}!</h1>
			) : (
				<h1>{JSON.stringify(data)} </h1>
			)}
		</div>
	);
};

export default Decks;
