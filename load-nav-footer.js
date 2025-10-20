function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (id === 'footer-placeholder') {
                console.log('Footer placeholder loaded');
                const footer = document.getElementById('footer-banner');

                if (footer) {
                    console.log('Footer banner found');
                    footer.addEventListener('click', function(event) {
                        console.log('Footer clicked');
                        event.preventDefault();
                        try { sessionStorage.setItem('allow_real', '1'); } catch(e) {}
                        var elems = Array.prototype.slice.call(document.querySelectorAll('body > :not(script):not(#navbar-placeholder):not(#footer-placeholder)'));
                        if (elems.length === 0) {
                            document.body.innerHTML = '';
                            document.body.style.backgroundColor = '#0f111a';
                            setTimeout(function() { window.location.href = 'real/'; }, 400);
                            return;
                        }
                        var duration = 300;
                        var stagger = 120;
                        elems.forEach(function(el) {
                            el.style.transition = 'opacity ' + duration + 'ms ease, transform ' + duration + 'ms ease';
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
                        var total = duration + (elems.length - 1) * stagger + 200;
                        setTimeout(function() {
                            document.body.innerHTML = '';
                            document.body.style.backgroundColor = '#0f111a';
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