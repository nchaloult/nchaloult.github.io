interface Props {
  isPointingLeft?: boolean;
}
export default function StubbyArrowIcon(props: Props) {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="4 4 16 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      aria-hidden="true"
      style={props.isPointingLeft ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M8.75 12H17.25"></path>
      <path d="M14.25 8.75L17.25 12L14.25 15.25"></path>
    </svg>
  );
}
