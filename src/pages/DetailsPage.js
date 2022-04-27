import NavComponent from '../components/NavComponent';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import PlotComponent from '../components/PlotComponent';
import RelatedNews from '../components/RelatedNews';
import '../styles/details.css'


export default function DetailsPage() {
    let [state, ] = useContext(AppContext);
    let params = useParams();
    let currentCoin = state.backup.find(c => c.rank === Number(params.rank));


    return (
        <>
            <NavComponent />
            <h1> price history</h1>
            <section className="details_page_plot">
                <PlotComponent coin={currentCoin} />
            </section>
            <section className="details_page_news">
                <RelatedNews coin={currentCoin} />
            </section>
        </>
    )
}
