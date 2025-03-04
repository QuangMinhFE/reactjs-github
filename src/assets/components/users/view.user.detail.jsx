import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail } = props;

    const onClose = () => {
        setDataDetail(null)
        setIsDetailOpen(false)
    }


    return (
        <>
            <Drawer title="Basic Drawer" onClose={onClose} open={isDetailOpen}>
                {dataDetail && <>
                    <p>id: {dataDetail.id}</p>
                    <p>username: {dataDetail.username}</p>
                    <p>email: {dataDetail.email}</p>
                    <p>password: {dataDetail.password}</p>
                    <p>phone: {dataDetail.phone}</p>

                </>
                }
            </Drawer>
        </>
    );
}

export default ViewUserDetail;