/**
 * Component Loader
 * Loads and injects navbar and footer components into pages
 * Usage: Add <div id="navbar-placeholder"></div> and <div id="footer-placeholder"></div> to your HTML
 */

async function loadComponent(componentPath, targetId) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${componentPath}`);
        }
        const html = await response.text();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.innerHTML = html;
        } else {
            console.warn(`Target element #${targetId} not found`);
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    loadComponent('./navbar.html', 'navbar-placeholder');
    
    // Load footer
    loadComponent('./footer.html', 'footer-placeholder');
});
