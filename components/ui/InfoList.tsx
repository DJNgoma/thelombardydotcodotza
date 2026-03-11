interface InfoListProps {
  items: string[];
}

export function InfoList({ items }: InfoListProps) {
  return (
    <ul className="body-copy-sm space-y-3 sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-gold)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
