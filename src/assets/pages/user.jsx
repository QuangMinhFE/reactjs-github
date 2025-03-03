import UserForm from "../components/users/user.form"
import UserTable from "../components/users/user.table"
import '../components/users/user.css'

const UserPage = () => {
    return (
        <div className="user-page">
            <UserForm />
            <UserTable />
        </div>
    )
}

export default UserPage
