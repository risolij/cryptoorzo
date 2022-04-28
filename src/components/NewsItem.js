import Card from 'react-bootstrap/Card';
import '../styles/article.css';
import { HandThumbsUp, HandThumbsDown, Twitter } from 'react-bootstrap-icons';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function NewsItem({newsItem}) {
    let [state, dispatch] = useContext(AppContext);

    let handleThumbUp = () => {
        newsItem.reactionsCount[2] += 1;
        dispatch({type: 'handleThumbCount', payload: newsItem});
    }

    let handleThumbDown = () => {
        newsItem.reactionsCount[3] -= 1;
        dispatch({type: 'handleThumbCount', payload: newsItem});
    }


    return (
        <Card className="news_story" bg="light">
            <Card.Img variant="top" className="news_story_img" src={newsItem.imgURL} />
            <Card.Header bg="dark" className="news_story_header"><a href={newsItem.link}>{newsItem.title}</a></Card.Header>
            <Card.Body className="news_story_body">
                <Card.Text>{newsItem.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="news_story_footer">
                <div>
                    <Twitter />
                </div>
                <div>
                    <Card.Text><HandThumbsUp onClick={handleThumbUp}/>{newsItem.reactionsCount[2]}</Card.Text>
                    <Card.Text><HandThumbsDown onClick={handleThumbDown}/>{newsItem.reactionsCount[3]}</Card.Text>
                </div>
            </Card.Footer>
        </Card>
    )
}
