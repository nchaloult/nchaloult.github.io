import { useState, type PropsWithChildren, type ReactNode } from "react";
import RerollIcon from "../icons/RerollIcon.tsx";
import { type NumberedQuote } from "../quotes.ts";
import { AnimatePresence, motion } from "motion/react";

const isTouchDevice =
  // Set this to false during Astro's SSG pass. Only attempt to perform this
  // check once this QuoteCard component is hydrating on the client.
  typeof window !== "undefined" &&
  // Apparently the standard web API for detecting touch-primary devices.
  window.matchMedia("(pointer: coarse)").matches;

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
            x: 10,
          },
          animate: {
            opacity: 1,
            x: 0,
          },
          exit: {
            opacity: 0,
            x: -10,
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

export default function QuoteCard({ quotes }: { quotes: NumberedQuote[] }) {
  const [curQuoteIdx, setCurQuoteIdx] = useState(0);
  const curQuote = quotes[curQuoteIdx];

  return (
    <aside className="flex h-48 w-full max-w-2xl flex-col gap-2">
      <header className="flex items-end justify-between border-b border-gruvbox-bg1 pb-2">
        <h4 className="w-fit text-sm text-gruvbox-gray">
          Quote #{curQuote.num} of {quotes.length}
        </h4>
        <motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          transition={{
            type: "spring",
            duration: isTouchDevice ? 0.125 : 0.075,
            bounce: 0,
          }}
          onClick={() => setCurQuoteIdx((prev) => (prev + 1) % quotes.length)}
          className="relative flex cursor-pointer items-center gap-2 rounded-lg bg-gruvbox-bg0-s px-4 py-2 text-sm shadow-md ring-1 ring-neutral-950/15 select-none before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:shadow-highlight before:shadow-white/5 hover:bg-gruvbox-bg1"
        >
          <span className="sr-only">Reroll</span>
          <RerollIcon />
          Reroll
        </motion.button>
      </header>

      <div className="flex flex-col gap-2">
        <SlideTransition transitionKey={curQuoteIdx}>
          <p className="font-['new-spirit']">"{curQuote.text}"</p>
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
        </div>
      </div>
    </aside>
  );
}
