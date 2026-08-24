export function BrandRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
