import React from 'react';

const UserCard = ({user}) => {

    const {avatar, first_name, last_name, domain, email, gender, available} = user

    console.log(user);
    return (
        <div>
            <div
                className="card w-96 bg-base-100 shadow-xl h-52 rounded-3xl p-5"
            >
                <img src={avatar} alt="" />
                <p><span className='font-bold'>Name: </span> {first_name} {last_name}</p>

                <p><span className='font-bold'>domain: </span> {domain}</p>

                <p><span className='font-bold'>email: </span> {email} </p>

                <p><span className='font-bold'>gender: </span> {gender}</p>
                <p><span className='font-bold'>available: </span> {available}</p>
            </div>
        </div>
    );
};

export default UserCard;