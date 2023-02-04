var images = []; //предзагрузка незаблюренных картинок(т.к. при попытке сделать через filter: blur блюрился и текст тоже, приходится использовать этот костыль с двумя видами картинок)
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "../img/Germany/Ar66.jpg",
    "../img/Germany/Fw190.jpg",
    "../img/Germany/Go145.jpg",
    "../img/Germany/He45.jpg",
    "../img/Germany/He50.jpg",
    "../img/Germany/Hs123.jpg",
    "../img/Germany/Hs129.jpg",
    "../img/Germany/Ju87.jpg"
)

document.addEventListener("DOMContentLoaded", function() { //Для корректного выравнивания фона при загрузке страницы
    document.querySelectorAll(".pics").forEach(function(item){item.style.backgroundSize = "cover"});
})

//Arado Ar 66
function unblur_pic_Ar66() {
    document.getElementById("Ar66").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar66").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar66").style.background = "url(../img/Germany/Ar66.jpg) no-repeat center";
}

function blur_pic_Ar66() {
    document.getElementById("Ar66").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar66").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar66").style.background = "url(../img/Germany/Ar66_blur.jpg) no-repeat center";
}

//Focke-Wulf Fw 190 Würger
function unblur_pic_Fw190() {
    document.getElementById("Fw190").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fw190").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Fw190").style.background = "url(../img/Germany/Fw190.jpg) no-repeat center";
}

function blur_pic_Fw190() {
    document.getElementById("Fw190").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fw190").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Fw190").style.background = "url(../img/Germany/Fw190_blur.jpg) no-repeat center";
}

//Gotha Go 145
function unblur_pic_Go145() {
    document.getElementById("Go145").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Go145").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Go145").style.background = "url(../img/Germany/Go145.jpg) no-repeat center";
}

function blur_pic_Go145() {
    document.getElementById("Go145").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Go145").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Go145").style.background = "url(../img/Germany/Go145_blur.jpg) no-repeat center";
}

//Heinkel He 45
function unblur_pic_He45() {
    document.getElementById("He45").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He45").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He45").style.background = "url(../img/Germany/He45.jpg) no-repeat center";
}

function blur_pic_He45() {
    document.getElementById("He45").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He45").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He45").style.background = "url(../img/Germany/He45_blur.jpg) no-repeat center";
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

//Heinkel Hs 123
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

//Heinkel Hs 129
function unblur_pic_Hs129() {
    document.getElementById("Hs129").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Hs129").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Hs129").style.background = "url(../img/Germany/Hs129.jpg) no-repeat center";
}

function blur_pic_Hs129() {
    document.getElementById("Hs129").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Hs129").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Hs129").style.background = "url(../img/Germany/Hs129_blur.jpg) no-repeat center";
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