const unsplashApiKey = "W4Ve29x57Bt3IJ6C7M8k1ywiPEueoYlfZVjQnEHeAb4";
const left = document.querySelector('.left');
const right = document.querySelector('.right');



function getUrl(endpoint, args) {
  endpoint += `?client_id=${unsplashApiKey}`;
  args.forEach((arg) => (endpoint += "&" + arg));
  return endpoint;
}

fetch(getUrl("https://api.unsplash.com/photos/random/", [
  "orientation=portrait",
  "query=light",
])).then(res => res.json()).then(res => {
    left.style.background = `url("${res.urls.regular}")`;
})
fetch(getUrl("https://api.unsplash.com/photos/random/", [
  "orientation=portrait",
  "query=dark",
])).then(res => res.json()).then(res => {
    right.style.background = `url("${res.urls.regular}")`;
})


left.addEventListener('mouseenter', (e) => e.target.classList.add('hover'))
left.addEventListener('mouseleave', (e) => e.target.classList.remove('hover'))
right.addEventListener('mouseenter', (e) => e.target.classList.add('hover'))
right.addEventListener('mouseleave', (e) => e.target.classList.remove('hover'))
