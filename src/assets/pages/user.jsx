import UserForm from "../components/users/user.form"
import { UserTable } from "../components/users/user.table"
import { useState, useEffect } from "react"
import { fetchAllUserAPI } from "../services/api.service"
import '../components/users/user.css'

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    // empty arr => run 1 time
    // don't use async await in useEffect
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    return (
        <div className="user-page">
            <UserForm loadUser={loadUser} />
            <UserTable loadUser={loadUser} dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage
