import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../../redux/features/users/usersSlice';
import UserCard from '../../../components/userCard/userCard';
import { setUsersData, setCurrentPage, setTotalPages, setTotalUsersData } from '../../../redux/features/users/userDataSlice';

const Home = () => {

    const users = useSelector(state => state.users);
    const usersData = useSelector(state => state.usersData.usersData);
    const currentPage = useSelector((state) => state.usersData.currentPage);
    const dispatch = useDispatch();
    const [pageButtons, setPageButtons] = useState([]);
    const totalPages = Math.ceil(users.length / 20);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_Localhost}/usersModel`)
            .then(res => res.json())
            .then(data => {
                dispatch(setUsers(data));
                // console.log(data);
            })
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let endpoint = `${import.meta.env.VITE_Localhost}/users`;

                if (searchQuery) {
                    endpoint = `${import.meta.env.VITE_Localhost}/users/search?query=${searchQuery}&page=${currentPage}`;
                }

                const response = await fetch(endpoint);
                const data = await response.json();

                dispatch(setUsersData(data));
                dispatch(setTotalPages(totalPages));

                const visiblePageRange = 6;
                let startPage = Math.max(1, currentPage - Math.floor(visiblePageRange / 4));
                let endPage = Math.min(totalPages, startPage + visiblePageRange - 1);

                if (endPage - startPage + 1 < visiblePageRange) {
                    startPage = Math.max(1, endPage - visiblePageRange + 1);
                }


                const buttons = [];
                if (startPage > 1) {
                    buttons.push(<button key={1} onClick={() => dispatch(setCurrentPage(1))}>1</button>);
                }

                for (let i = startPage; i <= endPage; i++) {
                    buttons.push(
                        <button key={i} onClick={() => dispatch(setCurrentPage(i))} disabled={i === currentPage}>
                            {i}
                        </button>
                    );
                }

                if (endPage < totalPages) {
                    if (endPage < totalPages - 1) {
                        buttons.push(<span key="ellipsis-end">...</span>);
                    }
                    buttons.push(
                        <button key={totalPages} onClick={() => dispatch(setCurrentPage(totalPages))}>
                            {totalPages}
                        </button>
                    );
                }

                setPageButtons(buttons);

            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();

    }, [dispatch, currentPage, totalPages, searchQuery]);


    return (
        <div>

            <div className='w-full flex justify-center my-10 md:my-16'>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-3/4 border-sky-200 border-2 rounded-3xl p-5 text-xl focus:border-green-300"
                />
            </div>

            <h1 className='text-3xl text-center my-10 font-bold font-serif'>Users Information</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 mx-10'>
                {
                    usersData.map(user => <UserCard key={user._id} user={user} />)
                }
            </div>

            <div className='flex justify-center gap-5 my-16'>
                {/* Pagination controls */}
                <button onClick={() => dispatch(setCurrentPage(currentPage - 1))} disabled={currentPage === 1} className='disabled:opacity-50 btn border-2 border-slate-400 rounded-2xl w-32'>
                    Previous Page
                </button>

                {pageButtons.map((page, i) => <div key={i} className='btn border-2 border-slate-400 rounded-2xl w-8 text-center'>{page}</div>)}

                <button onClick={() => dispatch(setCurrentPage(currentPage + 1))} disabled={currentPage === totalPages} className='disabled:opacity-50 btn border-2 border-slate-400 rounded-2xl w-32'>
                    Next Page
                </button>
            </div>


        </div>
    );
};

export default Home;