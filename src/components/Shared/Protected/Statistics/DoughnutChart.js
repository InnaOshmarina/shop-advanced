
import { Doughnut } from 'vue-chartjs';
let data = {
    labels: ['Кондиционеры', 'Ноутбуки', 'Офисн. кресла', 'Пылесосы', 'Стиральные машины', 'Теплый пол'],
    datasets: [
        {
            data: [2, 6, 2, 3, 4, 0],
            backgroundColor: ['Blue', 'Yellow', 'Purple', 'Red', 'Green', 'Pink']
        }
    ]
};

let options = {
        title: {
            display: true,
            position: 'bottom',
            text: 'Товары'
        },
        responsive: true,
        maintainAspectRatio: false
};

export default {
    extends: Doughnut,
    mounted () {
        this.renderChart(data, options);
    }
};
