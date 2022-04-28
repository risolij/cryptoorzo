import Card from 'react-bootstrap/Card';
import '../styles/article.css';
import { HandThumbsUp, HandThumbsDown, Twitter } from 'react-bootstrap-icons';

export default function NewsItem(props) {
    let handleClick = () => {
        console.log("clicked");
    }

    return (
        <Card className="news_story" bg="light">
            <Card.Img variant="top" className="news_story_img" src={props.newsItem.imgURL} />
            <Card.Header bg="dark" className="news_story_header"><a href={props.newsItem.link}>{props.newsItem.title}</a></Card.Header>
            <Card.Body className="news_story_body">
                <Card.Text>{props.newsItem.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="news_story_footer">
                <div>
                    <Twitter />
                </div>
                <div>
                    <Card.Text><HandThumbsUp onClick={handleClick}/>{props.newsItem.reactionsCount[2]}</Card.Text>
                    <Card.Text><HandThumbsDown />{props.newsItem.reactionsCount[3]}</Card.Text>
                </div>
            </Card.Footer>
        </Card>
    )
}
