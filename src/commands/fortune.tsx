import React from 'react';
import { AcceptsNoArgsError, Program } from '.';

type Quote = {
  text: string;
  author?: string;
  source?: string;
};

export default class Fortune implements Program {
  private curQuoteIdx: number;
  private quotes: Quote[] = [
    {
      text: 'The key to making programs fast is to make them do practically nothing. ;-)',
      author: 'Mike Haertel, original GNU grep author',
      source:
        'https://lists.freebsd.org/pipermail/freebsd-current/2010-August/019310.html',
    },
  ];

  constructor() {
    // Instead of picking a random quote from the array of quotes each time this
    // program is run, it picks a random place to start iterating through the
    // array on page load. Each subsequent time it's run, it outputs the next
    // quote in the array.
    this.curQuoteIdx = Math.floor(Math.random() * this.quotes.length);
  }

  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      throw new AcceptsNoArgsError();
    }

    const quote = this.quotes[this.curQuoteIdx];
    this.curQuoteIdx = (this.curQuoteIdx + 1) % this.quotes.length;

    return (
      <>
        <span>&quot;{quote.text}&quot;</span>

        {quote.author && <span>- {quote.author}</span>}
        {!quote.author && <span>- Unknown</span>}

        {quote.source && (
          <a href={quote.source} target="_blank" rel="noopener noreferrer">
            {quote.source}
          </a>
        )}
      </>
    );
  }
}
