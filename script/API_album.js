// API for album_page #sentence
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => document.getElementById("sentence").innerHTML = data.content);