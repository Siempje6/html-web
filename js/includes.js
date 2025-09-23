["header", "footer"].forEach(part => {
    fetch(`/html/${part}.html`)
    .then(r => r.text())
    .then(html => {
        document.getElementById(part).innerHTML = html;
    })
    .catch(err => console.error(`kon ${part}.html niet laden:`, err));
});