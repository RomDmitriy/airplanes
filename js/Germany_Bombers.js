var images = []; //предзагрузка незаблюренных картинок(т.к. при попытке сделать через filter: blur блюрился и текст тоже, приходится использовать этот костыль с двумя видами картинок)
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "../img/Germany/Ar81.jpg",
    "../img/Germany/Ar234.jpg",
    "../img/Germany/Do11.jpg",
    "../img/Germany/Do17.jpg",
    "../img/Germany/Do23.jpg",
    "../img/Germany/Do217.jpg",
    "../img/Germany/Hs123.jpg",
    "../img/Germany/Fi167.jpg",
    "../img/Germany/Fw200.jpg",
    "../img/Germany/He50.jpg",
    "../img/Germany/He111.jpg",
    "../img/Germany/He115.jpg",
    "../img/Germany/He177.jpg",
    "../img/Germany/Ju86.jpg",
    "../img/Germany/Ju87.jpg",
    "../img/Germany/Ju88.jpg",
    "../img/Germany/Ju188.jpg",
    "../img/Germany/Ju388.jpg"
)

document.addEventListener("DOMContentLoaded", function() { //Для корректного выравнивания фона при загрузке страницы
    document.querySelectorAll(".pics").forEach(function(item){item.style.backgroundSize = "cover"});
})

//Arado Ar 81
function unblur_pic_Ar81() {
    document.getElementById("Ar81").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar81").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar81").style.background = "url(../img/Germany/Ar81.jpg) no-repeat center";
}

function blur_pic_Ar81() {
    document.getElementById("Ar81").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar81").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar81").style.background = "url(../img/Germany/Ar81_blur.jpg) no-repeat center";
}

//Arado Ar 234
function unblur_pic_Ar234() {
    document.getElementById("Ar234").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar234").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar234").style.background = "url(../img/Germany/Ar234.jpg) no-repeat center";
}

function blur_pic_Ar234() {
    document.getElementById("Ar234").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar234").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar234").style.background = "url(../img/Germany/Ar234_blur.jpg) no-repeat center";
}

//Dornier Do 11
function unblur_pic_Do11() {
    document.getElementById("Do11").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do11").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Do11").style.background = "url(../img/Germany/Do11.jpg) no-repeat center";
}

function blur_pic_Do11() {
    document.getElementById("Do11").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do11").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Do11").style.background = "url(../img/Germany/Do11_blur.jpg) no-repeat center";
}

//Dornier Do 17
function unblur_pic_Do17() {
    document.getElementById("Do17").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do17").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Do17").style.background = "url(../img/Germany/Do17.jpg) no-repeat center";
}

function blur_pic_Do17() {
    document.getElementById("Do17").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do17").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Do17").style.background = "url(../img/Germany/Do17_blur.jpg) no-repeat center";
}

//Dornier Do 23
function unblur_pic_Do23() {
    document.getElementById("Do23").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do23").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Do23").style.background = "url(../img/Germany/Do23.jpg) no-repeat center";
}

function blur_pic_Do23() {
    document.getElementById("Do23").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do23").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Do23").style.background = "url(../img/Germany/Do23_blur.jpg) no-repeat center";
}

//Dornier Do 217
function unblur_pic_Do217() {
    document.getElementById("Do217").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do217").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Do217").style.background = "url(../img/Germany/Do217.jpg) no-repeat center";
}

function blur_pic_Do217() {
    document.getElementById("Do217").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do217").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Do217").style.background = "url(../img/Germany/Do217_blur.jpg) no-repeat center";
}

//Henschel Hs 123
function unblur_pic_Hs123() {
    document.getElementById("Hs123").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Hs123").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Hs123").style.background = "url(../img/Germany/Hs123.jpg) no-repeat center";
}

function blur_pic_Hs123() {
    document.getElementById("Hs123").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Hs123").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Hs123").style.background = "url(../img/Germany/Hs123_blur.jpg) no-repeat center";
}

//Fieseler Fi 167
function unblur_pic_Fi167() {
    document.getElementById("Fi167").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fi167").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Fi167").style.background = "url(../img/Germany/Fi167.jpg) no-repeat center";
}

function blur_pic_Fi167() {
    document.getElementById("Fi167").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fi167").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Fi167").style.background = "url(../img/Germany/Fi167_blur.jpg) no-repeat center";
}

//Focke-Wulf Fw 200 Condor
function unblur_pic_Fw200() {
    document.getElementById("Fw200").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fw200").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Fw200").style.background = "url(../img/Germany/Fw200.jpg) no-repeat center";
}

function blur_pic_Fw200() {
    document.getElementById("Fw200").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fw200").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Fw200").style.background = "url(../img/Germany/Fw200_blur.jpg) no-repeat center";
}

//Heinkel He 50
function unblur_pic_He50() {
    document.getElementById("He50").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He50").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He50").style.background = "url(../img/Germany/He50.jpg) no-repeat center";
}

function blur_pic_He50() {
    document.getElementById("He50").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He50").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He50").style.background = "url(../img/Germany/He50_blur.jpg) no-repeat center";
}

//Heinkel He 111
function unblur_pic_He111() {
    document.getElementById("He111").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He111").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He111").style.background = "url(../img/Germany/He111.jpg) no-repeat center";
}

function blur_pic_He111() {
    document.getElementById("He111").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He111").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He111").style.background = "url(../img/Germany/He111_blur.jpg) no-repeat center";
}

//Heinkel He 115
function unblur_pic_He115() {
    document.getElementById("He115").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He115").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He115").style.background = "url(../img/Germany/He115.jpg) no-repeat center";
}

function blur_pic_He115() {
    document.getElementById("He115").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He115").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He115").style.background = "url(../img/Germany/He115_blur.jpg) no-repeat center";
}

//Heinkel He 177
function unblur_pic_He177() {
    document.getElementById("He177").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He177").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He177").style.background = "url(../img/Germany/He177.jpg) no-repeat center";
}

function blur_pic_He177() {
    document.getElementById("He177").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He177").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He177").style.background = "url(../img/Germany/He177_blur.jpg) no-repeat center";
}

//Junkers Ju 86
function unblur_pic_Ju86() {
    document.getElementById("Ju86").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju86").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ju86").style.background = "url(../img/Germany/Ju86.jpg) no-repeat center";
}

function blur_pic_Ju86() {
    document.getElementById("Ju86").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju86").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ju86").style.background = "url(../img/Germany/Ju86_blur.jpg) no-repeat center";
}

//Junkers Ju 87
function unblur_pic_Ju87() {
    document.getElementById("Ju87").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju87").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ju87").style.background = "url(../img/Germany/Ju87.jpg) no-repeat center";
}

function blur_pic_Ju87() {
    document.getElementById("Ju87").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju87").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ju87").style.background = "url(../img/Germany/Ju87_blur.jpg) no-repeat center";
}

//Junkers Ju 88
function unblur_pic_Ju88() {
    document.getElementById("Ju88").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju88").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ju88").style.background = "url(../img/Germany/Ju88.jpg) no-repeat center";
}

function blur_pic_Ju88() {
    document.getElementById("Ju88").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju88").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ju88").style.background = "url(../img/Germany/Ju88_blur.jpg) no-repeat center";
}

//Junkers Ju 188
function unblur_pic_Ju188() {
    document.getElementById("Ju188").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju188").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ju188").style.background = "url(../img/Germany/Ju188.jpg) no-repeat center";
}

function blur_pic_Ju188() {
    document.getElementById("Ju188").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju188").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ju188").style.background = "url(../img/Germany/Ju188_blur.jpg) no-repeat center";
}

//Junkers Ju 388
function unblur_pic_Ju388() {
    document.getElementById("Ju388").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju388").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ju388").style.background = "url(../img/Germany/Ju388.jpg) no-repeat center";
}

function blur_pic_Ju388() {
    document.getElementById("Ju388").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ju388").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ju388").style.background = "url(../img/Germany/Ju388_blur.jpg) no-repeat center";
}