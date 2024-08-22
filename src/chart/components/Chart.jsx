import {useEffect} from "react";
import { Chart } from 'chart.js'

export function ChartComponent (){
    useEffect(() => {
        let myChart;

        const OPEN_API = "https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m";

        const draw = (res) => {
            const opt = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric'
            };
            res.hourly.time = res.hourly.time.map(e => {
                return new Intl.DateTimeFormat("ko-KR", opt).format(new Date(e));
            });
            const data = {
                labels: res.hourly.time,
                datasets: [{
                    label: '서울의 온도차트',
                    data: res.hourly.temperature_2m,
                    borderColor: 'rgb(255,99,132)',
                    backgroundColor: 'rgba(255,99,132,0.5)',
                    pointStyle: 'circle',
                    pointRadius: 10,
                    pointHoverRadius: 15,
                }]
            };
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: data
            });
        };

        const fetchData = async () => {
            const ret = await fetch(OPEN_API).then(res => res.json());
            draw(ret);
        };

        fetchData();

        // cleanup 함수 반환: 컴포넌트가 언마운트될 때 또는 useEffect가 다시 실행되기 전에 실행됩니다.
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, []);
    return <canvas id="myChart" width="400" height="400"></canvas>
}