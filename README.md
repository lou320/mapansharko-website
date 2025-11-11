# Component System - How to Use

## Overview
This folder contains reusable HTML components and a component loader system that allows you to share navbar and footer across all pages without code duplication.

## Files

### Core Components
- **`navbar.html`** - Reusable navigation bar component
- **`footer.html`** - Reusable footer component
- **`init.js`** - JavaScript loader that injects components into pages
- **`base.html`** - Template/reference file showing the basic structure

### Example Pages Using Components
- **`index-new.html`** - Homepage using component system
- **`about-new.html`** - About page using component system
- **`portfolio-new.html`** - Portfolio page using component system
- **`contact-new.html`** - Contact page using component system

## How It Works

### 1. Add Placeholders to Your HTML
In the `<body>` of your page, add these two divs:

```html
<!-- At the top of <body>, before your main content -->
<div id="navbar-placeholder"></div>

<!-- At the bottom of <body>, after your main content -->
<div id="footer-placeholder"></div>
```

### 2. Include the Component Loader
Before the closing `</body>` tag, add:

```html
<script src="./init.js"></script>
```

That's it! The navbar and footer will be automatically injected.

## Benefits

✅ **DRY Principle** - Define navbar/footer once, use everywhere  
✅ **Easy Updates** - Change navbar in one place, all pages update  
✅ **Consistency** - All pages have matching navigation and footer  
✅ **No Build System** - Works with plain HTML + JavaScript  
✅ **Backward Compatible** - Original files still work, this is optional

## Migration Steps

If you want to convert your existing pages to use this system:

1. Open your original page (e.g., `about.html`)
2. Remove the navbar HTML code
3. Remove the footer HTML code
4. Add `<div id="navbar-placeholder"></div>` at the top of body
5. Add `<div id="footer-placeholder"></div>` at the bottom of body
6. Add `<script src="./components/init.js"></script>` before `</body>`
7. Keep all the CSS and other scripts

## Customizing Components

To modify the navbar or footer:

1. Edit `navbar.html` or `footer.html`
2. All pages using the component loader will automatically get the updated version
3. No need to update individual pages

## Fallback

If JavaScript is disabled or component loading fails, pages will still load but without navbar/footer. The page content will still be visible.

## File Structure

```
components/
├── navbar.html           # Navbar component
├── footer.html          # Footer component
├── init.js              # Component loader script
├── base.html            # Reference template
├── about-new.html       # Example: About page
├── portfolio-new.html   # Example: Portfolio page
├── contact-new.html     # Example: Contact page
└── README.md           # This file
```

## Testing

To test the new system without affecting your current site:

1. Open `index-new.html` in your browser (this is the homepage)
2. Click on navigation links to test (they should link to the other -new.html files)
3. Check if navbar and footer load correctly
4. Test navigation links between pages
5. If everything works, you can migrate other pages

Start here: **`components/index-new.html`**

## Comparison

### Before (Original Files)
- `about.html` - ~450 lines (with inline navbar/footer)
- `portfolio.html` - ~640 lines (with inline navbar/footer)
- `contact.html` - ~100 lines (with inline navbar/footer)
- **Total: ~1190 lines of duplicated code**

### After (Component System)
- `about-new.html` - ~250 lines (navbar/footer injected)
- `portfolio-new.html` - ~400 lines (navbar/footer injected)
- `contact-new.html` - ~200 lines (navbar/footer injected)
- `navbar.html` - ~30 lines (shared)
- `footer.html` - ~25 lines (shared)
- **Total: ~905 lines + 55 shared = Much more maintainable**

## Support

If you prefer the old method, your original files are still in the root directory and untouched. You can continue using them. This component system is purely optional!
