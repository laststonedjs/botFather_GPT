import { useState } from "react";
// assets
import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import loader from "./assets/loader.svg";

function App() {
  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          {/* user */}
          <div className="chat-bubble">
            <div className="avatar">
              <img src={user} />
            </div>
            <div className="post">Hello buddy, what's up?</div>
          </div>
          {/* ai bot */}
          <div className="chat-bubble bot">
            <div className="avatar">
              <img src={bot} />
            </div>
            <div className="post">
              Hello, tough question but mostly things are going in the right
              direction, how are you?
            </div>
          </div>
        </div>
      </section>
      <footer>
        <input
          className="composebar"
          autoFocus
          type="text"
          placeholder="I'm the BotFather, don't be shy, ask anything!"
          onChange={() => {}}
        />
        <div className="send-button">
          <img src={send} />
        </div>
      </footer>
    </main>
  );
}

export default App;
