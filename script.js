const button = document.querySelector ("button");
const nama = document.querySelector (".card2");
const makasih = document.querySelector ("div.makasih");
button.onclick = ()=> {
    makasih.classList.add("activeMakasih");
    nama.classList.add("activeCard2");
}
