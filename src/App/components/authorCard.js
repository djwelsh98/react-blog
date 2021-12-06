import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function AuthorCard(props) {
    const { index } = useParams();
    // console.log(typeof props.authorContent[index].authorNames);
    // console.log(useParams())
    return (
        <>
        <Card className="author-card">
            <Card.Body>
                <Card.Img src={props.authorContent[0].authorImg} class ="img-thumbnail rounded-circle"/>
                <Card.Title>{props.authorContent[0].authorNames}</Card.Title>
                <Card.Text>
                    {props.authorContent[0].authorDesc}
                </Card.Text>
            </Card.Body>
            
        </Card>
        <Card className="author-card">
        <Card.Body>
            <Card.Img src={props.authorContent[1].authorImg} class ="img-thumbnail rounded-circle"/> 
            <Card.Title>{props.authorContent[1].authorNames}</Card.Title>
            <Card.Text>
                {props.authorContent[1].authorDesc}
            </Card.Text>
        </Card.Body>
        
    </Card>

    <Card className="author-card">
        <Card.Img src={props.authorContent[2].authorImg} class ="img-thumbnail rounded-circle"/>
    <Card.Body>
        <Card.Title>{props.authorContent[2].authorNames} </Card.Title>
        <Card.Text>
            {props.authorContent[2].authorDesc}
        </Card.Text>
    </Card.Body>
    
</Card>
</>
    )
}

export default AuthorCard