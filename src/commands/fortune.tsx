import React from 'react';
import { AcceptsNoArgsError, Program } from '.';
import { quotes } from '../resources/quotes';

export default class Fortune implements Program {
  private curQuoteIdx = 0;

  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      throw new AcceptsNoArgsError();
    }

    const quote = quotes[this.curQuoteIdx];
    this.curQuoteIdx = (this.curQuoteIdx + 1) % quotes.length;

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
