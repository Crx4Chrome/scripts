function randomRedirect() {
    var urls = [
        "https://example.com/1",
        "https://example.com/2",
        "https://example.com/3"
    ];

    var randomIndex = Math.floor(Math.random() * urls.length);
    var randomUrl = urls[randomIndex];

    window.location.href = randomUrl;
}

function startRedirect() {
    randomRedirect();
    setInterval(randomRedirect, Math.floor(Math.random() * (9000 - 4000) + 4000)); // 4 to 9 seconds in milliseconds
}

startRedirect();
