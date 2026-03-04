document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu) return;

    const toggleMobileMenu = () => mobileMenu.classList.toggle('active');

    // Keep compatibility if your HTML uses onclick="toggleMobileMenu()"
    window.toggleMobileMenu = toggleMobileMenu;

    // Close when clicking the overlay (not the menu content)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) toggleMobileMenu();
    });

    // Smooth-scroll for in-page anchors
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});