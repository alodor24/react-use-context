import { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import styles from './Profile.module.css'
import UserContext from '../../context/User/UserContext'

const Profile = () => {

    const { selectedUser } = useContext(UserContext)

    return (
        <>
            { selectedUser ? (
                    <Card className={ styles.card }>
                        <Card.Img variant="top" src={ selectedUser.avatar } />
                        <Card.Body>
                            <Card.Title>
                                { `Name: ${ selectedUser.first_name } ${ selectedUser.last_name }` }
                            </Card.Title>

                            <Card.Text>
                                { `Email: ${ selectedUser.email }` }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <div>No user selected...!!</div>
            )}
        </>
    )
}

export default Profile