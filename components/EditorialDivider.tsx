/**
 * A slim editorial section break — a centered serif star/asterism between
 * two hairlines. Inspired by the section breaks used in long-form
 * editorial design (NYT Magazine, Aesop). Reusable, sparing.
 */
type Props = { className?: string; label?: string };

export default function EditorialDivider({ className, label }: Props) {
  return (
    <div className={`flex items-center gap-6 text-mute-soft ${className ?? ""}`}>
      <span className="flex-1 h-px bg-line" />
      {label ? (
        <span className="text-[10px] uppercase tracking-[0.32em] font-semibold">{label}</span>
      ) : (
        <span aria-hidden="true" className="font-serif italic text-xl leading-none -mt-1">
          ✦
        </span>
      )}
      <span className="flex-1 h-px bg-line" />
    </div>
  );
}
