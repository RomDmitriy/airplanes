/*Картинки и видео*/

function replaceImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

function replaceVideo(url) {
    var expandVideo = document.getElementById("video");
        document.getElementById("video").setAttribute("src", url);
    expandVideo.parentElement.style.display = "flex";
}

/*Таблицы*/
//P.S. У ChartJS есть такой баг, что графики не скейлятся при сжатии страницы. Поэтому для тестирования адаптации страницы требуется её обновить

Chart.defaults.global.defaultFontColor = '#c7c7c7';
Chart.defaults.global.defaultFontSize = 16;

var barChartDataUSSR = {
    labels: ['1941 г.', '1942 г.', '1943 г.', '1944 г.', '1945 г.'],
    datasets: [{
        label: 'Штурмовики',
        backgroundColor: '#FF6384',
        data: [
            1542,
            8191,
            10773,
            10719,
            6015
        ]
    }, {
        label: 'Истребители',
        backgroundColor: '#36A2EB',
        data: [
            7220,
            9643,
            14292,
            17892,
            10575
        ]
    }, {
        label: 'Бомбардировщики',
        backgroundColor: '#4BC0C0',
        data: [
            3754,
            3508,
            3919,
            4058,
            2638
        ]
    }]

};

var barChartDataGermany = {
    labels: ['1941 г.', '1942 г.', '1943 г.', '1944 г.', '1945 г.'],
    datasets: [{
        label: 'Штурмовики',
        backgroundColor: '#FF6384',
        data: [
            507,
            1249,
            3266,
            5496,
            1104
        ]
    }, {
        label: 'Истребители',
        backgroundColor: '#36A2EB',
        data: [
            3744,
            5515,
            10898,
            25285,
            4936
        ]
    }, {
        label: 'Бомбардировщики',
        backgroundColor: '#4BC0C0',
        data: [
            3373,
            4337,
            4649,
            2287,
            0
        ]
    }]

};

window.onload = function() {
    var ctxGermany = document.getElementById('Germany_planes').getContext('2d');
    window.BarGermany = new Chart(ctxGermany, {
        type: 'bar',
        data: barChartDataGermany,
        options: {
            title: {
                display: true,
                text: 'Производство самолётов Германии',
                fontSize: 20
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: { color: "#c7c7c7" }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: { color: "#c7c7c7" }
                }]
            }
        }
    });

    var ctxUSSR = document.getElementById('USSR_planes').getContext('2d');
    window.BarUSSR = new Chart(ctxUSSR, {
        type: 'bar',
        data: barChartDataUSSR,
        options: {
            title: {
                display: true,
                text: 'Производство самолётов СССР',
                fontSize: 20
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: { color: "#c7c7c7" }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: { color: "#c7c7c7" }
                }]
            }
        }
    });
};