import React, { useState, } from "react";
import axios from "axios";
import "./Inspo.css";

function Inspo() {
  const [quote, setQuote] = useState(null);

  /** Retrieve a quote from the API
   * Return the quote data
   */
  async function getQuote() {
    const quoteResponse = await axios.get(
      "https://inspo-quotes-api.herokuapp.com/quotes/random"
    );

    console.log("quote =", quoteResponse);
    setQuote(quoteResponse.data.quote);
  }

  return (
    <div>
      {quote
        ?
        (<div className="inspo-btn-container">

          <p><i>{quote.text} - {quote.author}</i></p>
          <button className="inspo-quote-btn" onClick={getQuote}>
            Give me another cheugy quote!
          </button>

        </div>)
        :
        (<div className="inspo-btn-container">
          <button className="inspo-quote-btn" onClick={getQuote}>
            Give me a cheugy quote!
          </button>
        </div>)
      }
    </div>
  );
}

export default Inspo;