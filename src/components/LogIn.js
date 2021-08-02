import React from "react";

const LogIn = () => {
	return (
		<div>
			<form>
				<label htmlFor="email">
					email:
					<input type="email" name="email" />
				</label>
				<label htmlFor="password">
					Password:
					<input type="password" name="password" />
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default LogIn;
