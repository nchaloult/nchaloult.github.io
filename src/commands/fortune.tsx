import { type JSX } from "react";
import { AcceptsNoArgsError, type Program } from ".";
// Importing the quotes array here, and and using it in the constructor, instead
// of lazy-loading right before it's used, to make this `fortune` command feel
// as responsive as possible. The quotes array is tiny, and so it ships over
// the wire fast. Also, since the Shell component is hydrated on the client
// side (it has the `client:load` directive on it), eager loading this quotes
// array won't affect the time to first byte.
import { quotes, type NumberedQuote } from "../quotes";
import { getRandomKey } from "../utils";

export default class Fortune implements Program {
  private quotes: NumberedQuote[];
  private curQuoteIdx = 0;

  constructor() {
    // Add an incrementing integer ID to each quote according to their order in
    // src/quotes.ts. Done here instead of manually inside each member of
    // src/quotes.ts's quotes array.
    const numberedQuotes: NumberedQuote[] = quotes.map((quote, i) => ({
      num: i + 1,
      ...quote,
    }));
    // Instead of picking a random quote from the array of quotes each time this
    // program is run, it shuffles that array on page load. Each subsequent time
    // it's run, it outputs the next quote in the array.
    //
    // This makes the user experience better: you won't see the same quote more
    // than once until you've seen all of them.
    this.quotes = numberedQuotes;
    shuffle(this.quotes);
  }

  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      throw new AcceptsNoArgsError();
    }

    const quote = this.quotes[this.curQuoteIdx];
    this.curQuoteIdx = (this.curQuoteIdx + 1) % this.quotes.length;

    let sourceContent = null;
    if (quote.source && quote.source.isAURL) {
      sourceContent = (
        <a href={quote.source.text} target="_blank" rel="noopener noreferrer">
          {quote.source.text}
        </a>
      );
    } else if (quote.source) {
      sourceContent = <span>{quote.source.text}</span>;
    }
    return (
      <div key={getRandomKey()} className="flex flex-col">
        <span className="text-gruvbox-gray">
          &#40;Quote &#35;{quote.num} of {this.quotes.length}&#41;
        </span>

        <span>&quot;{quote.text}&quot;</span>

        {quote.author && (
          <span className="text-gruvbox-teal">- {quote.author}</span>
        )}
        {!quote.author && <span className="text-gruvbox-teal">- Unknown</span>}

        {sourceContent}
      </div>
    );
  }
}

// Knuth shuffle algo implementation.
// https://stackoverflow.com/a/2450976
function shuffle(array: unknown[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
