import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import axios from "axios";
import classes from "./graph.module.css";

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

const Graph = () => {

    const { state } = useLocation()
    const [info, setinfo] = React.useState([]);
    async function fetchData(params) {
        try {
            const res = await axios.get('https://supermind-staging.vercel.app/api/test/graph');
            setinfo(res?.data);
        } catch (error) {
            console.log(error, "error");
        }
    }

    useEffect(() => {

        fetchData()
        return () => console.log("fetching");
    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            fetchData();
            console.log("calling in 6 sec")
        }, 60 * 100);
        return () => clearInterval(interval);

    }, [])


    const [data, setData] = React.useState(null)

    useEffect(() => {
        if (info.length > 0) {
            setData({
                labels: info?.map(item => item?.datetime),
                datasets: [
                    {
                        label: "First Dataset",
                        data: info?.map(item => item?.price),
                        backgroundColor: '#b4dcff',
                        borderColor: '#63b6ff',
                        tension: 0.4,
                        fill: true,
                        pointStyle: 'none',
                        // pointBorderColor: 'blue',
                        // pointBackgroundColor: '#fff',
                        showLine: true
                    }
                ]
            })
        }

        // return () => {
        //     console.log("setup")
        // }
        console.log("data info came")
    }, [info])

    return (
        <div className={classes.container} style={{ width: '800px', height: '800px' }}>
            <h1>{state?.name}</h1>
            <h2>ID: {state?.id}</h2>
            <div className={classes.graph}>
                {data != null ? <Line data={data}
                    options={{
                        radius: 0,
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false,

                                },
                                title: {
                                    display: true,
                                    text: 'Time'
                                }
                            },
                            y: {
                                grid: {
                                    display: true,

                                },
                                title: {
                                    display: true,
                                    text: 'Price'
                                }
                            },
                        },                     
                    }}
                >Hello</Line> : <></>}
            </div>
        </div>
    );
}

export default Graph;



