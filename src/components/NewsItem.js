import Card from 'react-bootstrap/Card';
import '../styles/article.css';

export default function NewsItem(props) {
    return (
        <Card className="news_story" bg="light">
            <Card.Img variant="top" className="news_story_img" src={props.newsItem.imgURL} />
            <Card.Body className="news_story_body">
            <Card.Text>{props.newsItem.description}</Card.Text>
            </Card.Body>
            <Card.Footer bg="dark" className="news_story_footer"><a href={props.newsItem.link}>{props.newsItem.title}</a></Card.Footer>
        </Card>
    )
}
