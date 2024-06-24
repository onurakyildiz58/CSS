function inicializarChart() {
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };

    var chartColors = {
        red: 'rgb(212, 22, 22)',
    };

    var color = Chart.helpers.color;
    var config = {
        type: 'radar',
        data: {
            labels: [
                "Ford Courier", "Ford Custom", "Ford Ranger", "Ford Kuga", "Malhar", "Preparar", "Refeições", "Estudar"
            ],
            datasets: [{
                label: "Ziyaret Edilen Araçlar",
                backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
                borderColor: chartColors.red,
                pointBackgroundColor: chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ]
            }]
        },
    };

    window.myRadar = new Chart(document.getElementById("canvas"), config);
}

inicializarChart();