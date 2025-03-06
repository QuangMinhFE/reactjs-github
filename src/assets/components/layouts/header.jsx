import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, BookOutlined, LoginOutlined, AliwangwangOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const [current, setCurrent] = useState('');
    const { user } = useContext(AuthContext)
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to='/'>Home</Link>,
            key: 'home', // ứng với class active
            icon: <HomeOutlined />,
        },
        {
            label: <Link to='/users'>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
            // disabled: true,
        },
        {
            label: <Link to='/books'>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },
        ...(!user.id ? [{
            label: <Link to={'/login'}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : []),
        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <Link to={'/'}>Đăng xuất</Link>,
                    key: 'logout',
                    icon: <LogoutOutlined />
                }
            ]
        }] : []),

    ];

    return (
        // <ul className='header'> <li><NavLink to="/">Home</NavLink></li> <li><NavLink to="/users">Users</NavLink></li> <li><NavLink to="/books">Books</NavLink></li></ul>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}

export default Header