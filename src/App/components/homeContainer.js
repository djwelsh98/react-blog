import { Container, Row, Col } from 'react-bootstrap';
import BlogList from './blogList';
import MainSlide from './carousel';
import content from '../content'

function HomeDisplay () {
    
    return (
        <Container fluid>
            <Row>
                <Col xs ={4}> 
                    <BlogList content = {content}/>
                </Col>
                <Col xs ={8}>
                    <MainSlide/>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeDisplay