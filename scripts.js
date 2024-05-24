document.addEventListener('DOMContentLoaded', function () {
    // Wykres ulubionych książek w poszczególnych grupach wiekowych
    var favoriteBooksChart = new Chart(document.getElementById('favoriteBooksChart'), {
        type: 'bar',
        data: {
            labels: ['Dzieci', 'Młodzież', 'Dorośli młodzi', 'Dorośli', 'Seniorzy'],
            datasets: [{
                label: 'Czas spędzony w [h]',
                data: [0.5, 1, 0.7, 0.5, 1.4], // Przykładowe dane - liczba ulubionych książek w każdej grupie wiekowej
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index]; // Zwraca tytuł grupy wiekowej zamiast numeru
                    },
                    label: function (tooltipItem, data) {
                        return "Ulubiona książka: " + data.datasets[0].data[tooltipItem.index]; // Wyświetla liczbę ulubionych książek
                    }
                }
            }
        }
    });

    // Wykres popularności gatunków literackich
    var genresChart = new Chart(document.getElementById('genresChart'), {
        type: 'pie',
        data: {
            labels: ['Fantasy', 'Baśnie', 'Young Adult (YA)', 'Science Fiction', 'Literatura piękna', 'Kryminały', 'Klasyka literatury'],
            datasets: [{
                label: 'Popularność (%)',
                data: [20, 20, 15, 10, 15, 10, 10], // Przykładowe dane - procentowa popularność każdego gatunku literackiego
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF5733',
                    '#C70039',
                    '#900C3F',
                    '#581845'
                ]
            }]
        }
    });

    // Wykres trendy czytelnictwa
    var trendsChart = new Chart(document.getElementById('trendsChart'), {
        type: 'line',
        data: {
            labels: ['Dzieci', 'Młodzież', 'Dorośli młodzi', 'Dorośli', 'Seniorzy'],
            datasets: [{
                label: 'Trendy czytelnictwa',
                data: [25, 40, 30, 25, 40], // Przykładowe dane - procentowy udział czytelnictwa w poszczególnych grupach wiekowych
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
