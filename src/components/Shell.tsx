import { useEffect, useRef, useState, type JSX } from "react";
import { flushSync } from "react-dom";

function Prompt() {
  return <b className="text-gruvbox-green">guest@nchaloult.com:~$</b>;
}

type InputLineProps = {
  handleCommand: (cmd: string) => void;
};
function InputLine(props: InputLineProps) {
  const [curInput, setCurInput] = useState("");

  function checkForKeyboardShortcuts(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === "u") {
      setCurInput("");
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", checkForKeyboardShortcuts);
    return () =>
      document.removeEventListener("keydown", checkForKeyboardShortcuts);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.handleCommand(curInput);
    setCurInput("");
  }

  return (
    <div className="flex space-x-2">
      <Prompt />
      <form onSubmit={onSubmit} className="grow overflow-x-auto">
        <div className="relative">
          <input
            type="text"
            value={curInput}
            onChange={(e) => setCurInput(e.target.value)}
            autoFocus
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
            className="w-full outline-none text-transparent"
          />
          <span className="pointer-events-none absolute inset-0 whitespace-pre">
            {curInput}█
          </span>
        </div>
      </form>
    </div>
  );
}

export default function Shell() {
  const containerRef = useRef<HTMLElement>(null);
  const [stdout, setStdout] = useState<JSX.Element[]>([
    <span>
      Type <b className="text-gruvbox-teal">help</b>, then press Enter, for
      available commands.
    </span>,
  ]);

  function checkForKeyboardShortcuts(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === "l") {
      setStdout([]);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", checkForKeyboardShortcuts);
    return () =>
      document.removeEventListener("keydown", checkForKeyboardShortcuts);
  }, []);

  // Helper function that wraps setStdout(). Auto-scrolls so that the newest
  // lines that are at the bottom of our container div are in view.
  function changeStdout(newStdout: JSX.Element[]) {
    // Ensure that the DOM has been updated before considering whether to
    // auto-scroll.
    flushSync(() => setStdout(newStdout));

    if (containerRef && containerRef.current) {
      const lastChild = containerRef.current.lastElementChild;
      lastChild?.scrollIntoView({
        block: "end",
        inline: "nearest",
      });
    }
  }

  function handleCommand(cmd: string): void {
    const cmdWithPrompt = (
      <div className="flex space-x-2">
        <Prompt />
        <span>{cmd}</span>
      </div>
    );

    if (cmd === "") {
      // If the user just pressed Enter and cmd is empty, mimic the behavior of
      // a real shell by just appending `cmdWithPrompt` to `stdout`.
      changeStdout([...stdout, cmdWithPrompt]);
    } else if (cmd === "clear") {
      // Handle the clear program's special behavior here since we have easy
      // access to the `stdout` state here.
      //
      // TODO: Reevaluate this approach to implementing `clear`? Idk tho — that
      // might mean I'd have to revisit the way I'm doing a lot of stuff...
      changeStdout([]);
    } else {
      // changeStdout([...stdout, cmdWithPrompt, parseCommand(cmd)]);
      changeStdout([
        ...stdout,
        cmdWithPrompt,
        <span>Parsing command: '{cmd}'...</span>,
      ]);
    }
  }

  return (
    <section ref={containerRef} className="overflow-y-auto">
      {stdout}
      <InputLine handleCommand={handleCommand} />
    </section>
  );
}
