import React, { useEffect, useState } from 'react'
import { fetchUsers } from './api/user_api'

const App = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers().then(res => setUsers(res.data)).catch(e => console.log(e))
    }, [])

    console.log(users)

    return (
        <div>
            {users.length > 0 ? users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>) : null}
        </div>
    )
}

export default App

