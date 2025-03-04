import { CreateUserAPI } from "../../services/api.service"
import { useEffect, useState } from "react"
import { Input, notification, Modal } from "antd";

const UpdateUserModal = (props) => {
    const [id, setID] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;

    // new data != old data => run useEffect
    useEffect(() => {
        console.log(dataUpdate)
        if (dataUpdate) {
            setID(dataUpdate.id)
            setUserName(dataUpdate.username)
            setEmail(dataUpdate.email)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])

    const handleOnSubmit = async () => {
        // use try / catch
        const res = await CreateUserAPI(id, username, email, phone)

        if (res.data) {
            notification.success({
                message: 'created user',
                description: 'user create successfully',
            })
            resetAndCloseModal()
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
        setPhone('')
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
                        <span>Phone</span>
                        <Input onChange={(event) => setPhone(event.target.value)} value={phone} />
                    </div>
                </div>
            </Modal>
        </>
    )
}


export default UpdateUserModal