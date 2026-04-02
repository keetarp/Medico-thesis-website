import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Badge tone="soft">{eyebrow}</Badge> : null}
      <h2 className="font-serif text-4xl leading-[1.05] text-[var(--color-ink)] sm:text-5xl lg:text-[3.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-ink-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
