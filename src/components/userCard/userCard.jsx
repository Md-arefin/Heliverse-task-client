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
                className="card w-96 bg-base-100 hover:bg-black  hover:text-white hover:mt-[-10px] hover:z-100 hover:scale-110 transition-transform shadow-xl  rounded-3xl p-10 font-serif space-y-3"
            >
                <img src={avatar} className="rounded-full mx-auto border-2 border-neutral-300 shadow-md w-20 mb-5 cursor-pointer" alt={first_name} title={`${first_name} ${last_name}`} />

                <p className='text-center font-semibold text-2xl'>{first_name} {last_name}</p>

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

                <p><span className='font-bold'>Available: </span> <span>{available === true ? 'True' : 'False'}</span></p>

                <div>
                    <button className="btn bg-slate-400 border-2 border-transparent rounded-3xl w-2/3 mx-14 p-2 text-xl">Add to the team</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard; 