import UserForm from "../components/users/userForm"
import UserTable from "../components/users/userTable"
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
