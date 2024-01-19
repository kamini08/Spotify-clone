let signUp = document.getElementsByClassName("sign_up")[0];
let signUp2 = document.getElementsByClassName("sign_up")[1];
let logIn = document.getElementsByClassName("log_in")[0];
let signUp3 = document.getElementsByClassName("sign_up")[2];

const cardPlayBtn = document.createElement("div");
cardPlayBtn.innerHTML = '<i class="fa-sharp fa-solid fa-circle-play" style="color: #1ed760;"></i>';
cardPlayBtn.classList.add('card_play_btn');



function loadSignUp() {
    window.location.replace("index2.html");
}

function loadLogIn() {
    window.location.replace("index3.html");
}

function addPlayBtn() {
    this.appendChild(cardPlayBtn);
}

function removePlayBtn() {
    this.lastChild.remove();
}


signUp.addEventListener("click", () => {
    loadSignUp();
})
signUp2.addEventListener("click", () => {
    loadSignUp();
})
logIn.addEventListener("click", () => {
    loadLogIn();
})



const album = document.createElement('div');
album.classList.add('album');
const albumCard = document.createElement('div');
albumCard.classList.add('album_card');
const albumClose = document.createElement('div');
albumClose.classList.add('album_close');
albumClose.innerHTML = '<button class="badge rounded-pill form_btn sign_up">Close</button>';
var albumImg = document.createElement('div');
albumImg.classList.add('album_img');
albumImg.innerHTML = '<img src="./assets/img_19.jpeg" alt="${trackInfo.album}"/>';
const albumInfo = document.createElement('div');
albumInfo.classList.add('album_info');
albumInfo.innerHTML = '<h2>Start listening with a free Spotify account</h2><button class="badge rounded-pill text-dark form_btn sign_up">Sign up free</button><button class="badge rounded-pill text-bg-dark form_btn">Download App</button><p>Already have an account?<a href="index3.html"> Log in</a></p>'
albumCard.appendChild(albumImg);
albumCard.appendChild(albumInfo);
album.appendChild(albumCard);
album.appendChild(albumClose);

function removeAlbum() {
    let album_card = this.parentNode;
    album_card.remove();
}

function showAlbum() {
    var cardImg = this.firstChild.nextSibling.getAttribute('src');
    albumImg.innerHTML = '<img src="' + cardImg + '" alt="${trackInfo.album}"/>';
    document.querySelector('body').appendChild(album);
    document.getElementsByClassName('album_close')[0].addEventListener('click', removeAlbum);
    var signUp3 = document.getElementsByClassName("sign_up")[2];
    signUp3.addEventListener("click", () => {
        loadSignUp();
    })
}

var cards = document.getElementsByClassName('music_card');
for(let i=0; i<cards.length; i++) {
    cards[i].addEventListener('mouseover', addPlayBtn);
    cards[i].addEventListener('mouseout', removePlayBtn);
    cards[i].addEventListener('click', showAlbum);
}




