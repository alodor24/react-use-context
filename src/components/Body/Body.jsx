import { Container, Row, Col } from 'react-bootstrap'
import ListUsers from '../ListUsers/ListUsers'
import Profile from '../Profile/Profile'
import UserState from '../../context/User/UserState'

const Body = () => {

    return (
        <UserState>
            <Container className="pt-5">
                <Row>
                    <Col md={7}>
                        <ListUsers />
                    </Col>

                    <Col md={5}>
                        <Profile />
                    </Col>
                </Row>
            </Container>
        </UserState>
    )
}

export default Body