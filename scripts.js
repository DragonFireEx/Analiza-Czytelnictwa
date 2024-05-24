document.addEventListener('DOMContentLoaded', () => {
    // Wykres kołowy - Ulubione Książki
    const favoriteBooksCtx = document.getElementById('favoriteBooksChart').getContext('2d');
    const favoriteBooksChart = new Chart(favoriteBooksCtx, {
        type: 'doughnut',
        data: {
            labels: ['Harry Potter', 'Opowieści z Narnii', 'Igrzyska śmierci', 'Gwiazd naszych wina', 'Zabić drozda', 'Sto lat samotności', 'Wielki Gatsby', 'Zbrodnia i kara', 'Duma i uprzedzenie', 'Wojna i pokój'],
            datasets: [{
                data: [20, 10, 15, 15, 10, 15, 12.5, 12.5, 18, 12],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56', '#36A2EB']
            }]
        }
    });

    // Wykres słupkowy - Popularność Gatunków Literackich
    const genresCtx = document.getElementById('genresChart').getContext('2d');
    const genresChart = new Chart(genresCtx, {
        type: 'bar',
        data: {
            labels: ['Dzieci', 'Młodzież', 'Dorośli młodzi', 'Dorośli', 'Seniorzy'],
            datasets: [{
                    label: 'Fantasy',
                    data: [50, 30, 10, 5, 5],
                    backgroundColor: '#FF6384'
                },
                {
                    label: 'Baśnie',
                    data: [50, 0, 0, 0, 0],
                    backgroundColor: '#36A2EB'
                },
                {
                    label: 'Young Adult (YA)',
                    data: [0, 40, 10, 0, 0],
                    backgroundColor: '#FFCE56'
                },
                {
                    label: 'Science Fiction',
                    data: [0, 30, 15, 10, 5],
                    backgroundColor: '#4BC0C0'
                },
                {
                    label: 'Literatura piękna',
                    data: [0, 0, 35, 25, 15],
                    backgroundColor: '#9966FF'
                },
                {
                    label: 'Kryminały',
                    data: [0, 0, 20, 45, 20],
                    backgroundColor: '#FF9F40'
                }
            ]
        }
    });

    // Wykres liniowy - Trendy Czytelnictwa
    const trendsCtx = document.getElementById('trendsChart').getContext('2d');
    const trendsChart = new Chart(trendsCtx, {
        type: 'line',
        data: {
            labels: ['Dzieci', 'Młodzież', 'Dorośli młodzi', 'Dorośli', 'Seniorzy'],
            datasets: [{
                    label: 'Fantasy',
                    data: [50, 30, 10, 5, 5],
                    borderColor: '#FF6384',
                    fill: false
                },
                {
                    label: 'Literatura piękna',
                    data: [0, 0, 35, 25, 15],
                    borderColor: '#9966FF',
                    fill: false
                },
                {
                    label: 'Kryminały',
                    data: [0, 0, 20, 45, 20],
                    borderColor: '#FF9F40',
                    fill: false
                },
                {
                    label: 'Klasyka literatury',
                    data: [0, 0, 15, 20, 40],
                    borderColor: '#36A2EB',
                    fill: false
                }
            ]
        }
    });

    // Mapa ciepła - Preferencje Czytelnicze (prostokąty zamiast mapy ciepła)
    const heatmapCtx = document.getElementById('heatmapChart').getContext('2d');
    const heatmapChart = new Chart(heatmapCtx, {
        type: 'bar',
        data: {
            labels: ['J.K. Rowling', 'C.S. Lewis', 'Suzanne Collins', 'John Green', 'Harper Lee', 'Gabriel Garcia Marquez', 'F. Scott Fitzgerald', 'Fyodor Dostoevsky', 'Jane Austen', 'Leo Tolstoy'],
            datasets: [{
                    label: 'Dzieci',
                    data: [60, 40, 0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: '#FF6384'
                },
                {
                    label: 'Młodzież',
                    data: [0, 0, 50, 50, 0, 0, 0, 0, 0, 0],
                    backgroundColor: '#36A2EB'
                },
                {
                    label: 'Dorośli młodzi',
                    data: [0, 0, 0, 0, 45, 55, 0, 0, 0, 0],
                    backgroundColor: '#FFCE56'
                },
                {
                    label: 'Dorośli',
                    data: [0, 0, 0, 0, 0, 0, 55, 45, 0, 0],
                    backgroundColor: '#4BC0C0'
                },
                {
                    label: 'Seniorzy',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 60, 40],
                    backgroundColor: '#9966FF'
                }
            ]
        }
    });
});
