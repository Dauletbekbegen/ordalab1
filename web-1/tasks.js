const dialog = document.querySelector("dialog");
const btn = document.querySelector(".ok");
const btntwo = document.querySelector(".next__btn");
const main = document.querySelector("main");
const game = document.querySelector(".game");

document.addEventListener("DOMContentLoaded", () => {
    dialog.showModal();
});
btn.addEventListener("click", () => {
    dialog.close();
});
btntwo.addEventListener("click", () => {
    if(btntwo.textContent == "Келесі"){
        game.innerHTML = '<iframe style="max-width:100%" src="https://www.umapalata.com/zexpo/game.html?LANG=RU&idGames=102707" width="100%" height="580" frameborder="0" allowfullscreen></iframe>';
        btntwo.innerText = "Аяқтау";
    }else{
        main.innerHTML = "<h5 style='text-align: center; display: block; margin-top: 150px; font-size: 50px;'>Жарайсың<h5>";
    }
});