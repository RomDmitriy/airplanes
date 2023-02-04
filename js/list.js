var blocked = false;
var feight = 330;
var animation_ver = "fate";

var images = []; //предзагрузка незаблюренных картинок(т.к. при попытке сделать через filter: blur блюрился и текст тоже, приходится использовать этот костыль с двумя видами картинок)
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "img/list/USSR/Bombers.jpg",
    "img/list/Germany/Bombers.jpg",
    "img/list/USSR/Fighters.jpg",
    "img/list/Germany/Fighters.jpg",
    "img/list/USSR/Stormtroopers.jpg",
    "img/list/Germany/Stormtroopers.jpg"
)

if (window.screen.width < 740) { //Подгонка анимаций под мобильные устройства
    feight = 952;
    animation_ver = "fote";
}

//P.S. Ширина экрана проверяется единожды при загрузке страницы, поэтому при сжатии/растяжении ширины экрана в целях тестирования требуется обновить страницу

window.onload = function() {
    if (sessionStorage.getItem("currentCountry") == 0) {
        document.querySelector(".main_div").style.height = feight + "px";
        document.querySelector(".plane_list").style.display = "flex";
        document.getElementById("Stormtroopers").style.display = "flex";
        document.getElementById("Fighters").style.display = "flex";
        document.getElementById("Bombers").style.display = "flex";
        document.getElementById("Stormtroopers").style.background = "url(img/list/USSR/Stormtroopers_blur.jpg) no-repeat center";
        document.getElementById("Stormtroopers").style.backgroundSize = "cover";
        document.getElementById("Fighters").style.background = "url(img/list/USSR/Fighters_blur.jpg) no-repeat center";
        document.getElementById("Fighters").style.backgroundSize = "cover";
        document.getElementById("Bombers").style.background = "url(img/list/USSR/Bombers_blur.jpg) no-repeat center";
        document.getElementById("Bombers").style.backgroundSize = "cover";
        document.getElementById("Stormtroopers").setAttribute("onclick", "window.location.href='USSR/Stormtroopers.html'");
        document.getElementById("Fighters").setAttribute("onclick", "window.location.href='USSR/Fighters.html'");
        document.getElementById("Bombers").setAttribute("onclick", "window.location.href='USSR/Bombers.html'");
    } else if (sessionStorage.getItem("currentCountry") == 1) {
        document.querySelector(".main_div").style.height = feight + "px";
        document.querySelector(".plane_list").style.display = "flex";
        document.getElementById("Stormtroopers").style.display = "flex";
        document.getElementById("Fighters").style.display = "flex";
        document.getElementById("Bombers").style.display = "flex";
        document.getElementById("Stormtroopers").style.background = "url(img/list/Germany/Stormtroopers_blur.jpg) no-repeat center";
        document.getElementById("Stormtroopers").style.backgroundSize = "cover";
        document.getElementById("Fighters").style.background = "url(img/list/Germany/Fighters_blur.jpg) no-repeat center";
        document.getElementById("Fighters").style.backgroundSize = "cover";
        document.getElementById("Bombers").style.background = "url(img/list/Germany/Bombers_blur.jpg) no-repeat center";
        document.getElementById("Bombers").style.backgroundSize = "cover";
        document.getElementById("Stormtroopers").setAttribute("onclick", "window.location.href='Germany/Stormtroopers.html'");
        document.getElementById("Fighters").setAttribute("onclick", "window.location.href='Germany/Fighters.html'");
        document.getElementById("Bombers").setAttribute("onclick", "window.location.href='Germany/Bombers.html'");
    }
}

document.querySelectorAll(".pics").forEach(function(l){l.style.backgroundSize = "cover"});

document.addEventListener("DOMContentLoaded", function(){

    if (sessionStorage.getItem("currentCountry") == 0)
        document.getElementById("USSR").classList.add("active");
    else if (sessionStorage.getItem("currentCountry") == 1)
        document.getElementById("Germany").classList.add("active");

    USSR.addEventListener("click", function(){
        if (blocked == false && sessionStorage.getItem("currentCountry") != 0) {
            blocked = true;

            if (sessionStorage.getItem("currentCountry") == 1) {

                sessionStorage.setItem("currentCountry", 0);

                document.getElementById("USSR").classList.add("active");
                document.getElementById("Germany").classList.remove("active");

                setTimeout(() => {blocked = false}, 1400);

                if(window.screen.width < 740) { document.querySelectorAll(".pics").forEach(function(item){item.style.display = "none"}); }

                document.getElementById("Stormtroopers").style.background = "url()";
                document.getElementById("Fighters").style.background = "url()";
                document.getElementById("Bombers").style.background = "url()";

                document.querySelector(".main_div").style.animation = "un" + animation_ver + " 0.8s ease";
                document.querySelector(".main_div").style.height = "105px";
                    
                document.getElementById("Stormtroopers").setAttribute("onclick", "window.location.href='USSR/Stormtroopers.html'");
                document.getElementById("Fighters").setAttribute("onclick", "window.location.href='USSR/Fighters.html'");
                document.getElementById("Bombers").setAttribute("onclick", "window.location.href='USSR/Bombers.html'");

                document.querySelectorAll(".plane_type").forEach(function(item){item.style.display = "none"});

                setTimeout(() => {document.querySelector(".main_div").style.animation = animation_ver + " 0.8s ease";}, 800);

                setTimeout(() => {
                    document.getElementById("Stormtroopers").style.background = "url(img/list/USSR/Stormtroopers_blur.jpg) no-repeat center";
                    document.getElementById("Stormtroopers").style.backgroundSize = "cover";
                }, 1200);
                setTimeout(() => {
                    document.getElementById("Fighters").style.background = "url(img/list/USSR/Fighters_blur.jpg) no-repeat center";
                    document.getElementById("Fighters").style.backgroundSize = "cover";
                }, 1200);
                setTimeout(() => {
                    document.getElementById("Bombers").style.background = "url(img/list/USSR/Bombers_blur.jpg) no-repeat center";
                    document.getElementById("Bombers").style.backgroundSize = "cover";
                }, 1200);

                if(window.screen.width < 740) { setTimeout(() => {document.querySelectorAll(".pics").forEach(function(item){item.style.display = "flex"});}, 1400); }

                setTimeout(() => {document.querySelectorAll(".plane_type").forEach(function(item){item.style.display = "inline"});}, 1400);

                setTimeout(() => {document.querySelector(".main_div").style.height = feight + "px";}, 1600);
            } else { //случай с undefined
                sessionStorage.setItem("currentCountry", 0);

                document.getElementById("USSR").classList.add("active");

                setTimeout(() => {blocked = false}, 750);

                setTimeout(() => {document.querySelector(".plane_list").style.display = "flex";}, 700);

                setTimeout(() => {document.getElementById("Stormtroopers").style.display = "flex";}, 700);
                setTimeout(() => {document.getElementById("Fighters").style.display = "flex";}, 700);
                setTimeout(() => {document.getElementById("Bombers").style.display = "flex";}, 700);

                document.getElementById("Stormtroopers").setAttribute("onclick", "window.location.href='USSR/Stormtroopers.html'");
                document.getElementById("Fighters").setAttribute("onclick", "window.location.href='USSR/Fighters.html'");
                document.getElementById("Bombers").setAttribute("onclick", "window.location.href='USSR/Bombers.html'");

                setTimeout(() => {
                    document.getElementById("Stormtroopers").style.background = "url(img/list/USSR/Stormtroopers_blur.jpg) no-repeat center"
                    
                }, 700);
                setTimeout(() => {document.getElementById("Fighters").style.background = "url(img/list/USSR/Fighters_blur.jpg) no-repeat center"}, 700);
                setTimeout(() => {document.getElementById("Bombers").style.background = "url(img/list/USSR/Bombers_blur.jpg) no-repeat center"}, 700);

                setTimeout(() => {document.getElementById("Stormtroopers").style.backgroundSize = "auto 100%";}, 700);
                setTimeout(() => {document.getElementById("Fighters").style.backgroundSize = "auto 100%";}, 700);
                setTimeout(() => {document.getElementById("Bombers").style.backgroundSize = "auto 100%";}, 700);

                document.querySelector(".main_div").style.animation = animation_ver + " 0.8s ease";
                document.querySelector(".main_div").style.height = feight + "px";
            }
        }
    });

    Germany.addEventListener("click", function(){
        if (blocked == false && sessionStorage.getItem("currentCountry") != 1) {
            if (sessionStorage.getItem("currentCountry") == 0) {

                blocked = true;

                sessionStorage.setItem("currentCountry", 1);

                document.getElementById("Germany").classList.add("active");
                document.getElementById("USSR").classList.remove("active");

                setTimeout(() => {blocked = false}, 1400);

                if(window.screen.width < 740) { document.querySelectorAll(".pics").forEach(function(item){item.style.display = "none"}); }

                document.getElementById("Stormtroopers").style.background = "url()";
                document.getElementById("Fighters").style.background = "url()";
                document.getElementById("Bombers").style.background = "url()";

                document.querySelector(".main_div").style.animation = "un" + animation_ver + " 0.8s ease";
                document.querySelector(".main_div").style.height = "105px";

                document.getElementById("Stormtroopers").setAttribute("onclick", "window.location.href='Germany/Stormtroopers.html'");
                document.getElementById("Fighters").setAttribute("onclick", "window.location.href='Germany/Fighters.html'");
                document.getElementById("Bombers").setAttribute("onclick", "window.location.href='Germany/Bombers.html'");

                document.querySelectorAll(".plane_type").forEach(function(item){item.style.display = "none"});

                setTimeout(() => {document.querySelector(".main_div").style.animation = animation_ver + " 0.8s ease";}, 800);

                setTimeout(() => {
                    document.getElementById("Stormtroopers").style.background = "url(img/list/Germany/Stormtroopers_blur.jpg) no-repeat center";
                    document.getElementById("Stormtroopers").style.backgroundSize = "cover";
            }, 1200);
                setTimeout(() => {
                    document.getElementById("Fighters").style.background = "url(img/list/Germany/Fighters_blur.jpg) no-repeat center";
                    document.getElementById("Fighters").style.backgroundSize = "cover";
            }, 1200);
                setTimeout(() => {
                    document.getElementById("Bombers").style.background = "url(img/list/Germany/Bombers_blur.jpg) no-repeat center";
                    document.getElementById("Bombers").style.backgroundSize = "cover";
            }, 1200);
                    
                if(window.screen.width < 740) { setTimeout(() => {document.querySelectorAll(".pics").forEach(function(item){item.style.display = "flex"});}, 1400); }

                setTimeout(() => {document.querySelectorAll(".plane_type").forEach(function(item){item.style.display = "inline"});}, 1400);

                setTimeout(() => {document.querySelector(".main_div").style.height = feight + "px";}, 1600);
            } else { //случай с undefined
                sessionStorage.setItem("currentCountry", 1);

                document.getElementById("Germany").classList.add("active");

                setTimeout(() => {blocked = false}, 750);

                setTimeout(() => {document.querySelector(".plane_list").style.display = "flex";}, 700);

                setTimeout(() => {document.getElementById("Stormtroopers").style.display = "flex";}, 700);
                setTimeout(() => {document.getElementById("Fighters").style.display = "flex";}, 700);
                setTimeout(() => {document.getElementById("Bombers").style.display = "flex";}, 700);

                document.getElementById("Stormtroopers").setAttribute("onclick", "window.location.href='Germany/Stormtroopers.html'");
                document.getElementById("Fighters").setAttribute("onclick", "window.location.href='Germany/Fighters.html'");
                document.getElementById("Bombers").setAttribute("onclick", "window.location.href='Germany/Bombers.html'");

                setTimeout(() => {document.getElementById("Stormtroopers").style.background = "url(img/list/Germany/Stormtroopers_blur.jpg) no-repeat center"}, 700);
                setTimeout(() => {document.getElementById("Fighters").style.background = "url(img/list/Germany/Fighters_blur.jpg) no-repeat center"}, 700);
                setTimeout(() => {document.getElementById("Bombers").style.background = "url(img/list/Germany/Bombers_blur.jpg) no-repeat center"}, 700);

                setTimeout(() => {document.getElementById("Stormtroopers").style.backgroundSize = "auto 100%";}, 700);
                setTimeout(() => {document.getElementById("Fighters").style.backgroundSize = "auto 100%";}, 700);
                setTimeout(() => {document.getElementById("Bombers").style.backgroundSize = "auto 100%";}, 700);

                document.querySelector(".main_div").style.animation = animation_ver + " 0.8s ease";
                document.querySelector(".main_div").style.height = feight + "px";
            }
        }
    });
});

function unblur_pic_Stormtroopers() {
    if (blocked == false && feight == 330) {
        document.getElementById("Stormtroopers").style.animation = "zoom 1.4s ease";
        setTimeout(() => { document.getElementById("Stormtroopers").style.backgroundSize = "auto 110%";}, 1300);
        if (sessionStorage.getItem("currentCountry") == 0 )
            document.getElementById("Stormtroopers").style.background = "url(img/list/USSR/Stormtroopers.jpg) no-repeat center";
        else
            document.getElementById("Stormtroopers").style.background = "url(img/list/Germany/Stormtroopers.jpg) no-repeat center";
    }
}

function blur_pic_Stormtroopers() {
    if (blocked == false && feight == 330) {
        document.getElementById("Stormtroopers").style.animation = "unzoom 1.4s ease";
        setTimeout(() => { document.getElementById("Stormtroopers").style.backgroundSize = "auto 100%";}, 1300);
        if (sessionStorage.getItem("currentCountry") == 0)
            document.getElementById("Stormtroopers").style.background = "url(img/list/USSR/Stormtroopers_blur.jpg) no-repeat center";
        else
            document.getElementById("Stormtroopers").style.background = "url(img/list/Germany/Stormtroopers_blur.jpg) no-repeat center";
    }
}

function unblur_pic_Fighters() {
    if (blocked == false && feight == 330) {
        document.getElementById("Fighters").style.animation = "zoom 1.4s ease";
        setTimeout(() => { document.getElementById("Fighters").style.backgroundSize = "auto 110%";}, 1300);
        if (sessionStorage.getItem("currentCountry") == 0)
            document.getElementById("Fighters").style.background = "url(img/list/USSR/Fighters.jpg) no-repeat center";
        else
            document.getElementById("Fighters").style.background = "url(img/list/Germany/Fighters.jpg) no-repeat center";
    }
}

function blur_pic_Fighters() {
    if (blocked == false && feight == 330) {
        document.getElementById("Fighters").style.animation = "unzoom 1.4s ease";
        setTimeout(() => { document.getElementById("Fighters").style.backgroundSize = "auto 100%";}, 1300);
        if (sessionStorage.getItem("currentCountry") == 0)
            document.getElementById("Fighters").style.background = "url(img/list/USSR/Fighters_blur.jpg) no-repeat center";
        else
            document.getElementById("Fighters").style.background = "url(img/list/Germany/Fighters_blur.jpg) no-repeat center";
    }
}

function unblur_pic_Bombers() {
    if (blocked == false && feight == 330) {
        document.getElementById("Bombers").style.animation = "zoom 1.4s ease";
        setTimeout(() => { document.getElementById("Bombers").style.backgroundSize = "auto 110%";}, 1300);
        if (sessionStorage.getItem("currentCountry") == 0)
            document.getElementById("Bombers").style.background = "url(img/list/USSR/Bombers.jpg) no-repeat center";
            else document.getElementById("Bombers").style.background = "url(img/list/Germany/Bombers.jpg) no-repeat center";
    }
}
function blur_pic_Bombers() {
    if (blocked == false && feight == 330) {
        document.getElementById("Bombers").style.animation = "unzoom 1.4s ease";
        setTimeout(() => { document.getElementById("Bombers").style.backgroundSize = "auto 100%";}, 1300);
        if (sessionStorage.getItem("currentCountry") == 0)
            document.getElementById("Bombers").style.background = "url(img/list/USSR/Bombers_blur.jpg) no-repeat center";
            else document.getElementById("Bombers").style.background = "url(img/list/Germany/Bombers_blur.jpg) no-repeat center";
    }
}