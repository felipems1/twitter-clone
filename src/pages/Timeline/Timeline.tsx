import "./Timeline.css";

import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { FormEvent, useState, KeyboardEvent } from "react";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState(["Hello Word", "Meu primeiro Tweet"]);

  function createNewTweet(e: FormEvent) {
    e.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotkeySubmit(e: KeyboardEvent) {
    if (e.key === "Enter" && e.ctrlKey) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/felipems1.png" alt="Felipe Moises" />
          <textarea
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            onKeyDown={handleHotkeySubmit}
            id="tweet"
            placeholder="What's happening?"
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((item, index) => (
        <Tweet content={item} key={index} />
      ))}
    </main>
  );
}
