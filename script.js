const loaded = document.getElementById("loaded");
const loading = document.getElementById("loading");
setTimeout(() => {
    loading.style.display = "none";
    loaded.style.display = "block";
}, 1000)

const visualImageEle = document.getElementById("visualImage");
const imageNum = 3;
let i = 1;
const time = 7000;
visualImageEle.innerHTML = `<img src="image/visual/1.png" class="imageAnime" width="300" height="100">`;
setInterval(() => {
    visualImageEle.innerHTML = `<img src="image/visual/${i % imageNum + 1}.png" class="imageAnime">`;
    i++;
}, time);
