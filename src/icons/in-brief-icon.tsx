export function InBriefIcon({
  size = 24,
  className = "",
}: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      role="graphics-symbol"
    >
      <path d="M10.206 7.292 6.208 3.293a1 1 0 0 0-1.416 0L.793 7.292a1 1 0 0 0 0 1.416l1.646 1.646-.94.939.708.707.94-.939 1.645 1.646a1 1 0 0 0 1.416 0l1.128-1.129-.708-.707-1.13 1.128L1.5 8.002l3.999-4 4 4-.75.749.708.707.75-.749a1 1 0 0 0 0-1.416Z" />
      <path d="m15.206 7.292-1.645-1.646.939-.939L13.793 4l-.94.939-1.645-1.646a1 1 0 0 0-1.416 0L8.664 4.421l.707.707L10.5 4l4 4.001-4 3.998-4-3.997.75-.75-.708-.709-.749.75a1 1 0 0 0 0 1.416l3.999 3.998a1 1 0 0 0 1.416 0l3.998-3.998a1 1 0 0 0 0-1.416Z" />
    </svg>
  );
}
