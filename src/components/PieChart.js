import { useContext } from 'react';
import AppContext from '../context/AppContext';
import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/market_cap.css'

export default function PieChart(props) {
    let [ state ] = useContext(AppContext);

    let marketCaps = state.backup.map(coin => coin.marketCap).splice(0,10);
    let names = state.backup.map(coin => coin.id).splice(0,10);

    return (
        <>
            <section className="market_container">
                <Plot
                    data={[
                        {
                            values: marketCaps,
                            labels: names,
                            hole: .4,
                            type: 'pie',
                            textposition: 'inside',
                        },

                    ]}
                    style={{ display: 'flex' }}
                    layout={
                        {
                            textinfo: "none",
                            autosize: true,
                            title: 'By MarketCap',
                        }
                    }
                    useResizeHandler
                    className="market_cap_chart"
                />
            </section>
        </>
    )

}
