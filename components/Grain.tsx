/**
 * Editorial film-grain overlay. Pure SVG, no asset request.
 *
 * Used as a sibling element with `absolute inset-0` over hero sections to
 * give backgrounds the gentle, premium texture you see on PVOLVE / Aesop /
 * Equinox style sites without an actual JPEG noise layer.
 */
type Props = { opacity?: number; className?: string };

export default function Grain({ opacity = 0.045, className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 mix-blend-multiply ${className ?? ""}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        backgroundSize: "220px 220px",
      }}
    />
  );
}
