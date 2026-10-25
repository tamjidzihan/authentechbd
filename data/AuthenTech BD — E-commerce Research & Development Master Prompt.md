# AuthenTech BD — Research, Design & Build

I want to build a modern e-commerce website for a technology shop called **AuthenTech BD**, based in Bangladesh. The business specializes in premium laptops and computer accessories, including pre-owned laptops, routers, keyboards, mice, pen drives, speakers, and CCTV cameras.

I have provided two images from my client:
- The AuthenTech BD logo.
- A promotional banner containing the brand identity, product imagery, and business information.

I have also created two project documentation files:
- `memory.md`
- `PRD.md`

These files contain the available business information, initial requirements, brand identity, proposed website structure, and project constraints.

My preferred visual direction is a modern, professional technology e-commerce experience. The brand uses purple/violet, orange/red-orange, black, and white, but I am open to researching better ways to apply these colors to create a polished and cohesive design.

**I don't want to jump straight into coding. I want you to research the best websites in this category, identify their strongest UI/UX patterns, and then build AuthenTech BD using the most relevant findings.**

## 1. Read the Project Documentation

Before doing anything else, read:

- `memory.md`
- `PRD.md`

Inspect the existing project repository, configuration, dependencies, source code, and available assets.

Understand what is already implemented before making changes.

Use the documentation as the starting point, but distinguish confirmed business information from assumptions and proposed features.

Do not overwrite an existing working project or introduce unnecessary dependencies.

## 2. Research Leading Technology E-commerce Websites

Research successful websites in the following categories:

- Laptop and computer retailers.
- Electronics and technology e-commerce stores.
- Pre-owned and refurbished laptop marketplaces.
- Computer accessory stores.
- Modern direct-to-consumer technology brands.
- E-commerce websites known for excellent product discovery and conversion-focused UX.

Look for relevant examples such as established electronics retailers and refurbished-device marketplaces. Select the most useful competitors based on their relevance to AuthenTech BD, the Bangladesh market, and the products the business sells.

Do not limit your research to famous companies. Prioritize websites that demonstrate genuinely useful design patterns and shopping experiences.

### Research objectives

Investigate how these businesses handle:

- Homepage design and visual hierarchy.
- Navigation and category discovery.
- Product search and autocomplete.
- Product listing pages.
- Product cards and product imagery.
- Filtering and sorting.
- Product detail pages.
- New versus pre-owned product presentation.
- Product specifications and comparison.
- Warranty and product-condition disclosures.
- Pricing and promotional labels.
- Trust badges and credibility signals.
- Contact and product inquiry flows.
- Cart and checkout experiences, where relevant.
- Mobile navigation and mobile shopping.
- Empty states, loading states, and error handling.
- Customer support and frequently asked questions.
- Related products and recommendations.
- Responsive layouts and accessibility.

Research how these patterns help customers make purchasing decisions, not just how they look.

## 3. Use Mobbin MCP

**Please use Mobbin MCP for UI/UX research.**

First, inspect the available MCP integrations and determine whether Mobbin MCP is connected and accessible.

If it is available, use its relevant search, browsing, screenshot, or flow-discovery capabilities to investigate appropriate e-commerce screens and user journeys.

Look for examples of:

- E-commerce homepages.
- Product category pages.
- Product listing and filtering experiences.
- Product detail pages.
- Search interfaces.
- Cart and checkout screens.
- Promotional and discount interfaces.
- Sign-in or account screens, where relevant.
- Empty states and other important interaction states.
- Mobile shopping flows.

Prioritize screens and flows that are directly relevant to a technology retail business.

Do not just collect screenshots. Analyze the design decisions, information hierarchy, interaction patterns, and user experience behind them.

If Mobbin MCP is unavailable or does not expose the required content, use accessible public websites and other available research methods instead. Clearly distinguish research actually performed from recommendations based on general UX knowledge.

## 4. Compare Competitors and Identify Best Practices

Create a concise research report before beginning implementation.

For each selected competitor, document:

- Business and website category.
- Relevant pages and user flows examined.
- Important UI/UX patterns.
- What the website does particularly well.
- Potential usability problems or unnecessary complexity.
- Which ideas would work well for AuthenTech BD.
- Which patterns should not be copied or would not fit this business.

Then create a comparison table.

Evaluate the most relevant websites against criteria such as:

| Criterion | What to investigate |
|---|---|
| Homepage | Clarity, hierarchy, visual appeal, and product discovery |
| Navigation | Category organization and ease of use |
| Search | Visibility, usefulness, and result quality |
| Product cards | Information density, image quality, and actions |
| Filters | Usability and relevance to technology products |
| Product details | Specifications, condition, price, and warranty |
| Trust | Authenticity, testing, returns, and support information |
| Mobile UX | Navigation, search, filters, and product browsing |
| Conversion UX | How customers progress from discovery to inquiry or purchase |
| Accessibility | Readability, keyboard navigation, and interaction clarity |
| Performance | Efficient layouts, imagery, and loading behavior |

Do not assume that the most visually impressive website has the best UX.

Identify the patterns that provide the greatest practical value to customers.

## 5. Research Relevant User Flows

Map the important customer journeys before designing the pages.

At minimum, investigate these flows:

### Flow A: Discover a Product

Homepage → Category → Product Listing → Product Details.

### Flow B: Search for a Product

Search → Results → Refine Results → Product Details.

### Flow C: Explore a Pre-owned Laptop

Laptop Category → Condition and Specification Review → Product Details → Inquiry.

### Flow D: Contact the Shop

Product Details or Contact Section → Contact Action → Inquiry or Customer Support.

### Flow E: Mobile Shopping

Mobile Homepage → Navigation/Search → Category → Product Details → Inquiry.

### Flow F: Purchase Flow (Conditional)

Product Details → Cart → Checkout → Payment → Order Confirmation.

Only design and implement the complete purchase flow if the client confirms that online ordering and checkout are required.

For each flow, identify:

- User intent.
- Required screens.
- Important decisions.
- Potential friction points.
- Relevant competitor patterns.
- Recommended improvements for AuthenTech BD.

## 6. Investigate Conversion and Promotional Interfaces

Study how relevant e-commerce websites present:

- Discounts and sale prices.
- Product availability.
- Product condition.
- Warranty information.
- Delivery information.
- Returns and replacement policies.
- Shopping cart summaries.
- Checkout forms.
- Payment options.
- Account creation prompts.
- Optional newsletter subscriptions.
- Customer support actions.

Pay particular attention to how these interfaces communicate important information without overwhelming customers.

Do not add unnecessary login walls, newsletter popups, forced account creation, or intrusive promotional overlays.

If checkout is not part of the approved scope, use the research to inform future recommendations rather than implementing a complete checkout system.

Never invent discounts, warranty periods, delivery promises, or return policies.

## 7. Define the Design Direction for AuthenTech BD

After completing the research, propose a design direction specifically for this business.

The website should feel like a credible, modern technology retailer.

### Brand foundation

- Brand: AuthenTech BD.
- Tagline: Premium Laptops & Accessories.
- Primary color family: Purple/violet.
- Secondary color family: Orange/red-orange.
- Main background: White or warm off-white.
- Main text: Black or dark charcoal.

### Design principles

- Strong visual hierarchy.
- Clean and balanced layouts.
- Excellent product photography.
- Consistent spacing and typography.
- Clear category navigation.
- Easy-to-scan product cards.
- Useful product filters.
- Transparent product information.
- Prominent but tasteful calls to action.
- Subtle transitions and animations.
- Responsive layouts for mobile, tablet, and desktop.

Use the client's logo and banner as brand references.

Do not reproduce the promotional banner as the website itself.

Instead, translate the brand identity into a proper design system with real text, responsive components, individual product images, and reusable layouts.

Avoid excessive gradients, glassmorphism, glowing effects, giant rounded cards, and decorative animations unless research demonstrates a clear reason to use them.

The result should look distinctive rather than like a generic AI-generated storefront.

## 8. Create a Design and UX Specification

Before implementing multiple pages, document the recommended design decisions.

Create or update `Design.md` with:

- Design principles.
- Color palette and design tokens.
- Typography.
- Spacing system.
- Layout and container rules.
- Responsive breakpoints.
- Header and navigation behavior.
- Homepage structure.
- Product card design.
- Category layout.
- Product detail layout.
- Search and filtering behavior.
- Buttons, inputs, badges, and other reusable components.
- Loading, empty, error, and unavailable states.
- Accessibility considerations.
- Animation and interaction guidelines.
- Mobile-specific behavior.

Explain the important decisions using the research findings.

Keep the specification practical and implementation-ready.

If screenshots or visual references are available, document the relevant source and explain which design pattern they demonstrate.

## 9. Build the Website Using the Research Findings

Once the research and initial design specification are complete, begin implementing the website.

First inspect the current technology stack.

If the repository is empty, a reasonable starting stack is:

- Next.js.
- TypeScript.
- Tailwind CSS.
- Lucide React.

Use the project's existing compatible technologies if it is already initialized.

Do not introduce a backend, database, payment gateway, or commerce platform without understanding the approved requirements.

### Phase 1: Foundation

Implement:

- Application structure.
- Design tokens and global styles.
- Shared layout.
- Responsive header.
- Navigation.
- Search interface.
- Footer.
- Reusable buttons and UI components.
- Responsive homepage.

### Phase 2: Homepage

Implement:

- Hero section.
- Category navigation.
- Featured product section.
- Product cards.
- Trust and service highlights.
- Contact section.
- Footer links.

Use the best patterns identified during research.

### Phase 3: Product Discovery

Implement:

- Shop page.
- Category pages.
- Product search.
- Sorting and filtering.
- Product detail pages.
- Product condition and specification presentation.
- Related products, if appropriate.

### Phase 4: Inquiry and Contact

Implement:

- Contact page.
- Product inquiry actions.
- Form validation.
- Success and error states.
- A real inquiry delivery mechanism after the client approves the method.

### Phase 5: Production Readiness

Implement and verify:

- SEO metadata.
- Accessibility.
- Performance improvements.
- Responsive behavior.
- Error handling.
- Security measures appropriate to the architecture.
- Deployment configuration.
- Production build and final testing.

### Conditional Phase 6: Full E-commerce

Only after explicit client approval, plan and implement:

- Shopping cart.
- Checkout.
- Payment integration.
- Order management.
- Inventory management.
- Customer accounts.
- Admin dashboard.

Treat this as a separate scope with its own requirements and acceptance criteria.

## 10. Keep Business Information Accurate

The supplied images show these product categories:

- Pre-owned laptops.
- Routers.
- Keyboards.
- Mice.
- Pen drives.
- Speakers.
- CCTV cameras.

The banner also displays service claims relating to product testing, competitive prices, warranty support, and reliable service.

Use these details as initial reference material, but verify business claims and contact information before publishing them.

Never invent:

- Product names or model numbers.
- Product prices.
- Technical specifications.
- Stock quantities.
- Customer reviews.
- Sales statistics.
- Discounts.
- Warranty periods.
- Delivery times.
- Return policies.
- Official brand partnerships.

If temporary data is needed during development, keep it clearly identified as demo content and separate it from production data.

## 11. Implementation Quality

Follow these engineering principles:

- Use TypeScript properly.
- Create reusable components where appropriate.
- Separate product data from UI presentation.
- Avoid unnecessary dependencies.
- Keep components focused and maintainable.
- Avoid duplicated business logic.
- Use accessible HTML.
- Ensure navigation and buttons work.
- Provide useful empty and error states.
- Avoid fake authentication and demo accounts.
- Do not expose secrets in frontend code.
- Preserve existing working functionality.
- Avoid unrelated changes to the project's existing theme or architecture.

Do not sacrifice maintainability for visual effects.

## 12. Validate the Implementation

After each phase:

- Run the available lint checks.
- Run TypeScript checks if configured.
- Run the production build.
- Test the implemented routes.
- Verify responsive layouts.
- Check product images and links.
- Test search and filters where implemented.
- Verify form submission if a real inquiry flow exists.
- Review keyboard navigation and focus states.
- Resolve errors introduced by your changes.

Report actual results. Do not claim that a test passed unless it was executed successfully.

## 13. Documentation and Deliverables

Maintain these project documents:

- `memory.md` — Business context, confirmed facts, and persistent project decisions.
- `PRD.md` — Product requirements and acceptance criteria.
- `Design.md` — Research findings translated into design decisions and UI/UX specifications.
- `Tasks.md` — Implementation tasks, status, and remaining work.
- `README.md` — Setup, development, configuration, and deployment instructions.

Create additional architecture documentation only when it provides practical value.

Keep the documents consistent with the actual implementation.

## 14. Final Report

After the initial research and implementation, provide a report containing:

1. Websites researched.
2. Mobbin MCP availability and actual usage.
3. Relevant screens and user flows examined.
4. Key patterns discovered.
5. Competitor comparison and recommendations.
6. The proposed AuthenTech BD design direction.
7. Files created or modified.
8. Features implemented.
9. Commands executed and their actual results.
10. Known issues and unresolved client questions.
11. Recommended next implementation phase.

Provide source links for public research references where available.

Do not claim to have examined inaccessible pages or screenshots.

## Final Instruction

**Research first, compare patterns, establish the design direction, and then build.**

Do not immediately generate the entire application without investigating the relevant websites and existing codebase.

Start by reading `memory.md` and `PRD.md`, inspecting the repository, and checking the available Mobbin MCP tools.

Then perform the research, document the findings, and implement the first development phase.

The goal is not simply to make AuthenTech BD look attractive. The goal is to create a trustworthy, easy-to-use technology shopping experience based on informed design decisions and sound engineering.