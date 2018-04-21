<template>
    <div>
        <doughnut-chart></doughnut-chart>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import DoughnutChart from '../../../Shared/Protected/Statistics/DoughnutChart.js';

    @Component ({
        name: 'statistics',
        components: {
            DoughnutChart
        }
    })
    export default class Statistics extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>

</style>