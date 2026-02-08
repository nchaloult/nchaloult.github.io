import {
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import RerollIcon from "../icons/RerollIcon.tsx";
import { quotes, type NumberedQuote } from "../quotes.ts";
import { AnimatePresence, motion } from "motion/react";

interface SlideTransitionProps {
  transitionKey: any;
  className?: string;
}

function SlideTransition(props: PropsWithChildren<SlideTransitionProps>) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={props.transitionKey}
        variants={{
          initial: {
            opacity: 0,
            x: -10,
          },
          animate: {
            opacity: 1,
            x: 0,
          },
          exit: {
            opacity: 0,
            x: 10,
          },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          duration: 0.3,
          bounce: 0,
        }}
        className={props.className}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}

// Knuth shuffle algo implementation.
// https://stackoverflow.com/a/2450976
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  let currentIndex = result.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }

  return result;
}

export default function QuoteCard() {
  // Add an incrementing integer ID to each quote according to their order in
  // src/quotes.ts. Done here instead of manually inside each member of
  // src/quotes.ts's quotes array.
  //
  // Instead of picking a random quote from the array of quotes each time,
  // we shuffle the array the first time this component is rendered. The
  // "reroll" button advances to the next quote in the array.
  //
  // This makes the user experience better: you won't see the same quote more
  // than once until you've seen all of them.
  const shuffledQuotes = useMemo(() => {
    const numberedQuotes: NumberedQuote[] = quotes.map((quote, i) => ({
      num: i + 1,
      ...quote,
    }));
    return shuffle(numberedQuotes);
  }, []);

  const [curQuoteIdx, setCurQuoteIdx] = useState(0);
  const curQuote = shuffledQuotes[curQuoteIdx];

  return (
    <section>
      <header>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={curQuoteIdx}
            variants={{
              initial: {
                y: 28,
              },
              animate: {
                y: 0,
              },
              exit: {
                y: 28,
              },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              duration: 0.3,
              bounce: 0,
            }}
          >
            <h4 className="-mb-1.5 ml-2 w-fit rounded-t-lg bg-gruvbox-bg0-s px-4 py-1 pb-2.5 text-sm text-gruvbox-gray ring-1 ring-neutral-950/15">
              Quote #{curQuote.num} of {shuffledQuotes.length}
            </h4>
          </motion.div>
        </AnimatePresence>
      </header>

      {/* Fixed height so that the "Reroll" button always appears in the same
          fixed position.
          
          "relative" is critical for "z-10" to affect/influence nearby animated
          elements (in this case, the "quote #N of M" <header>). This is a
          known (Framer) Motion gotcha.
      */}
      <div className="relative z-10 flex h-40 flex-col gap-2 rounded-lg bg-gruvbox-bg1 p-4 shadow-md ring-1 ring-neutral-950/15">
        <SlideTransition transitionKey={curQuoteIdx}>
          <p>"{curQuote.text}"</p>
        </SlideTransition>

        <div className="flex grow gap-4">
          <SlideTransition
            transitionKey={curQuoteIdx}
            className="grow self-start"
          >
            <span className="flex flex-col text-sm">
              <strong className="font-medium text-gruvbox-teal">
                {curQuote.author ?? "Unknown"}
              </strong>
              {curQuote.source &&
                (curQuote.source.isAURL ? (
                  <a
                    href={curQuote.source.text}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {curQuote.source.text}
                  </a>
                ) : (
                  <span>{curQuote.source.text}</span>
                ))}
            </span>
          </SlideTransition>

          <button
            type="button"
            onClick={() =>
              setCurQuoteIdx((prev) => (prev + 1) % shuffledQuotes.length)
            }
            className="transition:scale relative flex w-fit cursor-pointer items-center gap-2 self-end rounded-lg bg-gruvbox-bg px-4 py-2 text-sm shadow-md ring-1 ring-neutral-950/15 duration-75 before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:shadow-highlight before:shadow-white/5 active:scale-94"
          >
            <span className="sr-only">Reroll</span>
            <RerollIcon />
            Reroll
          </button>
        </div>
      </div>
    </section>
  );
}
