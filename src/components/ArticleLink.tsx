import { useState } from "react";
import { motion } from "motion/react";
import StubbyArrowIcon from "../icons/StubbyArrowIcon";

interface Props {
  title: string;
  href: string;
  date: string;
}

export default function ArticleLink({ title, href, date }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article>
      <div
        className="relative isolate -m-4 flex flex-col items-start rounded-lg p-4 hover:bg-gruvbox-bg1 hover:ring-1 hover:ring-neutral-950/15"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="w-full text-lg font-medium">
          <a href={href} className="w-full hover:no-underline">
            <span className="absolute inset-0 z-10"></span>
            <div className="flex w-full items-center justify-between">
              {title}
              <motion.span
                className="inline-flex"
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <StubbyArrowIcon />
              </motion.span>
            </div>
          </a>
        </h2>
        <time className="text-sm text-gruvbox-teal">{date}</time>
      </div>
    </article>
  );
}
