ymaps.ready(init);

function init() {
    //СССР
    var myMap = new ymaps.Map("map", {
            center: [55.38492253252848,90.28337657439866],
            zoom: 4,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        });

    //myMap.behaviors.disable('scrollZoom');
    //myMap.behaviors.disable('drag');

    myMap.geoObjects
        .add(new ymaps.Placemark([44.15317857458352,133.26016749999997], {
            balloonContent: 'Арсеньевская авиационная компания «Прогресс» им. Н. И. Сазыкина'
        }))
        .add(new ymaps.Placemark([56.7639385679408,60.799029499999925], {
            balloonContent: 'Уральский Завод Гражданской Авиации'
        }))
        .add(new ymaps.Placemark([52.360002571844184,104.20827399999997], {
            balloonContent: 'Иркутский авиационный завод'
        }))
        .add(new ymaps.Placemark([55.8623480688928,49.10511149999999], {
            balloonContent: 'ОАО «Казанское авиационное производственное объединение»'
        }))
        .add(new ymaps.Placemark([55.85197506886613,49.040226000000004], {
            balloonContent: 'ПАО «Казанский вертолётный завод»'
        }))
        .add(new ymaps.Placemark([50.58573257293316,137.07934599999993], {
            balloonContent: 'Комсомольский-на-Амуре авиационный завод имени Ю. А. Гагарина'
        }))
        .add(new ymaps.Placemark([52.78269657155488,55.77991749999998], {
            balloonContent: 'ОАО «Кумертауское авиационное производственное предприятие»'
        }))
        .add(new ymaps.Placemark([56.327401068412634,43.857494999999936], {
            balloonContent: 'ОАО «Нижегородский авиационный завод «Сокол»»'
        }))
        .add(new ymaps.Placemark([55.06459656966407,82.98921349999993], {
            balloonContent: 'Новосибирское авиационное производственное объединение им. В. П. Чкалова'
        }))
        .add(new ymaps.Placemark([56.29913156842992,43.9425294999999], {
            balloonContent: 'Производственное объединение «Полёт»'
        }))
        .add(new ymaps.Placemark([51.79985216535076,55.1221169761962], {
            balloonContent: 'ФГУП ПО «Стрела»'
        }))
        .add(new ymaps.Placemark([47.252100074249995,39.72387899999992], {
            balloonContent: 'ПАО «Роствертол»'
        }))
        .add(new ymaps.Placemark([53.21288957121954,50.29929599999999], {
            balloonContent: 'ОАО «Авиакор»'
        }))
        .add(new ymaps.Placemark([47.19790507426989,38.88037899999997], {
            balloonContent: 'Таганрогский авиационный научно-технический комплекс имени Г. М. Бериева'
        }))
        .add(new ymaps.Placemark([51.85833307217866,107.73778149999995], {
            balloonContent: 'ОАО «Улан-Удэнский авиационный завод»'
        }))
        .add(new ymaps.Placemark([54.36980707026305,48.60504649999997], {
            balloonContent: 'АО «Авиастар-СП»'
        }))
        .add(new ymaps.Placemark([51.63670057231783,39.25120349999997], {
            balloonContent: 'ПАО «Воронежское акционерное самолётостроительное общество»'
        }));

    //Сначала мы получаем первый экземпляр коллекции слоев, потом первый слой коллекции.
    var layer = myMap.layers.get(0).get(0);
    //Отслеживаем событие окончания отрисовки тайлов.
    waitForTilesLoad(layer).then(function() {
        //Убираем всякую "мишуру" от Яндекса
        document.querySelector(".ymaps-2-1-77-gotoymaps__container").style.display = "none";
        document.querySelector(".ymaps-2-1-77-gototech").style.display = "none";
        document.querySelector(".ymaps-2-1-77-copyright__wrap").style.display = "none";
    });

}

//Получить слой, содержащий тайлы.
function getTileContainer(layer) {
    for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (
                layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
                || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[k];
            }
        }
    }
}

//Определить, все ли тайлы загружены. Возвращает Promise.
function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
        var tc = getTileContainer(layer), readyAll = true;
        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function() {
                resolve();
            });
        }
    });
}