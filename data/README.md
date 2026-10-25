# AuthenTech BD — E-Commerce Web Application

Modern technology e-commerce storefront for **AuthenTech BD**, based in Shahzadpur, Sirajganj, Bangladesh. Specializing in 100% tested pre-owned laptops, high-speed Wi-Fi routers, keyboards, mice, storage drives, multimedia speakers, and CCTV surveillance systems.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (with customized brand theme tokens)
- **Icons:** Lucide React
- **State Management:** React Context API (Cart & WhatsApp Quotation Generator)
- **Deployment & Hosting:** Optimized for Vercel, Node.js server, or static export

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.17+ or v20+)
- npm / yarn / pnpm

### Installation & Development

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Run production build:
   ```bash
   npm run start
   ```

---

## 📂 Project Architecture

```
authentechbd/
├── client/                          # Next.js frontend application
│   ├── public/
│   │   └── images/
│   │       └── logo.png             # Official AuthenTech BD brand logo
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx           # Global RootLayout with SEO metadata & CartProvider
│   │   │   ├── page.tsx             # Interactive Homepage
│   │   │   ├── globals.css          # Tailwind CSS v4 theme variables
│   │   │   ├── products/
│   │   │   │   ├── page.tsx         # Catalog with live category, condition, price filters
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx     # Dynamic Product Detail page (Server Component)
│   │   │   ├── contact/
│   │   │   │   └── page.tsx         # Contact page with Siraj Plaza location & inquiry form
│   │   │   ├── about/
│   │   │   │   └── page.tsx         # Brand story, testing values & physical shop presence
│   │   │   └── warranty/
│   │   │       └── page.tsx         # 15-Day Replacement Guarantee & Service terms
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx       # Navbar with instant search autocomplete & mobile drawer
│   │   │   │   ├── Footer.tsx       # Brand assurances, Siraj Plaza address, category links
│   │   │   │   └── MobileNav.tsx    # Sticky mobile bottom navigation
│   │   │   ├── home/
│   │   │   │   ├── Hero.tsx         # Hero section with value proposition & guarantees
│   │   │   │   ├── CategoryGrid.tsx # Visual cards for 7 confirmed categories
│   │   │   │   ├── FeaturedProducts.tsx # Tabbed product catalog preview
│   │   │   │   ├── TestingGuarantee.tsx # 6-point hardware diagnostic guarantee
│   │   │   │   └── StoreLocationSection.tsx # Shahzadpur store address & Google Maps link
│   │   │   ├── products/
│   │   │   │   ├── ProductCard.tsx  # Product card with spec pills, condition badges, and actions
│   │   │   │   └── ProductDetailView.tsx # Gallery, spec sheet, and diagnostic checklist
│   │   │   └── cart/
│   │   │       └── CartDrawer.tsx   # Quotation cart drawer with WhatsApp order generation
│   │   ├── context/
│   │   │   └── CartContext.tsx      # Cart state and localized WhatsApp message builder
│   │   ├── data/
│   │   │   └── products.ts          # Catalog dataset and store information
│   │   └── types/
│   │       └── product.ts           # Product, Category, and Spec TypeScript interfaces
│   ├── next.config.ts               # Next.js configuration with remote image patterns
│   └── package.json
├── data/
│   ├── assets/logo.png              # Client-supplied source logo
│   ├── memory.md                    # Business context and client brief notes
│   ├── PRD.md                       # Product Requirements Document
│   └── AuthenTech BD — Master Prompt.md # Master research & build instructions
├── Design.md                        # Competitor research findings & UX specification
├── Tasks.md                         # Project development task tracking
└── README.md                        # Setup and architecture documentation
```

---

## 💎 Core Features

1. **Omnichannel WhatsApp & Call Integration:**
   - One-tap WhatsApp inquiry button generating pre-formatted messages with device model, price in ৳, and link.
   - Quotation drawer enabling customers to assemble a list of laptops and accessories to request a combined quote.
   - Direct click-to-call hotlines (`01352272986`) throughout the header, drawer, and contact pages.

2. **100% Tested Diagnostic Transparency (Back Market Pattern):**
   - Every pre-owned laptop includes verified battery capacity percentage (e.g. 89%–94%), dead-pixel free display checks, keyboard & trackpad actuation test, and thermal benchmark certifications.
   - Clear condition tier badges (*Pre-Owned Grade A+*, *Pre-Owned Grade A*, *Brand New*).

3. **High-Density Data Clarity (Star Tech & Ryans Pattern):**
   - Clean hardware specification badges (CPU, RAM, SSD, Display) directly on cards.
   - Comprehensive technical spec table on individual product detail pages.

4. **Omnichannel Store Trust:**
   - Physical store highlighted: **Siraj Plaza (3rd Floor), Monirampur Bazar, Shahzadpur, Sirajganj, Bangladesh**.
   - Operating hours and Google Maps directions link.
   - 15-Day Replacement Guarantee + 2-Year Free Service Warranty disclosures.
