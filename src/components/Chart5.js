import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default ({ values }) => {
    const [chartData, setChartData] = useState({});



    useEffect(() => {
        setChartData({
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [
                {
                    label: 'USUÁRIOS',
                    data: values,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        })
    }, [values]);



    return (
        <Doughnut
            data={chartData}
            width={600}
            height={400}
            options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Doughnut',
                    fontSize: 25
                }
            }}
        />
    );
}
