import { useState, useEffect } from 'react';
import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/plot.css';

export default function PlotComponent(props) {
    let [data, updateData] = useState([]);

    useEffect(() => {
        fetch('https://api.coinstats.app/public/v1/charts?period=all&coinId=' + props.coin.id)
            .then(res => res.json())
            .then(res => updateData(res.chart))
            .then(console.log("making another api call"));
    }, [])

    let dates  = data.map(d =>  {
        let newDate = new Date(d[0] * 1000) ;
        let year  = newDate.getFullYear();
        let day   = newDate.getDate();
        let month = newDate.getMonth() + 1;

        return `${year}-${month}-${day}`
    });

    let prices = data.map(d => d[1]);

    return (
        <>
            <section className="plot_container">
                <Plot
                    data={[
                        {
                            x: dates,
                            y: prices,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'orange'},
                            fill: 'tonexty',
                        },

                    ]}
                    style={{ display: 'flex' }}
                    layout={
                        {
                            autosize: true,
                            title: props.coin.id,
                            xaxis: {
                                title: {
                                    text: 'Date'
                                }
                            },
                            yaxis: {
                                title: {
                                    text: 'Price'
                                }
                            }
                        }
                    }
                    useResizeHandler
                    className="plotly_chart"
                />
            </section>
        </>
    )

}
