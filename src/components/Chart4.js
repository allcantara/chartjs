import React, { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';

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
                    label: 'USUÁRIOS',
                    data: values,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
                },
                {
                    label: 'SESSÃO',
                    data: sessionValues,
                    backgroundColor: [
                        'rgba(255, 90, 132, 0.6)',
                        'rgba(255, 90, 132, 0.6)',
                        'rgba(255, 90, 132, 0.6)',
                        'rgba(255, 90, 132, 0.6)',
                        'rgba(255, 90, 132, 0.6)',
                        'rgba(255, 90, 132, 0.6)',
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
                }
            ],
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);



    return (
        <Radar
            data={chartData}
            width={600}
            height={400}
            options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Radar',
                    fontSize: 25
                }
            }}
        />
    );
}
