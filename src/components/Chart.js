import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

export default ({ values }) => {
    const [chartData, setChartData] = useState({});
    const [sessionValues, setSessionValues] = useState([]);



    const randomSession = () => {
        let arr = new Uint32Array(6);
        arr.map((_, i) => arr[i] = Math.random(10) * 32 );
        setSessionValues(arr);
    }



    useEffect(() => {
        randomSession();
        setChartData({
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [
                {
                    type: 'bar',
                    label: 'USUÁRIOS',
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                },
                {
                    type: 'bar',
                    label: 'SESSÃO',
                    data: sessionValues,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
        })
    }, [values]);



    return (
        <Bar
            data={chartData}
            width={600}
            height={300}
            options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'SSC Auditoria',
                    fontSize: 25
                }
            }}
        />
    );
}
