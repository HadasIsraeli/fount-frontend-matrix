const clientLinks = document.querySelectorAll('header a[data-client]');

clientLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var clientName = this.getAttribute('data-client');
        document.getElementById('client-style').href = `css/${clientName}.css`;
    });
});