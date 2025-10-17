function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('navbar-placeholder', 'navbar.html');
loadHTML('footer-placeholder', 'footer.html');