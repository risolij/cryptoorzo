import { useContext } from 'react';
import AppContext from '../context/AppContext';
import React from 'react';
import NewsItem from './NewsItem';

export default function RelatedNews(props) {
    let [state, dispatch] = useContext(AppContext);
    let relatedNews = state.news.filter(related => related.relatedCoins.includes(props.coin.id));
    console.log(state.news);
    console.log(relatedNews);

    return (
        <>
            {
                relatedNews.map((newsItem, index) => <NewsItem key={index} newsItem={newsItem} />)
            }
        </>
    )

}
