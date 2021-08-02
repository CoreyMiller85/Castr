import React from "react";

const Register = () => {
	return (
		<div>
			<form>
				<label htmlFor="name">
					Name:
					<input type="text" name="name" />
				</label>
				<label htmlFor="password">
					Password:
					<input type="password" name="password" />
				</label>
				<label htmlFor="email">
					email:
					<input type="email" name="email" />
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Register;
