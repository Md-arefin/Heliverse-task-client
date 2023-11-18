import React, { useEffect, useState } from 'react';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_Localhost}/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                console.log(data);
            })
    }, []);



    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
                {
                    users.map(user => <div
                        key={user._id} className="card w-96 bg-base-100 shadow-xl h-52 rounded-3xl p-5"
                    >
                        <img src={user.avatar} alt="" />
                      <p><span className='font-bold'>Name: </span> {user.first_name} {user.last_name}</p>  

                      <p><span className='font-bold'>domain: </span> {user.domain}</p>  

                      <p><span className='font-bold'>email: </span> {user.email} </p>  

                      <p><span className='font-bold'>gender: </span> {user.gender}</p>  
                      <p><span className='font-bold'>available: </span> {user.available}</p>  
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;