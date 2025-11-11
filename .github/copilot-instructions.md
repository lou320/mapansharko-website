# AI Coding Agent Instructions for Pan Sharr Ko Portfolio Website

## Project Overview
This is a static HTML portfolio website for Pan Sharr Ko, a model, influencer, and . The site uses Bootstrap 5 and Font Awesome for styling and is deployed as a multi-page website with navigation between sections.

## Architecture & Structure

### Pages
- **index.html** (landing page): Contains hero section, carousel portfolio, about section, and contact form
  - Hero section with full-viewport background image (IMG_8897.jpeg)
  - Image carousel showcasing portfolio work (1.png, 2.png, 3.png)
  - Inline about and contact sections (anchor-linked)
  
- **about.html**: Dedicated About page with consistent navbar styling
- **contact.html**: Dedicated Contact page with form
- **test.html, testing2.html, testing3.html, example.html**: Test/draft files (likely deprecated)

### Navigation Pattern
- **index.html navbar**: Uses anchor links (#about, #portfolio, #contact) for single-page navigation
- **Other pages' navbars**: Use full page hrefs (e.g., href="index.html#portfolio")
- Implement smooth scroll behavior via JavaScript: `scrollIntoView({ behavior: 'smooth' })`

## Key Technical Patterns

### Styling Conventions
1. **Dark Theme**: All pages use `background-color: #000000` (pure black) with white text
2. **Navbar**: Transparent on index.html (`background-color: transparent`), solid dark (#212529) on subpages
3. **Bootstrap Utilities**: Heavy reliance on Bootstrap 5 classes (container-fluid, offcanvas, carousel)
4. **Font Awesome Icons**: Included via CDN but not heavily used yet (prepare for social media links)

### JavaScript Patterns
- **Smooth anchor scrolling**: All pages redirect anchor links through custom scroll handler
- **Intersection Observer**: Fade-in effect for content below hero (`.fade-in` class triggers opacity transition)
- **Carousel auto-play**: Uses Bootstrap carousel with staggered intervals (10s, 2s, default)
- **Scroll event listener**: Smart jumping behavior on index.html between hero and carousel

### Responsive Design
- Media queries for hero h1: 4rem (desktop) → 3rem (≤768px)
- Bootstrap grid system: `col-md-8 offset-md-2` for centered content

## Critical Files & Dependencies

| File | Purpose | Dependencies |
|------|---------|---|
| index.html | Main landing page | Bootstrap 5.3.3, Font Awesome 6.5.2 |
| about.html | About page | Bootstrap 5.3.3, Font Awesome 6.5.2 |
| contact.html | Contact form page | Bootstrap 5.3.3, Font Awesome 6.5.2 |
| Images | Portfolio assets | {1,2,3}.png, IMG_8897.jpeg, various JPEGs |

All pages use CDN links (no build step required).

## Common Tasks

### Adding a New Page
1. Copy navbar structure from existing pages (preserve dark background on new pages)
2. Update navbar links: keep anchors in index.html navbar, use full hrefs elsewhere
3. Add smooth scroll listener if page has scrollable content
4. Match color scheme: `#000000` background, white text

### Updating Navigation
- **index.html**: Modify anchor targets and smooth scroll listener
- **Other pages**: Update `href` values in navbar nav-link elements
- Keep naming consistent: "Home", "About", "Portfolio", "Contact"

### Adding Portfolio Images
- Add new carousel-item in index.html `#carouselExampleDark`
- Place images in root directory
- Use `class="d-block w-100"` for Bootstrap carousel compatibility

### Contact Form Submission
Currently no backend integration—form is non-functional. When implementing:
- Choose backend (serverless function, Node API, etc.)
- Add `action` and `method` to `<form>` tag
- Include CSRF protection if applicable

## Anti-Patterns to Avoid
- Don't use inline colors—maintain dark theme consistency
- Don't create separate navbar HTML—keep structure aligned across pages
- Don't remove smooth scroll behavior—it's a core UX feature
- Test file proliferation (test.html, testing*.html)—consolidate before deploying

## Development Workflow
No build system is required. Workflow:
1. Edit HTML files directly
2. Test locally by opening files in browser
3. Use browser DevTools for responsive design testing
4. Git commit changes to the main branch

