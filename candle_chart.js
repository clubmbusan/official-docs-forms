const apiUrl = 'https://api.exchangerate.host/timeseries';

const ctx = document.getElementById('candlestickChart').getContext('2d');
const candlestickChart = new Chart(ctx, {
    type: 'candlestick',
    data: {
        datasets: [{
            label: 'USD/KRW',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                adapters: {
                    date: {
                        locale: 'en-US'
                    }
                }
            },
            y: {
                beginAtZero: false
            }
        }
    }
});
