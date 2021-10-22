import { useState, useContext, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import styles from './ListUsers.module.css'
import UserContext from '../../context/User/UserContext'

const ListUsers = () => {

    const userContext = useContext(UserContext)
    const [selectedIndex, setSelectedIndex] = useState(null)
    
    useEffect(() => {
        userContext.getUsers()
        console.log('renderizado')
        // eslint-disable-next-line
    }, [])


    return (
        <ListGroup className={ styles.boxShadow }>
            { 
                userContext.users.map((user, index) => (
                    <ListGroup.Item 
                    key={ user.id } 
                    action
                    active={ selectedIndex === index }
                    onClick={ () => {
                        userContext.getProfile(user.id)
                        setSelectedIndex(index)
                    }}
                    >
                        <p className="mb-0">{ `${ user.first_name } ${ user.last_name }` }</p>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default ListUsers