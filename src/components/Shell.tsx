import { useState } from "react";

function Prompt() {
  return <b className="text-gruvbox-green">guest@nchaloult.com:~$</b>;
}

function InputLine() {
  const [curInput, setCurInput] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("submittin'");
  }

  return (
    <div className="flex space-x-2 items-baseline">
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
  return (
    <section>
      <InputLine />
    </section>
  );
}
