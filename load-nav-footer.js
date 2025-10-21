function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;

            if (id === 'footer-placeholder') {
                const footer = document.getElementById('footer-banner');
                if (footer) {
                    footer.addEventListener('click', function(event) {
                        event.preventDefault();
                        try { sessionStorage.setItem('allow_real', '1'); } catch(e) {}

                        var elems = Array.prototype.slice.call(
                            document.querySelectorAll('body > :not(script)')
                        );

                        var duration = 450;
                        var stagger = 220;

                        elems.forEach(function(el) {
                            el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
                            el.style.willChange = 'opacity, transform';
                            el.style.opacity = el.style.opacity || '1';
                            el.style.transform = el.style.transform || 'translateY(0)';
                        });

                        elems.forEach(function(el, i) {
                            setTimeout(function() {
                                el.style.opacity = '0';
                                el.style.transform = 'translateY(20px)';
                            }, i * stagger);
                        });

                        var total = duration + (elems.length - 1) * stagger + 600;
                        setTimeout(function() {
                            window.location.href = 'real/';
                        }, total);
                    });
                } else {
                    console.error('Footer element not found');
                }
            }
        })
        .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('navbar-placeholder', 'navbar.html');
loadHTML('footer-placeholder', 'footer.html');