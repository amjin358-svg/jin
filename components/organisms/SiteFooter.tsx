import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { BRAND, PLATFORM_MODULES, PRIMARY_NAV } from "@/lib/constants";

export function SiteFooter() {
  const ops = PLATFORM_MODULES.filter((module) =>
    ["/orders", "/procurement", "/inventory", "/warehouses", "/customs", "/crm", "/analytics", "/admin"].includes(
      module.href,
    ),
  );

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
            {BRAND.shortName}
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/55">
            {BRAND.product}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {BRAND.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Marketplace
          </p>
          <ul className="mt-4 space-y-2">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Operations
          </p>
          <ul className="mt-4 space-y-2">
            {ops.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Portals
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/portal/customer" className="text-sm text-white/80 hover:text-white">
                Customer Portal
              </Link>
            </li>
            <li>
              <Link href="/portal/supplier" className="text-sm text-white/80 hover:text-white">
                Supplier Portal
              </Link>
            </li>
            <li>
              <Link href="/ai" className="text-sm text-white/80 hover:text-white">
                AI Assistant
              </Link>
            </li>
            <li>
              <Link href="/cms" className="text-sm text-white/80 hover:text-white">
                CMS
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
        <p>Enterprise SaaS · Version 1.0 · Next.js 15</p>
      </Container>
    </footer>
  );
}
