import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState("");
  const [quote, setQuote] = useState({});

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      setQuotes(res.data);
      setQuote(res.data[0]);
    });
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  };

  return (
    <main>
      <h1>Quote Generator</h1>
      <section>
        <button onClick={getRandomQuote}>Next Quote</button>
        <h3>
          <span>"</span> {quote.text}
        </h3>
        <i>- {quote.author}</i>
      </section>
    </main>
  );
};

export default App;
