import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

export default ({ values }) => {
    const [chartData, setChartData] = useState({});
    const [sessionValues, setSessionValues] = useState([]);



    const randomSession = () => {
        let arr = new Uint32Array(6);
        arr.map((_, i) => {
            arr[i] = Math.random(10) * 32;
        })
        setSessionValues(arr);
    }



    useEffect(() => {
        randomSession();
        setChartData({
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [
                {
                    type: 'line',
                    label: 'USUÁRIOS',
                    data: values,
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                },
                {
                    type: 'bar',
                    label: 'SESSÃO',
                    data: sessionValues,
                    backgroundColor: [
                        'rgba(255, 206, 1, 0.3)',
                        'rgba(255, 206, 1, 0.3)',
                        'rgba(255, 206, 1, 0.3)',
                        'rgba(255, 206, 1, 0.3)',
                        'rgba(255, 206, 1, 0.3)',
                        'rgba(255, 206, 1, 0.3)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 1, 1)',
                        'rgba(255, 206, 1, 1)',
                        'rgba(255, 206, 1, 1)',
                        'rgba(255, 206, 1, 1)',
                        'rgba(255, 206, 1, 1)',
                        'rgba(255, 206, 1, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
        })
    }, [values]);



    return (
        <Line
            data={chartData}
            width={600}
            height={300}
            options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'SSC Auditoria',
                    fontSize: 25
                },
                scales: {
                    yAxes: [{
                        stacked: false
                    }]
                }
            }}
        />
    );
}
