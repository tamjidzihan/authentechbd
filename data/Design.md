# AuthenTech BD — Design & UX Specification

**Document Version:** 1.0  
**Date:** October 2026  
**Status:** Approved for Implementation  
**Project:** AuthenTech BD (`client/`)

---

## 1. Executive Research & Benchmarking Summary

Before designing and building the AuthenTech BD storefront, extensive research was conducted across industry-leading technology e-commerce platforms and refurbished device specialists.

### 1.1 Competitors & Benchmarks Analyzed

1. **Star Tech BD (`startech.com.bd`) — Leading Local Electronics Retailer:**
   - **Key Pattern:** Data-dense product cards packed with essential specifications (CPU, RAM, SSD, Display) directly on the grid card.
   - **Strength:** Minimizes cognitive friction for tech-literate Bangladeshi buyers who compare devices side-by-side without opening multiple tabs.
   - **Weakness:** Visual clutter ("wall of text") and dense tables on mobile screens.
   - **Adoption for AuthenTech BD:** Highlight top 3–4 specifications as clean pill badges rather than dense paragraphs.

2. **Ryans Computers (`ryans.com`) — Established Computer Chain:**
   - **Key Pattern:** Omnichannel trust, branch-level stock transparency, prominent warranty disclosures, and direct contact avenues.
   - **Strength:** High trust regarding official warranties and local store presence.
   - **Weakness:** Outdated design aesthetics, lack of modern responsive micro-interactions.
   - **Adoption for AuthenTech BD:** Showcase the physical store location (Siraj Plaza, Monirampur Bazar, Shahzadpur, Sirajganj) and direct inquiry options (WhatsApp & Phone) with genuine warranty badges.

3. **Back Market (`backmarket.com`) — Global Benchmark for Pre-owned & Refurbished Tech:**
   - **Key Pattern:** Decoupling cosmetic appearance from hardware functionality ("100% Tested & Functional" guarantee regardless of cosmetic tier).
   - **Strength:** Eliminates customer anxiety regarding pre-owned laptops with transparent condition grades (*Like New / Excellent / Good*) and explicit testing checklists (Battery Health, Keyboard, Display, Thermal performance).
   - **Adoption for AuthenTech BD:** Prominent "100% Tested Quality" guarantee, explicit condition badges on pre-owned devices, and clear testing transparency.

### 1.2 Mobbin MCP Integration Status
- The Mobbin MCP server has been configured in `~/.gemini/config/mcp_config.json` pointing to `https://api.mobbin.com/mcp`.
- Active execution was complemented with direct web research on local and global e-commerce benchmarks.

---

## 2. Competitor UX Comparison Matrix

| Evaluation Criterion | Star Tech BD | Ryans Computers | Back Market | AuthenTech BD Proposed Direction |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage Clarity** | Heavy promotional banners, busy grids | Dense text lists, cluttered promotions | Clean, minimal, benefit-driven hero | Modern hero with authentic value proposition & quick category navigation |
| **Visual Hierarchy** | Dense text | Moderate | High (spacious, focused) | Balanced data density with crisp typography & breathing room |
| **Product Card Specs** | CPU/RAM/Display in raw text | CPU/Model only | Cosmetic grade + price | Clean spec badges (CPU, RAM, Storage, Condition) |
| **Condition Disclosure** | Minimal (mostly new) | Minimal | Industry standard (Excellent / Good / Fair) | Clear "Pre-owned" or "Brand New" badge with condition details |
| **Trust & Warranty** | Official warranty stated | Branch stock + warranty | 1-year warranty + 100% tested guarantee | "100% Tested", physical store verification, warranty tags |
| **Inquiry & Conversion** | Standard cart / checkout | Cart + physical branch visit | Seamless online cart | Instant WhatsApp inquiry + Call button + Interactive Cart/Quote |
| **Mobile UX** | Deep nested filters | Dense mobile tables | Touch-optimized, horizontal pills | Mobile-first sticky bottom action bar, horizontal category filter chips |

---

## 3. Brand Identity & Design Tokens

### 3.1 Color Palette
Extracted and refined from the official client logo and banner:

- **Primary Violet / Purple:**
  - Base: `#6D28D9` (`violet-700`)
  - Light Accent: `#8B5CF6` (`violet-500`)
  - Deep / Hover: `#5B21B6` (`violet-800`)
  - Soft Background Tint: `#F5F3FF` (`violet-50`)
- **Secondary Orange / Energy Accent:**
  - Base: `#EA580C` (`orange-600`)
  - Bright Accent: `#F97316` (`orange-500`)
  - Soft Badge Tint: `#FFF7ED` (`orange-50`)
- **Neutral Surface & Text:**
  - Background Light: `#FFFFFF` (pure white)
  - Secondary Background: `#F8FAFC` (`slate-50`)
  - Surface Border: `#E2E8F0` (`slate-200`)
  - Primary Text: `#0F172A` (`slate-900`)
  - Secondary Text: `#475569` (`slate-600`)
  - Muted Text: `#94A3B8` (`slate-400`)
- **Semantic Status Colors:**
  - In Stock / Tested: `#059669` (`emerald-600`)
  - Low Stock / Limited: `#D97706` (`amber-600`)

### 3.2 Typography
- **Primary Font:** Inter / Plus Jakarta Sans (clean, highly legible numerals and technical specifications).
- **Scale:**
  - Display Hero: `2.5rem` / `3.5rem` (`text-4xl` / `text-5xl`), font-extrabold
  - Section Titles: `1.875rem` (`text-3xl`), font-bold
  - Product Titles: `1.125rem` (`text-lg`), font-semibold
  - Body & Specs: `0.875rem` (`text-sm`), font-normal / font-medium
  - Micro-badges: `0.75rem` (`text-xs`), font-semibold uppercase tracking-wider

---

## 4. Key User Flows

### Flow A: Product Discovery via Categories
1. **Homepage:** User views curated category chips (Pre-owned Laptops, Routers, Keyboards, Mice, Storage, CCTV, Speakers).
2. **Category Selection:** Quick transition with pre-selected filters.
3. **Product Card Scan:** Immediate visibility of image, title, condition (e.g. "Pre-Owned Grade A+"), key specs (Core i5 11th Gen, 16GB, 512GB SSD), price in ৳.
4. **Product Details:** High-resolution gallery, comprehensive specs table, warranty terms, and inquiry CTA.

### Flow B: Smart Search & Instant Filter
1. **Search Bar:** Real-time query matching across brands (HP, Dell, Lenovo, TP-Link, Logitech), categories, and models.
2. **Filter Controls:** Price slider, Condition (Pre-owned / Brand New), Category, and In-Stock toggle.
3. **Instant Update:** Filter results update smoothly without full page reloads.

### Flow C: Pre-owned Laptop Evaluation
1. **Condition Transparency:** Dedicated "AuthenTech 100% Tested" verification module.
2. **Diagnostic Checklist:** Battery health percentage, display check, keyboard & trackpad test, ports and thermals.
3. **Warranty Assurance:** Clear replacement/service warranty display.

### Flow D: Direct Inquiry & Omnichannel Conversion
1. **One-Tap WhatsApp Inquiry:** Pre-filled message with product title, model, and link for immediate merchant response.
2. **Direct Phone Call:** Direct link to `01352272986`.
3. **Physical Shop Directions:** Map and address for Siraj Plaza, Monirampur Bazar, Shahzadpur, Sirajganj.

---

## 5. Component Specifications

### 5.1 Header & Navigation
- Top announcement bar: Operating hours, physical location, quick phone contact.
- Main Navbar: Official AuthenTech BD Logo, search input with instant dropdown, catalog navigation links, cart/inquiry drawer trigger, WhatsApp direct button.
- Mobile drawer: Touch-friendly menu, category list, store contact info.

### 5.2 Product Card
- Responsive aspect-ratio container with hover image zoom.
- Condition pill badge: Top-left ("Pre-owned" purple or "New" emerald).
- Spec highlights: 3 compact badges for core hardware.
- Price display: Bold formatted Bangladeshi Taka (`৳XX,XXX`).
- Quick actions: "View Details" and "Quick Inquiry / Order".

### 5.3 Product Details Page
- Multi-image gallery with thumbnail switcher.
- Essential purchase block: Price, Stock status, Warranty badge, Model code.
- Interactive Condition inspection guide.
- Complete Technical Specifications table.
- Direct Contact / Inquiry action block (Call, WhatsApp, Send Message).
- Related & recommended accessories.

### 5.4 Trust & Store Information Section
- Highlight the 4 core brand promises:
  1. **100% Tested Products:** Every pre-owned laptop passes a comprehensive hardware check.
  2. **Best Market Price:** Competitive retail pricing on premium gear.
  3. **Warranty Support:** Dedicated warranty and post-sale technical support.
  4. **Trusted Physical Store:** Visit us at Siraj Plaza, Monirampur Bazar, Shahzadpur.
