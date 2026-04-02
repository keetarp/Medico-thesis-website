"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import type { Resource } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export function ResourceList({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "free" | "paid">("all");

  const filteredResources = useMemo(
    () =>
      resources.filter((resource) => {
        const matchesType = typeFilter === "all" || resource.freeOrPaid === typeFilter;
        const needle = query.toLowerCase();
        const matchesQuery =
          needle.length === 0 ||
          [resource.title, resource.shortDescription, resource.category].some((value) =>
            value.toLowerCase().includes(needle)
          );
        return matchesType && matchesQuery;
      }),
    [query, resources, typeFilter]
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1.3fr,auto]">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search checklists, templates, guides, and support bundles"
          className="rounded-full border border-[var(--color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
        />
        <div className="flex gap-2">
          {[
            ["all", "All"],
            ["free", "Free"],
            ["paid", "Paid"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setTypeFilter(value as "all" | "free" | "paid")}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                typeFilter === value
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-[var(--color-surface-muted)] text-[var(--color-ink-muted)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="card-grid grid gap-6 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <article key={resource.slug} className="rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge tone={resource.freeOrPaid === "free" ? "soft" : "accent"}>
                {resource.freeOrPaid}
              </Badge>
              <span className="text-sm text-[var(--color-ink-muted)]">{resource.category}</span>
            </div>
            <h3 className="font-serif text-3xl leading-tight">{resource.title}</h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">{resource.shortDescription}</p>
            <p className="mt-4 text-sm font-semibold text-[var(--color-accent)]">
              {resource.freeOrPaid === "paid" && resource.price
                ? formatCurrency(resource.price)
                : "Free download"}
            </p>
            <div className="mt-6">
              <ButtonLink href={`/resources/${resource.slug}`} variant="secondary">
                {resource.freeOrPaid === "free" ? "Download Free" : "Buy Now"}
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
