import React, { useState } from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBTypography, MDBTextArea, MDBCardHeader } from "mdb-react-ui-kit";

export default function ChatBox() {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");

	const handleMessageSend = () => {
		if (newMessage.trim() !== "") {
			let responseMessage = "";

			const lowerCaseMessage = newMessage.toLowerCase();

			if (lowerCaseMessage.includes("hello")) {
				responseMessage = "Hello, how can I help you?";
			} else if (lowerCaseMessage.includes("i can't learn css")) {
				responseMessage = "You are stupid";
			} else {
				responseMessage = "I can't understand";
			}

			const updatedMessages = [...messages, { sender: "You", text: newMessage }, { sender: "GPT", text: responseMessage }];
			setMessages(updatedMessages);
			setNewMessage("");
		}
	};

	return (
		<MDBCol md="6" lg="7" xl="8">
			<MDBTypography listUnStyled>
				{messages.map((message, index) => (
					<li key={index} className={`d-flex justify-content-${message.sender === "You" ? "end" : "start"} mb-4`}>
						<MDBCard className="w-75">
							<MDBCardHeader className="d-flex justify-content-between p-3">
								<p className="fw-bold mb-0">{message.sender}</p>
								<p className="text-muted small mb-0"></p>
							</MDBCardHeader>
							<MDBCardBody>
								<p className="mb-0">{message.text}</p>
							</MDBCardBody>
						</MDBCard>
					</li>
				))}
				<li className="fixed-bottom bg-white mb-3">
					<MDBTextArea label="Message" id="textAreaExample" rows={4} value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
				</li>
				<li className="d-flex justify-content-end fixed-bottom mb-3">
					<MDBBtn color="info" rounded onClick={handleMessageSend}>
						Send
					</MDBBtn>
				</li>
			</MDBTypography>
		</MDBCol>
	);
}
