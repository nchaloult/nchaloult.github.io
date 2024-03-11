import React, { Fragment } from 'react';
import { AcceptsNoArgsError, Program } from '.';
import { NumberedQuote, quotes } from '../quotes';
import { getRandomKey } from '../utils';
import styles from './Fortune.module.scss';

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
      <Fragment key={getRandomKey()}>
        <span id={styles.quote_number}>
          &#40;Quote &#35;{quote.num} of {this.quotes.length}&#41;
        </span>

        <span>&quot;{quote.text}&quot;</span>

        {quote.author && <span id={styles.author}>- {quote.author}</span>}
        {!quote.author && <span id={styles.author}>- Unknown</span>}

        {sourceContent}
      </Fragment>
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
