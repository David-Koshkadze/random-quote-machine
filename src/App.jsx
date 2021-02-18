import React, { useState, useEffect } from 'react';

import { colors } from './colors';

const API_URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export default function App() {
  const [quote, setQuote] = useState('');
  const [newQuote, setNewQoute] = useState(false);
  const [color, setColor] = useState('#2ecc71');

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const { quotes } = await res.json();

    const quoteIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[quoteIndex]);

    const colorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[colorIndex]);
  };

  useEffect(() => {
    fetchData();
    console.log(color);
  }, [newQuote]);

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="card">
        <p id="quote" style={{ color }}>
          {quote.quote}
        </p>
        <p id="author">- {quote.author}</p>
        <button
          id="quote-btn"
          style={{ backgroundColor: color }}
          onClick={() => setNewQoute(!newQuote)}
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}
