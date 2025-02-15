export function TechCrunchLogo({
  size = 24,
  className = "",
}: { size?: number; className?: string }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 180 90"
      role="graphics-symbol"
    >
      <polygon points="90,0 90,30 60,30 60,90 30,90 30,30 0,30 0,0 " />
      <rect x="120" width="60" height="30" />
      <polygon points="180,60 180,90 90,90 90,30 120,30 120,60 " />
    </svg>
  );
}
