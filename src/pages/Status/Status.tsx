import { PaperPlaneRight } from "phosphor-react";
import { useState, FormEvent, KeyboardEvent } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Status.css";

export function Status() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState(["Concordo...", "Olha, faz sentido!"]);

  function createNewAnswers(e: FormEvent) {
    e.preventDefault();
    setAnswers([newAnswers, ...answers]);
    setNewAnswers("");
  }

  function handleHotkeySubmit(e: KeyboardEvent) {
    if (e.key === "Enter" && e.ctrlKey) {
      setAnswers([newAnswers, ...answers]);
      setNewAnswers("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea rerum ipsam, a odit autem voluptatibus ad consequatur? Cumque porro, voluptates vitae ipsa commodi ut sapiente? Perferendis itaque quidem a." />
      <Separator />
      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/felipems1.png" alt="Felipe Moises" />
          <textarea
            onChange={(e) => setNewAnswers(e.target.value)}
            value={newAnswers}
            onKeyDown={handleHotkeySubmit}
            id="tweet"
            placeholder="Tweet your answer"
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((item, index) => (
        <Tweet content={item} key={index} />
      ))}
    </main>
  );
}
