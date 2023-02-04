var images = []; //предзагрузка незаблюренных картинок(т.к. при попытке сделать через filter: blur блюрился и текст тоже, приходится использовать этот костыль с двумя видами картинок)
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "../img/USSR/Po-2.jpg",
    "../img/USSR/Su-2.jpg",
    "../img/USSR/Yak-2.jpg",
    "../img/USSR/Yak-4.jpg",
    "../img/USSR/ANT-40.jpg",
    "../img/USSR/Ar-2.jpg",
    "../img/USSR/Pe-2.jpg",
    "../img/USSR/Tu-2.jpg",
    "../img/USSR/DB-3.jpg",
    "../img/USSR/IL-4.jpg",
    "../img/USSR/DB-A.jpg",
    "../img/USSR/DB-240.jpg",
    "../img/USSR/TB-3.jpg",
    "../img/USSR/Pe-8.jpg"
)

document.addEventListener("DOMContentLoaded", function() { //Для корректного выравнивания фона при загрузке страницы
    document.querySelectorAll(".pics").forEach(function(item){item.style.backgroundSize = "cover"});
})

//По-2
function unblur_pic_Po2() {
    document.getElementById("Po-2").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Po-2").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Po-2").style.background = "url(../img/USSR/Po-2.jpg) no-repeat center";
}

function blur_pic_Po2() {
    document.getElementById("Po-2").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Po-2").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Po-2").style.background = "url(../img/USSR/Po-2_blur.jpg) no-repeat center";
}

//Су-2
function unblur_pic_Su2() {
    document.getElementById("Su-2").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Su-2").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Su-2").style.background = "url(../img/USSR/Su-2.jpg) no-repeat center";
}

function blur_pic_Su2() {
    document.getElementById("Su-2").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Su-2").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Su-2").style.background = "url(../img/USSR/Su-2_blur.jpg) no-repeat center";
}

//Як-2
function unblur_pic_Yak2() {
    document.getElementById("Yak-2").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-2").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Yak-2").style.background = "url(../img/USSR/Yak-2.jpg) no-repeat center";
}

function blur_pic_Yak2() {
    document.getElementById("Yak-2").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-2").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Yak-2").style.background = "url(../img/USSR/Yak-2_blur.jpg) no-repeat center";
}

//Як-4
function unblur_pic_Yak4() {
    document.getElementById("Yak-4").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-4").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Yak-4").style.background = "url(../img/USSR/Yak-4.jpg) no-repeat center";
}

function blur_pic_Yak4() {
    document.getElementById("Yak-4").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-4").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Yak-4").style.background = "url(../img/USSR/Yak-4_blur.jpg) no-repeat center";
}

//АНТ-40
function unblur_pic_ANT40() {
    document.getElementById("ANT-40").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("ANT-40").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("ANT-40").style.background = "url(../img/USSR/ANT-40.jpg) no-repeat center";
}

function blur_pic_ANT40() {
    document.getElementById("ANT-40").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("ANT-40").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("ANT-40").style.background = "url(../img/USSR/ANT-40_blur.jpg) no-repeat center";
}

//Ар-2
function unblur_pic_Ar2() {
    document.getElementById("Ar-2").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar-2").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar-2").style.background = "url(../img/USSR/Ar-2.jpg) no-repeat center";
}

function blur_pic_Ar2() {
    document.getElementById("Ar-2").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar-2").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar-2").style.background = "url(../img/USSR/Ar-2_blur.jpg) no-repeat center";
}

//Pe-2
function unblur_pic_Pe2() {
    document.getElementById("Pe-2").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Pe-2").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Pe-2").style.background = "url(../img/USSR/Pe-2.jpg) no-repeat center";
}

function blur_pic_Pe2() {
    document.getElementById("Pe-2").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Pe-2").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Pe-2").style.background = "url(../img/USSR/Pe-2_blur.jpg) no-repeat center";
}

//Ту-2
function unblur_pic_Tu2() {
    document.getElementById("Tu-2").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Tu-2").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Tu-2").style.background = "url(../img/USSR/Tu-2.jpg) no-repeat center";
}

function blur_pic_Tu2() {
    document.getElementById("Tu-2").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Tu-2").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Tu-2").style.background = "url(../img/USSR/Tu-2_blur.jpg) no-repeat center";
}

//ДБ-3
function unblur_pic_DB3() {
    document.getElementById("DB-3").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("DB-3").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("DB-3").style.background = "url(../img/USSR/DB-3.jpg) no-repeat center";
}

function blur_pic_DB3() {
    document.getElementById("DB-3").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("DB-3").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("DB-3").style.background = "url(../img/USSR/DB-3_blur.jpg) no-repeat center";
}

//ИЛ-4
function unblur_pic_IL4() {
    document.getElementById("IL-4").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("IL-4").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("IL-4").style.background = "url(../img/USSR/IL-4.jpg) no-repeat center";
}

function blur_pic_IL4() {
    document.getElementById("IL-4").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("IL-4").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("IL-4").style.background = "url(../img/USSR/IL-4_blur.jpg) no-repeat center";
}

//ДБ-А
function unblur_pic_DBA() {
    document.getElementById("DB-A").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("DB-A").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("DB-A").style.background = "url(../img/USSR/DB-A.jpg) no-repeat center";
}

function blur_pic_DBA() {
    document.getElementById("DB-A").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("DB-A").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("DB-A").style.background = "url(../img/USSR/DB-A_blur.jpg) no-repeat center";
}

//ДБ-240
function unblur_pic_DB240() {
    document.getElementById("DB-240").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("DB-240").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("DB-240").style.background = "url(../img/USSR/DB-240.jpg) no-repeat center";
}

function blur_pic_DB240() {
    document.getElementById("DB-240").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("DB-240").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("DB-240").style.background = "url(../img/USSR/DB-240_blur.jpg) no-repeat center";
}

//ТБ-3
function unblur_pic_TB3() {
    document.getElementById("TB-3").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("TB-3").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("TB-3").style.background = "url(../img/USSR/TB-3.jpg) no-repeat center";
}

function blur_pic_TB3() {
    document.getElementById("TB-3").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("TB-3").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("TB-3").style.background = "url(../img/USSR/TB-3_blur.jpg) no-repeat center";
}

//Пе-8
function unblur_pic_Pe8() {
    document.getElementById("Pe-8").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Pe-8").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Pe-8").style.background = "url(../img/USSR/Pe-8.jpg) no-repeat center";
}

function blur_pic_Pe8() {
    document.getElementById("Pe-8").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Pe-8").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Pe-8").style.background = "url(../img/USSR/Pe-8_blur.jpg) no-repeat center";
}