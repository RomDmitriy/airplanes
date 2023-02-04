var images = []; //предзагрузка незаблюренных картинок(т.к. при попытке сделать через filter: blur блюрился и текст тоже, приходится использовать этот костыль с двумя видами картинок)
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "../img/USSR/I-5.jpg",
    "../img/USSR/I-7.jpg",
    "../img/USSR/I-14.jpg",
    "../img/USSR/I-15.jpg",
    "../img/USSR/I-152.jpg",
    "../img/USSR/I-153.jpg",
    "../img/USSR/I-16.jpg",
    "../img/USSR/DI-6.jpg",
    "../img/USSR/IP-1.jpg",
    "../img/USSR/Pe-3.jpg",
    "../img/USSR/MiG-1.jpg",
    "../img/USSR/MiG-3.jpg",
    "../img/USSR/Yak-1.jpg",
    "../img/USSR/Yak-3.jpg",
    "../img/USSR/Yak-7.jpg",
    "../img/USSR/Yak-9.jpg",
    "../img/USSR/LaGG-3.jpg",
    "../img/USSR/La-5.jpg",
    "../img/USSR/La-7.jpg",
)

document.addEventListener("DOMContentLoaded", function() { //Для корректного выравнивания фона при загрузке страницы
    document.querySelectorAll(".pics").forEach(function(item){item.style.backgroundSize = "cover"});
})

//И-5
function unblur_pic_I5() {
    document.getElementById("I-5").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-5").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("I-5").style.background = "url(../img/USSR/I-5.jpg) no-repeat center";
}

function blur_pic_I5() {
    document.getElementById("I-5").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-5").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("I-5").style.background = "url(../img/USSR/I-5_blur.jpg) no-repeat center";
}

//И-7
function unblur_pic_I7() {
    document.getElementById("I-7").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-7").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("I-7").style.background = "url(../img/USSR/I-7.jpg) no-repeat center";
}

function blur_pic_I7() {
    document.getElementById("I-7").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-7").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("I-7").style.background = "url(../img/USSR/I-7_blur.jpg) no-repeat center";
}

//И-14
function unblur_pic_I14() {
    document.getElementById("I-14").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-14").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("I-14").style.background = "url(../img/USSR/I-14.jpg) no-repeat center";
}

function blur_pic_I14() {
    document.getElementById("I-14").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-14").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("I-14").style.background = "url(../img/USSR/I-14_blur.jpg) no-repeat center";
}

//И-15
function unblur_pic_I15() {
    document.getElementById("I-15").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-15").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("I-15").style.background = "url(../img/USSR/I-15.jpg) no-repeat center";
}

function blur_pic_I15() {
    document.getElementById("I-15").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-15").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("I-15").style.background = "url(../img/USSR/I-15_blur.jpg) no-repeat center";
}

//И-152
function unblur_pic_I152() {
    document.getElementById("I-152").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-152").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("I-152").style.background = "url(../img/USSR/I-152.jpg) no-repeat center";
}

function blur_pic_I152() {
    document.getElementById("I-152").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-152").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("I-152").style.background = "url(../img/USSR/I-152_blur.jpg) no-repeat center";
}

//И-153
function unblur_pic_I153() {
    document.getElementById("I-153").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-153").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("I-153").style.background = "url(../img/USSR/I-153.jpg) no-repeat center";
}

function blur_pic_I153() {
    document.getElementById("I-153").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-153").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("I-153").style.background = "url(../img/USSR/I-153_blur.jpg) no-repeat center";
}

//И-16
function unblur_pic_I16() {
    document.getElementById("I-16").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-16").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("I-16").style.background = "url(../img/USSR/I-16.jpg) no-repeat center";
}

function blur_pic_I16() {
    document.getElementById("I-16").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("I-16").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("I-16").style.background = "url(../img/USSR/I-16_blur.jpg) no-repeat center";
}

//Ди-6
function unblur_pic_DI6() {
    document.getElementById("DI-6").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("DI-6").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("DI-6").style.background = "url(../img/USSR/DI-6.jpg) no-repeat center";
}

function blur_pic_DI6() {
    document.getElementById("DI-6").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("DI-6").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("DI-6").style.background = "url(../img/USSR/DI-6_blur.jpg) no-repeat center";
}

//ИП-1
function unblur_pic_IP1() {
    document.getElementById("IP-1").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("IP-1").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("IP-1").style.background = "url(../img/USSR/IP-1.jpg) no-repeat center";
}

function blur_pic_IP1() {
    document.getElementById("IP-1").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("IP-1").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("IP-1").style.background = "url(../img/USSR/IP-1_blur.jpg) no-repeat center";
}

//Пе-3
function unblur_pic_Pe3() {
    document.getElementById("Pe-3").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Pe-3").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Pe-3").style.background = "url(../img/USSR/Pe-3.jpg) no-repeat center";
}

function blur_pic_Pe3() {
    document.getElementById("Pe-3").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Pe-3").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Pe-3").style.background = "url(../img/USSR/Pe-3_blur.jpg) no-repeat center";
}

//МиГ-1
function unblur_pic_MiG1() {
    document.getElementById("MiG-1").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("MiG-1").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("MiG-1").style.background = "url(../img/USSR/MiG-1.jpg) no-repeat center";
}

function blur_pic_MiG1() {
    document.getElementById("MiG-1").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("MiG-1").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("MiG-1").style.background = "url(../img/USSR/MiG-1_blur.jpg) no-repeat center";
}

//МиГ-3
function unblur_pic_MiG3() {
    document.getElementById("MiG-3").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("MiG-3").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("MiG-3").style.background = "url(../img/USSR/MiG-3.jpg) no-repeat center";
}

function blur_pic_MiG3() {
    document.getElementById("MiG-3").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("MiG-3").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("MiG-3").style.background = "url(../img/USSR/MiG-3_blur.jpg) no-repeat center";
}

//Як-1
function unblur_pic_Yak1() {
    document.getElementById("Yak-1").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-1").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Yak-1").style.background = "url(../img/USSR/Yak-1.jpg) no-repeat center";
}

function blur_pic_Yak1() {
    document.getElementById("Yak-1").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-1").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Yak-1").style.background = "url(../img/USSR/Yak-1_blur.jpg) no-repeat center";
}

//Як-3
function unblur_pic_Yak3() {
    document.getElementById("Yak-3").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-3").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Yak-3").style.background = "url(../img/USSR/Yak-3.jpg) no-repeat center";
}

function blur_pic_Yak3() {
    document.getElementById("Yak-3").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-3").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Yak-3").style.background = "url(../img/USSR/Yak-3_blur.jpg) no-repeat center";
}

//Як-7
function unblur_pic_Yak7() {
    document.getElementById("Yak-7").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-7").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Yak-7").style.background = "url(../img/USSR/Yak-7.jpg) no-repeat center";
}

function blur_pic_Yak7() {
    document.getElementById("Yak-7").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-7").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Yak-7").style.background = "url(../img/USSR/Yak-7_blur.jpg) no-repeat center";
}

//Як-9
function unblur_pic_Yak9() {
    document.getElementById("Yak-9").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-9").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Yak-9").style.background = "url(../img/USSR/Yak-9.jpg) no-repeat center";
}

function blur_pic_Yak9() {
    document.getElementById("Yak-9").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Yak-9").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Yak-9").style.background = "url(../img/USSR/Yak-9_blur.jpg) no-repeat center";
}

//ЛаГГ-3
function unblur_pic_LaGG3() {
    document.getElementById("LaGG-3").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("LaGG-3").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("LaGG-3").style.background = "url(../img/USSR/LaGG-3.jpg) no-repeat center";
}

function blur_pic_LaGG3() {
    document.getElementById("LaGG-3").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("LaGG-3").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("LaGG-3").style.background = "url(../img/USSR/LaGG-3_blur.jpg) no-repeat center";
}

//Ла-5
function unblur_pic_La5() {
    document.getElementById("La-5").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("La-5").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("La-5").style.background = "url(../img/USSR/La-5.jpg) no-repeat center";
}

function blur_pic_La5() {
    document.getElementById("La-5").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("La-5").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("La-5").style.background = "url(../img/USSR/La-5_blur.jpg) no-repeat center";
}

//Ла-7
function unblur_pic_La7() {
    document.getElementById("La-7").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("La-7").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("La-7").style.background = "url(../img/USSR/La-7.jpg) no-repeat center";
}

function blur_pic_La7() {
    document.getElementById("La-7").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("La-7").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("La-7").style.background = "url(../img/USSR/La-7_blur.jpg) no-repeat center";
}