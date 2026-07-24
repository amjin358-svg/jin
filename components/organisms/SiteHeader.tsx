"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { BRAND, PORTAL_NAV, PRIMARY_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-[var(--color-accent)] font-[family-name:var(--font-display)] text-sm font-bold text-white">
            {BRAND.shortName}
          </span>
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-white sm:text-base">
              {BRAND.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-white/65">
              {BRAND.product}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-white"
          >
            <Bot className="h-4 w-4" aria-hidden />
            AI Assistant
          </Link>
          <Link href="/rfq">
            <Button size="sm" variant="soft">
              Start RFQ
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-[var(--color-ink)]/95 backdrop-blur-md lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {[...PRIMARY_NAV, ...PORTAL_NAV].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-2 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/rfq" className="mt-2" onClick={() => setOpen(false)}>
            <Button className="w-full" variant="primary">
              Start RFQ
            </Button>
          </Link>
        </Container>
      </div>
    </header>
  );
}
