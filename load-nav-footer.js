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
                        document.body.innerHTML = '';
                        document.body.style.backgroundColor = '#0f111a';
                        setTimeout(function() {
<<<<<<< HEAD
                            console.log('Redirecting to real.html');
                            window.location.href = 'real.html';
=======
                            window.location.href = '/real/';
>>>>>>> 0ab5eda45876a1d87526c59f0d0ea7ec53c02825
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