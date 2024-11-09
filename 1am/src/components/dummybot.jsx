import React, { useState } from 'react';
import discordnew from "../assets/Discord New.png";


const Bott = () => {
    const [response, setResponse] = useState("Waiting for response...");

    const handleChat = async () => {
        const userMessage = "Hello, how can I use the chatbot?"; // Example message, customize as needed

        try {
            setResponse("Loading...");

            const res = await fetch('/api/chat-complete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: userMessage }],
                    model: 'mixtral-8x7b-32768',
                    temperature: 0.5,
                    max_tokens: 1024,
                    top_p: 1,
                    stream: true,
                    stop: null
                }),
            });

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            setResponse("");

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                setResponse(prev => prev + decoder.decode(value));
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse("An error occurred while processing your request.");
        }
    };

    return (
        <div className="bot-container">
            <div className="dev fade-in">
                <div className="left">
                    <p>Your go-to platform for mastering code...</p>
                    {/* <button onClick={handleChat} target="_blank">
                        Chat Bot <span><img src={discordnew} alt='Discord Icon' /></span>
                    </button> */}
                </div>
                <div className="response">
                    <h2>Response:</h2>
                    <p>{response}</p>
                </div>
            </div>
            {/* Other code remains the same */}
        </div>
    );
}

export default Bott;
