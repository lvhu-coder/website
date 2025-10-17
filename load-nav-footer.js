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
                    footer.addEventListener('click', function() {
                        document.body.innerHTML = '';
                        document.body.style.backgroundColor = '#0f111a';
                        setTimeout(function() {
                            window.location.href = 'real.html';
                        }, 1000);
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
