// URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
// The above one is the url of the API

var fetch = require('node-fetch');

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then(result => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.querySelector('.author') = `Image By: ${data.user.name}`
    })