var images = []; //предзагрузка незаблюренных картинок(т.к. при попытке сделать через filter: blur блюрился и текст тоже, приходится использовать этот костыль с двумя видами картинок)
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "../img/USSR/IL-2.jpg",
    "../img/USSR/IL-10.jpg"
)

document.addEventListener("DOMContentLoaded", function() { //Для корректного выравнивания фона при загрузке страницы
    document.querySelectorAll(".pics").forEach(function(item){item.style.backgroundSize = "cover"});
})

//ИЛ-2
function unblur_pic_IL2() {
    document.getElementById("IL-2").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("IL-2").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("IL-2").style.background = "url(../img/USSR/IL-2.jpg) no-repeat center";
}

function blur_pic_IL2() {
    document.getElementById("IL-2").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("IL-2").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("IL-2").style.background = "url(../img/USSR/IL-2_blur.jpg) no-repeat center";
}

//ИЛ-10
function unblur_pic_IL10() {
    document.getElementById("IL-10").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("IL-10").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("IL-10").style.background = "url(../img/USSR/IL-10.jpg) no-repeat center";
}

function blur_pic_IL10() {
    document.getElementById("IL-10").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("IL-10").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("IL-10").style.background = "url(../img/USSR/IL-10_blur.jpg) no-repeat center";
}