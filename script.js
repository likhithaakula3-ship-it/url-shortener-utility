const urlDatabase = {};

function generateShortID() {
    return Math.random().toString(36).substring(2, 8);
}

function shortenURL() {

    const longUrl = document.getElementById("longUrl").value;

    if(longUrl === "") {
        alert("Please enter a URL");
        return;
    }

    const shortID = generateShortID();

    urlDatabase[shortID] = longUrl;

    const shortURL =
        window.location.origin +
        window.location.pathname +
        "?id=" +
        shortID;

    document.getElementById("result").innerHTML =
        `
        <p>Short URL:</p>
        <a href="${shortURL}" target="_blank">
            ${shortURL}
        </a>
        `;
}

function redirectIfShortURL() {

    const params =
        new URLSearchParams(window.location.search);

    const shortID = params.get("id");

    if(shortID && urlDatabase[shortID]) {
        window.location.href = urlDatabase[shortID];
    }
}

redirectIfShortURL();