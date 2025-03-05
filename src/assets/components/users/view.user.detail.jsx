import { Button, Drawer } from 'antd';
import { useState } from 'react';

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail } = props;
    const [selectedFile, setSelectedFile] = useState('')
    const [preview, setPreview] = useState('')

    const onClose = () => {
        setDataDetail(null)
        setIsDetailOpen(false)
    }

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }

        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    // video 84 - 87 (delay)
    const handleUpdateUserAvatar = () => {
        // s1: upload file
        console.log(selectedFile)
        // s2: upload user
    }

    return (
        <>
            <Drawer width={'50vw'} title="User Info" onClose={onClose} open={isDetailOpen}>
                {dataDetail &&
                    <>
                        <p>id: {dataDetail.id}</p>
                        <p>username: {dataDetail.username}</p>
                        <p>email: {dataDetail.email}</p>
                        <p>password: {dataDetail.password}</p>
                        <p>phone: {dataDetail.phone}</p>
                        <div className='avatar'>
                            <img src={dataDetail.avatar} alt='user image' />
                        </div>

                        <label htmlFor='avatar' className='avatar-btn'>
                            <span>Upload Avatar</span>
                        </label>
                        <input type='file' hidden id='avatar' onChange={handleOnChangeFile} />

                        {preview &&
                            <>
                                <div className='avatar'>
                                    <img src={preview} alt='user image' />
                                </div>
                                <Button onClick={handleUpdateUserAvatar}>Save</Button>
                            </>
                        }
                    </>
                }
            </Drawer>
        </>
    );
}

export default ViewUserDetail;