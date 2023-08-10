let puppyimageelement = document.getElementById("puppyImage");
let likecolor = document.getElementById("likeIcon");
let buttoncolor = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyimageelement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likecolor.style.color = "#0967d2";
        buttoncolor.style.backgroundColor = "#0967d2";
        buttoncolor.style.color = "white";
        isImageLiked = true;
    } else {
        puppyimageelement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likecolor.style.color = "#cbd2d9";
        buttoncolor.style.backgroundColor = "#cbd2d9";
        buttoncolor.style.color = "#9aa5b1";
        isImageLiked = false;
    }
}