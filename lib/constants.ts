import type { NavItem, PlatformModule, TradeService } from "@/types";

export const BRAND = {
  name: "Global Vista Group",
  shortName: "GVG",
  product: "Global Trade OS",
  tagline: "Connect. Source. Ship. Scale.",
  description:
    "Enterprise B2B and B2C international trading platform connecting suppliers, manufacturers, buyers, logistics providers, and global sourcing services.",
  url: "https://globalvistagroup.com",
} as const;

export const PRIMARY_NAV: NavItem[] = [
  { label: "Products", href: "/products", description: "Browse global catalog" },
  { label: "Categories", href: "/categories", description: "Shop by vertical" },
  { label: "Brands", href: "/brands", description: "Trusted manufacturers" },
  { label: "RFQ", href: "/rfq", description: "Request a quote" },
  { label: "Logistics", href: "/logistics", description: "Freight & customs" },
  { label: "News", href: "/news", description: "Trade insights" },
];

export const PORTAL_NAV: NavItem[] = [
  { label: "Customer Portal", href: "/portal/customer" },
  { label: "Supplier Portal", href: "/portal/supplier" },
  { label: "AI Assistant", href: "/ai" },
  { label: "Admin", href: "/admin" },
];

export const PLATFORM_MODULES: PlatformModule[] = [
  { id: "01", name: "Home", href: "/", description: "Brand landing and discovery" },
  { id: "02", name: "Products", href: "/products", description: "Global product catalog" },
  { id: "03", name: "Categories", href: "/categories", description: "Vertical marketplaces" },
  { id: "04", name: "Brands", href: "/brands", description: "Manufacturer brands" },
  { id: "05", name: "RFQ", href: "/rfq", description: "Request for quotation" },
  { id: "06", name: "Quote", href: "/quotes", description: "Supplier quotations" },
  { id: "07", name: "Orders", href: "/orders", description: "Order lifecycle" },
  { id: "08", name: "Procurement", href: "/procurement", description: "Sourcing workflows" },
  { id: "09", name: "Supplier Portal", href: "/portal/supplier", description: "Supplier operations" },
  { id: "10", name: "Customer Portal", href: "/portal/customer", description: "Buyer workspace" },
  { id: "11", name: "Inventory", href: "/inventory", description: "Stock visibility" },
  { id: "12", name: "Warehouses", href: "/warehouses", description: "Warehouse network" },
  { id: "13", name: "Logistics", href: "/logistics", description: "Freight tracking" },
  { id: "14", name: "Customs", href: "/customs", description: "Documentation & clearance" },
  { id: "15", name: "CRM", href: "/crm", description: "Account relationships" },
  { id: "16", name: "CMS", href: "/cms", description: "Content management" },
  { id: "17", name: "News", href: "/news", description: "Market news" },
  { id: "18", name: "Analytics", href: "/analytics", description: "Trade intelligence" },
  { id: "19", name: "AI Assistant", href: "/ai", description: "Procurement AI" },
  { id: "20", name: "Admin Dashboard", href: "/admin", description: "Platform control" },
];

export const TRADE_SERVICES: {
  id: TradeService;
  title: string;
  description: string;
}[] = [
  {
    id: "international-trading",
    title: "International Trading",
    description: "Cross-border B2B commerce with compliant contracts and multi-currency settlement.",
  },
  {
    id: "import-export",
    title: "Import / Export",
    description: "End-to-end import and export workflows from sourcing to delivery.",
  },
  {
    id: "oem-odm",
    title: "OEM / ODM",
    description: "Private-label manufacturing with quality gates and sample tracking.",
  },
  {
    id: "global-procurement",
    title: "Global Procurement",
    description: "Centralized sourcing across suppliers, regions, and product verticals.",
  },
  {
    id: "us-purchasing",
    title: "US Purchasing Service",
    description: "Proxy purchasing, consolidation, and export from the United States.",
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Ocean, air, rail, and truck routing with live shipment visibility.",
  },
  {
    id: "customs-documentation",
    title: "Customs Documentation",
    description: "Commercial invoices, packing lists, HS codes, and clearance packets.",
  },
  {
    id: "ai-procurement",
    title: "AI Procurement Assistant",
    description: "RFQ drafting, supplier matching, and landed-cost recommendations.",
  },
];
