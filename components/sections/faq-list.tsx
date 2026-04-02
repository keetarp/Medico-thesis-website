import type { FAQ } from "@/lib/types";

export function FaqList({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
          <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-ink)]">
            {item.question}
          </summary>
          <p className="pt-4 text-base leading-7 text-[var(--color-ink-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
