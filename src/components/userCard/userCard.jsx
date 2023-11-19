import React from 'react';
import { FaMale, FaFemale } from "react-icons/fa";
import { PiGenderNonbinaryBold } from "react-icons/pi";
import { TbGenderBigender } from "react-icons/tb";


const UserCard = ({ user }) => {

    const { avatar, first_name, last_name, domain, email, gender, available } = user;

    // console.log(user);
    return (
        <div>
            <div
                className="card w-96 bg-base-100 shadow-xl  rounded-3xl p-10 font-serif space-y-3"
            >
                <img src={avatar} className="rounded-full mx-auto border-2 border-neutral-300 shadow-md w-20 mb-5 cursor-pointer" alt={first_name} title={`${first_name} ${last_name}`} />

                <p className='text-center text-2xl'><span className='font-semibold'>Name: </span> {first_name} {last_name}</p>

                <p ><span className='font-bold'>Email: </span>
                    <span className='text-blue-500 underline cursor-pointer text-xl'>{email}</span>
                </p>

                <p className='flex'><span className='font-bold mr-3'>Gender: </span>
                    {
                        gender === 'Male' && <>
                            <p> {gender} </p>
                            <FaMale className='text-blue-500 text-xl' />
                        </>
                        || gender === 'Female' && <>
                            <p> {gender} </p>
                            <FaFemale className='text-red-500 text-xl' />
                        </>
                        || gender === 'Non-binary' && <>
                         <p> {gender} </p>
                            <PiGenderNonbinaryBold className='text-purple-500 text-xl'/>
                        </>
                        || gender === 'Bigender' && <>
                        <p> {gender} </p> <TbGenderBigender  className=' text-xl'/>
                        </>
                        || 
                        <p> {gender} </p>
                    }
                </p>

                <p><span className='font-bold'>Domain: </span> {domain}</p>

                <p><span className='font-bold'>Available: </span> {available}</p>

                <div>
                    <button className="btn border-2 border-slate-400 rounded-3xl w-2/3 mx-14 p-2 hover:bg-slate-500 hover:text-white text-xl">Add to the teams</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard; 