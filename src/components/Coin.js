import Card from 'react-bootstrap/Card';
import '../styles/coin.css';
import { ArrowDownCircleFill, ArrowUpCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function Coin(props) {
    let addClass = "";
    let icon;
    if (props.crypto.priceChange1h < 0) {
        addClass = "negative";
        icon = <ArrowDownCircleFill />;
    } else if (props.crypto.priceChange1h > 0) {
        addClass = "positive";
        icon = <ArrowUpCircleFill />;
    } else {
        addClass = "neutral";
        icon = <ArrowRightCircleFill />;
    }
    let navigate = useNavigate();
    let handleClick = useCallback(() => navigate(`/details/${props.crypto.rank}`, {replace: true}), [navigate]);
    //let handleClick = useCallback(() => navigate(`/details/`, { rank: props.crypto.rank} ), [navigate]);


    return (
        <Card className="coin" bg="light">
            <Card.Header bg="primary" className="coin_header">
                <div><Badge bg="dark">{props.crypto.rank}</Badge> {props.crypto.name}</div>
                <Card.Img className="coin_image" src={props.crypto.icon}></Card.Img>
            </Card.Header>
            <Card.Body className="coin_body">
                <Card.Text>Supply: {props.crypto.totalSupply}</Card.Text>
                <Card.Text className={addClass + " price_change"}>{icon}</Card.Text>
                <Card.Text className={addClass + " price_change"}>{props.crypto.priceChange1h}</Card.Text>
            </Card.Body>
            <Card.Footer className="coin_footer">
                <Button onClick={handleClick} bg="primary" className="coin_button">Details</Button>
                <Card.Text>{props.crypto.symbol} {props.crypto.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</Card.Text>
            </Card.Footer>
        </Card>
    )
}
