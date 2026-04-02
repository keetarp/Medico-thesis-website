"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category.title))];

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) => {
        const matchesCategory = category === "All" || post.category.title === category;
        const needle = query.toLowerCase();
        const matchesQuery =
          needle.length === 0 ||
          [post.title, post.excerpt, post.category.title].some((value) =>
            value.toLowerCase().includes(needle)
          );
        return matchesCategory && matchesQuery;
      }),
    [category, posts, query]
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1.3fr,1fr]">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles by topic, methodology, statistics, or writing stage"
          className="rounded-full border border-[var(--color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                category === item
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-[var(--color-surface-muted)] text-[var(--color-ink-muted)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="card-grid grid gap-6 lg:grid-cols-2">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge tone="soft">{post.category.title}</Badge>
              <span className="text-sm text-[var(--color-ink-muted)]">
                {formatDate(post.publishedAt)} · {post.readTime}
              </span>
            </div>
            <h3 className="font-serif text-3xl leading-tight">{post.title}</h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">{post.excerpt}</p>
            <div className="mt-6">
              <ButtonLink href={`/blog/${post.slug}`} variant="secondary">
                Read Article
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
      {filteredPosts.length === 0 ? (
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 text-center text-[var(--color-ink-muted)] shadow-[var(--shadow-soft)]">
          No articles match the current filter.
        </div>
      ) : null}
    </div>
  );
}
