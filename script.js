// Генерация фона
const bgPastry = document.getElementById('bgPastry');
const pastryTypes = ['🥐', '🍰', '🍩', '🍪', '🥮'];
for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.classList.add('pastry-item');
    span.textContent = pastryTypes[Math.floor(Math.random() * pastryTypes.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = Math.random() * 100 + 'vh';
    span.style.animationDuration = (Math.random() * 20 + 15) + 's';
    span.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    span.style.opacity = Math.random() * 0.5 + 0.4;
    bgPastry.appendChild(span);
}

// Логика SPA (переключение страниц)
const navLinks = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        showPage('page-' + targetPage);
        history.pushState({page: targetPage}, '', `/${targetPage}.html`);
    });
});

document.querySelector('.nav-links a').classList.add('active');
showPage('page-home');

window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
        showPage('page-' + e.state.page);
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector(`.nav-links a[data-page="${e.state.page}"]`).classList.add('active');
    }
});
