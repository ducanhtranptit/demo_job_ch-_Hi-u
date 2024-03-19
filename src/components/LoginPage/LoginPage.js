import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onLogin(email, password);
	};

	return (
		<div className="container justify-content-center mt-4 col-6">
			<h2>Đăng nhập</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Email:</label>
					<input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div className="form-group mt-4">
					<label>Mật khẩu:</label>
					<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</div>
				<button type="submit" className="btn btn-primary mt-4">
					Đăng nhập
				</button>
			</form>
		</div>
	);
}
