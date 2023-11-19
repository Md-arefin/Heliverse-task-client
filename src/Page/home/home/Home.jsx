import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { setUsers } from '../../../redux/features/users/usersSlice';
import UserCard from '../../../components/userCard/userCard';

const Home = () => {

    const users =useSelector(state => state.users);
    const dispatch = useDispatch()

    console.log(users);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_Localhost}/users`)
            .then(res => res.json())
            .then(data => {
                dispatch(setUsers(data));
                // console.log(data);
            })
    }, []);



    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 mx-10'>
                {
                    users.map(user => <UserCard key={user._id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Home;