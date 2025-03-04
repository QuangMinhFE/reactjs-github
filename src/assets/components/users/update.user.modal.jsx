import { UpdateUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";

const UpdateUserModal = (props) => {
    const [id, setID] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')


    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    // new data != old data => run useEffect
    useEffect(() => {
        console.log(dataUpdate)
        if (dataUpdate) {
            setID(dataUpdate.id)
            setUserName(dataUpdate.username)
            setEmail(dataUpdate.email)
            setPassWord(dataUpdate.password)
        }
    }, [dataUpdate])

    const handleOnSubmit = async () => {
        // use try / catch
        const res = await UpdateUserAPI(id, username, email, password)

        if (res.data) {
            notification.success({
                message: 'updated user',
                description: 'user update successfully',
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: 'failed user',
                description: JSON.stringify(res.message),
            })
        }
        console.log('check res: ', res.data)


    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setID('')
        setUserName('')
        setEmail('')
        setPassWord('')
        setDataUpdate(null)
    }


    return (
        <>
            <Modal title="Update a User" open={isModalUpdateOpen} onOk={() => handleOnSubmit()} onCancel={() => resetAndCloseModal()} maskClosable={false} okText="SAVE">
                <div className="user-form">
                    <div className="user-group">
                        <span>ID</span>
                        <Input value={id} disabled />
                    </div>
                    <div className="user-group">
                        <span>UserName</span>
                        <Input onChange={(event) => setUserName(event.target.value)} value={username} />
                    </div>
                    <div className="user-group">
                        <span>Email</span>
                        <Input onChange={(event) => setEmail(event.target.value)} value={email} />
                    </div>
                    <div className="user-group">
                        <span>Pasword</span>
                        <Input.Password onChange={(event) => setPassWord(event.target.value)} value={password} />
                    </div>
                </div>
            </Modal>
        </>
    )
}


export default UpdateUserModal