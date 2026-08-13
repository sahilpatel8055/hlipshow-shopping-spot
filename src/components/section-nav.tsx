import { useEffect, useRef, useState } from "react";

export type NavItem = { id: string; label: string };

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

/**
 * Sticky, translucent on-page navigation.
 * Pass `items` for explicit sections, or leave empty to auto-discover the
 * page's <h2> headings inside <main> (ids are added when missing).
 */
export function SectionNav({ items: explicit }: { items?: NavItem[] }) {
  const [items, setItems] = useState<NavItem[]>(explicit ?? []);
  const [active, setActive] = useState<string>("");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (explicit && explicit.length) {
      setItems(explicit.filter((i) => document.getElementById(i.id)));
      return;
    }
    const main = document.querySelector("main");
    if (!main) return;
    const found: NavItem[] = [];
    main.querySelectorAll("h2").forEach((h) => {
      const label = (h.textContent ?? "").trim();
      if (!label || label.length > 48) return;
      const host = (h.closest("section,div[id]") as HTMLElement | null) ?? h;
      let id = host.id || h.id;
      if (!id) {
        id = slugify(label);
        if (!id || document.getElementById(id)) return;
        host.id = id;
      }
      host.classList.add("scroll-mt-28");
      if (!found.some((f) => f.id === id)) found.push({ id, label });
    });
    setItems(found.slice(0, 14));
  }, [explicit]);

  useEffect(() => {
    if (!items.length) return;
    const onScroll = () => {
      let current = items[0].id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top - 120 <= 0) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  useEffect(() => {
    if (!active || !barRef.current) return;
    const el = barRef.current.querySelector<HTMLElement>(`[data-nav="${active}"]`);
    if (!el) return;
    const bar = barRef.current;
    const target = el.offsetLeft - bar.clientWidth / 2 + el.clientWidth / 2;
    bar.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className="sticky top-0 z-30 border-y border-border/60 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
    >
      <div
        ref={barRef}
        className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              data-nav={s.id}
              href={`#${s.id}`}
              aria-current={isActive ? "true" : undefined}
              onClick={(e) => {
                const el = document.getElementById(s.id);
                if (!el) return;
                e.preventDefault();
                window.history.replaceState(null, "", `#${s.id}`);
                window.scrollTo({
                  top: el.getBoundingClientRect().top + window.scrollY - 100,
                  behavior: "smooth",
                });
              }}
              className={
                "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:text-sm " +
                (isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-brand)]"
                  : "border-border/70 bg-card/60 text-muted-foreground hover:border-primary hover:text-primary")
              }
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
