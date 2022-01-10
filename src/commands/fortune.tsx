import React from 'react';
import { AcceptsNoArgsError, Program } from '.';
import { Quote, quotes } from '../resources/quotes';

export default class Fortune implements Program {
  private quotes: Quote[];
  private curQuoteIdx = 0;

  constructor() {
    // Instead of picking a random quote from the array of quotes each time this
    // program is run, it shuffles that array on page load. Each subsequent time
    // it's run, it outputs the next quote in the array.
    //
    // This makes the user experience better: you won't see the same quote more
    // than once until you've seen all of them.
    this.quotes = quotes;
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
      <>
        <span>&quot;{quote.text}&quot;</span>

        {quote.author && <span>- {quote.author}</span>}
        {!quote.author && <span>- Unknown</span>}

        {sourceContent}
      </>
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
