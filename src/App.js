import React, { useState } from "react";
import Sidebar from "./components/side-bar/Sidebar";
import ChatBox from "./components/chat-box/ChatBox";
import LoginPage from "./components/LoginPage/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = (email, password) => {
		if (email === "user@gmail.com" && password === "123456") {
			setIsLoggedIn(true);
		} else {
			alert("Email hoặc mật khẩu không chính xác!");
		}
	};

	return (
		<div>
			{isLoggedIn ? (
				<div className="d-flex">
					<Sidebar />
					<ChatBox />
				</div>
			) : (
				<LoginPage onLogin={handleLogin} />
			)}
		</div>
	);
}
