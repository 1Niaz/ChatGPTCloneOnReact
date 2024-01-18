import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import arrow from "../../img/arrow-left.svg";
import SantaGPTIcon from "../../img/santaMini.png";
import YourIcon from "../../img/user.svg";
import Paper_plane from "../../img/paper-plane.svg";

const SantaPage = () => {

    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const serverRequest = async (message) => {
        try {
            const req = await fetch(
                "https://8867-2-133-130-122.ngrok-free.app/api/santa",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message,
                    }),
                }
            );
            const res = await req.json();
            console.log(res);

            return res;
        } catch (error) {
            console.error("Error making API request:", error);
            return { message: "Error occurred while processing your request." };
        }
    };

    const fetchData = async () => {
    };

    useEffect(() => {
        fetchData();
        const initialQuestion = "Hello, Help me Please!";
        setMessages([{ text: initialQuestion, sender: "YOU", key: Date.now() }]);

        const getAnswer = async () => {
            await Typing("Hello! How can I assist you today?", "SANTA");
        };

        getAnswer();
    }, []);

    const Typing = async (text, sender) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMessages((prev) => [...prev, { text, sender, key: Date.now() }]);
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim().length === 0) {
            return;
        }

        setMessages((prev) => [
            ...prev,
            { text: inputMessage, sender: "YOU", key: Date.now() },
        ]);

        await Typing("", "SANTA");

        try {
            const apiResponse = await serverRequest(inputMessage);

            if (apiResponse && apiResponse.message && apiResponse.message.trim()) {
                setMessages((prev) => [
                    ...prev,
                    {
                        text: apiResponse.message.trim(),
                        sender: "SANTA",
                        key: Date.now(),
                    },
                ]);
            }
        } catch (error) {
            console.error("Poshel nahui ", error);
        }

        setInputMessage("");
    };

    return (
        <div className="chat-page">
                <div className="chat-title">
                    <div className="container">
                        <NavLink to='/'>
                            <div className='img'>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </NavLink>
                        <h2>Chat with Santa</h2>
                    </div>
                </div>

                <section className="messages">
                    <div className="container">
                        {messages && messages.map(
                            (message, index) =>
                                message.text &&
                                message.text.trim() && (
                                    <div
                                        key={message.key}
                                        className={message.sender === "YOU" ? "you" : "gpt"}
                                    >
                                        {message.sender === "YOU" && (
                                            <div className="your-nick">
                                                <div className="img">
                                                    <img src={YourIcon} alt="" />
                                                </div>
                                                <div className="title">You</div>
                                            </div>
                                        )}
                                        {message.sender === "SANTA" && (
                                            <div className="chat-nick">
                                                <div className="img">
                                                    <img src={SantaGPTIcon} alt="" />
                                                </div>
                                                <div className="title">SANTA</div>
                                            </div>
                                        )}
                                        {message.text && message.text.trim()}
                                    </div>
                                )
                        )}
                    </div>
                </section>

                <div className="input-field">
                    <div className="container">
                        <div className="input">
                            <input type="text" placeholder="Enter your message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                        </div>
                        <div className="input-send" onClick={handleSendMessage}>
                            <img src={Paper_plane} alt="paper" />
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default SantaPage;
