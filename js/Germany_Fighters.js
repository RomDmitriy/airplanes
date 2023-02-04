var images = []; //предзагрузка незаблюренных картинок(т.к. при попытке сделать через filter: blur блюрился и текст тоже, приходится использовать этот костыль с двумя видами картинок)
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "../img/Germany/Ar64.jpg",
    "../img/Germany/Ar65.jpg",
    "../img/Germany/Ar67.jpg",
    "../img/Germany/Ar68.jpg",
    "../img/Germany/Ar76.jpg",
    "../img/Germany/Ar80.jpg",
    "../img/Germany/Do335.jpg",
    "../img/Germany/Fw187.jpg",
    "../img/Germany/Fw190.jpg",
    "../img/Germany/Ta152.jpg",
    "../img/Germany/Ta154.jpg",
    "../img/Germany/He51.jpg",
    "../img/Germany/He112.jpg",
    "../img/Germany/He162.jpg",
    "../img/Germany/He219.jpg",
    "../img/Germany/Bf109.jpg",
    "../img/Germany/Bf110.jpg",
    "../img/Germany/Me163.jpg",
    "../img/Germany/Me210.jpg",
    "../img/Germany/Me262.jpg",
    "../img/Germany/Me410.jpg"
)

document.addEventListener("DOMContentLoaded", function() { //Для корректного выравнивания фона при загрузке страницы
    document.querySelectorAll(".pics").forEach(function(item){item.style.backgroundSize = "cover"});
})

//Arado Ar 64
function unblur_pic_Ar64() {
    document.getElementById("Ar64").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar64").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar64").style.background = "url(../img/Germany/Ar64.jpg) no-repeat center";
}

function blur_pic_Ar64() {
    document.getElementById("Ar64").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar64").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar64").style.background = "url(../img/Germany/Ar64_blur.jpg) no-repeat center";
}

//Arado Ar 65
function unblur_pic_Ar65() {
    document.getElementById("Ar65").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar65").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar65").style.background = "url(../img/Germany/Ar65.jpg) no-repeat center";
}

function blur_pic_Ar65() {
    document.getElementById("Ar65").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar65").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar65").style.background = "url(../img/Germany/Ar65_blur.jpg) no-repeat center";
}

//Arado Ar 67
function unblur_pic_Ar67() {
    document.getElementById("Ar67").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar67").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar67").style.background = "url(../img/Germany/Ar67.jpg) no-repeat center";
}

function blur_pic_Ar67() {
    document.getElementById("Ar67").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar67").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar67").style.background = "url(../img/Germany/Ar67_blur.jpg) no-repeat center";
}

//Arado Ar 68
function unblur_pic_Ar68() {
    document.getElementById("Ar68").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar68").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar68").style.background = "url(../img/Germany/Ar68.jpg) no-repeat center";
}

function blur_pic_Ar68() {
    document.getElementById("Ar68").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar68").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar68").style.background = "url(../img/Germany/Ar68_blur.jpg) no-repeat center";
}

//Arado Ar 76
function unblur_pic_Ar76() {
    document.getElementById("Ar76").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar76").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar76").style.background = "url(../img/Germany/Ar76.jpg) no-repeat center";
}

function blur_pic_Ar76() {
    document.getElementById("Ar76").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar76").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar76").style.background = "url(../img/Germany/Ar76_blur.jpg) no-repeat center";
}

//Arado Ar 80
function unblur_pic_Ar80() {
    document.getElementById("Ar80").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar80").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ar80").style.background = "url(../img/Germany/Ar80.jpg) no-repeat center";
}

function blur_pic_Ar80() {
    document.getElementById("Ar80").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ar80").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ar80").style.background = "url(../img/Germany/Ar80_blur.jpg) no-repeat center";
}

//Dornier Do 335
function unblur_pic_Do335() {
    document.getElementById("Do335").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do335").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Do335").style.background = "url(../img/Germany/Do335.jpg) no-repeat center";
}

function blur_pic_Do335() {
    document.getElementById("Do335").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Do335").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Do335").style.background = "url(../img/Germany/Do335_blur.jpg) no-repeat center";
}

//Focke-Wulf Fw 187
function unblur_pic_Fw187() {
    document.getElementById("Fw187").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fw187").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Fw187").style.background = "url(../img/Germany/Fw187.jpg) no-repeat center";
}

function blur_pic_Fw187() {
    document.getElementById("Fw187").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Fw187").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Fw187").style.background = "url(../img/Germany/Fw187_blur.jpg) no-repeat center";
}

//Focke-Wulf Fw 190
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

//Focke-Wulf Ta 152
function unblur_pic_Ta152() {
    document.getElementById("Ta152").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ta152").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ta152").style.background = "url(../img/Germany/Ta152.jpg) no-repeat center";
}

function blur_pic_Ta152() {
    document.getElementById("Ta152").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ta152").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ta152").style.background = "url(../img/Germany/Ta152_blur.jpg) no-repeat center";
}

//Focke-Wulf Ta 154
function unblur_pic_Ta154() {
    document.getElementById("Ta154").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ta154").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Ta154").style.background = "url(../img/Germany/Ta154.jpg) no-repeat center";
}

function blur_pic_Ta154() {
    document.getElementById("Ta154").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Ta154").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Ta154").style.background = "url(../img/Germany/Ta154_blur.jpg) no-repeat center";
}

//Heinkel He 51
function unblur_pic_He51() {
    document.getElementById("He51").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He51").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He51").style.background = "url(../img/Germany/He51.jpg) no-repeat center";
}

function blur_pic_He51() {
    document.getElementById("He51").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He51").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He51").style.background = "url(../img/Germany/He51_blur.jpg) no-repeat center";
}

//Heinkel He 112
function unblur_pic_He112() {
    document.getElementById("He112").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He112").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He112").style.background = "url(../img/Germany/He112.jpg) no-repeat center";
}

function blur_pic_He112() {
    document.getElementById("He112").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He112").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He112").style.background = "url(../img/Germany/He112_blur.jpg) no-repeat center";
}

//Heinkel He 162
function unblur_pic_He162() {
    document.getElementById("He162").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He162").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He162").style.background = "url(../img/Germany/He162.jpg) no-repeat center";
}

function blur_pic_He162() {
    document.getElementById("He162").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He162").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He162").style.background = "url(../img/Germany/He162_blur.jpg) no-repeat center";
}

//Heinkel He 219
function unblur_pic_He219() {
    document.getElementById("He219").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("He219").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("He219").style.background = "url(../img/Germany/He219.jpg) no-repeat center";
}

function blur_pic_He219() {
    document.getElementById("He219").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("He219").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("He219").style.background = "url(../img/Germany/He219_blur.jpg) no-repeat center";
}

//Messerschmitt Bf.109
function unblur_pic_Bf109() {
    document.getElementById("Bf109").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Bf109").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Bf109").style.background = "url(../img/Germany/Bf109.jpg) no-repeat center";
}

function blur_pic_Bf109() {
    document.getElementById("Bf109").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Bf109").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Bf109").style.background = "url(../img/Germany/Bf109_blur.jpg) no-repeat center";
}

//Messerschmitt Bf.110
function unblur_pic_Bf110() {
    document.getElementById("Bf110").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Bf110").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Bf110").style.background = "url(../img/Germany/Bf110.jpg) no-repeat center";
}

function blur_pic_Bf110() {
    document.getElementById("Bf110").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Bf110").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Bf110").style.background = "url(../img/Germany/Bf110_blur.jpg) no-repeat center";
}

//Messerschmitt Me.163 Komet
function unblur_pic_Me163() {
    document.getElementById("Me163").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me163").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Me163").style.background = "url(../img/Germany/Me163.jpg) no-repeat center";
}

function blur_pic_Me163() {
    document.getElementById("Me163").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me163").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Me163").style.background = "url(../img/Germany/Me163_blur.jpg) no-repeat center";
}

//Messerschmitt Me.210
function unblur_pic_Me210() {
    document.getElementById("Me210").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me210").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Me210").style.background = "url(../img/Germany/Me210.jpg) no-repeat center";
}

function blur_pic_Me210() {
    document.getElementById("Me210").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me210").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Me210").style.background = "url(../img/Germany/Me210_blur.jpg) no-repeat center";
}

//Messerschmitt Me.262
function unblur_pic_Me262() {
    document.getElementById("Me262").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me262").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Me262").style.background = "url(../img/Germany/Me262.jpg) no-repeat center";
}

function blur_pic_Me262() {
    document.getElementById("Me262").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me262").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Me262").style.background = "url(../img/Germany/Me262_blur.jpg) no-repeat center";
}

//Messerschmitt Me.410
function unblur_pic_Me410() {
    document.getElementById("Me410").style.animation = "zoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me410").style.backgroundSize = "auto 110%";}, 1300);
    document.getElementById("Me410").style.background = "url(../img/Germany/Me410.jpg) no-repeat center";
}

function blur_pic_Me410() {
    document.getElementById("Me410").style.animation = "unzoom 1.4s ease";
    setTimeout(() => { document.getElementById("Me410").style.backgroundSize = "auto 100%";}, 1300);
    document.getElementById("Me410").style.background = "url(../img/Germany/Me410_blur.jpg) no-repeat center";
}