import { useContext } from 'react';
import AppContext from '../context/AppContext';
import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/market_cap.css'

export default function BarChart(props) {
    let [ state ] = useContext(AppContext);

    let marketCaps = state.backup.filter(coin => coin.id !== props.coin.id).splice(0, 9).map(coin => coin.marketCap);
    let names = state.backup.filter(coin => coin.id !== props.coin.id).splice(0, 9).map(coin => coin.id);
    let currentCoinMarketCap = props.coin.marketCap;
    let currentCoinName = props.coin.id;

    let finalMarketCaps = marketCaps.concat(currentCoinMarketCap);
    let finalNames = names.concat(currentCoinName);

    return (
        <>
            <section className="market_container">
                <Plot
                    data={[
                        {
                            x: finalNames,
                            y: finalMarketCaps,
                            type: 'bar',
                        },

                    ]}
                    style={{ display: 'flex' }}
                    layout={
                        {
                            autosize: true,
                            title: 'By MarketCap',
                            xaxis: {
                                title: {
                                    text: 'Name'
                                }
                            },
                            yaxis: {
                                title: {
                                    text: 'MarketCap'
                                }
                            }
                        }
                    }
                    useResizeHandler
                    className="market_cap_chart"
                />
            </section>
        </>
    )

}
