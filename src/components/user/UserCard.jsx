
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



const User = (props) => {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 9;


    // pagination
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3'>
                <>
                    {currentItems &&
                        currentItems.map((user, index) => (
                            <div key={index.id} className='bg-gray-400 justify-center items-center shadow-md p-4 rounded-md space-y-2'>
                                <img src={user.picture.medium}
                                    alt="user__image"
                                    className='w-36 h-36 rounded-full'
                                />
                                <div>
                                    <h2> {user.name.first} {user.name.last}</h2>
                                </div>

                            </div>
                        ))
                    }
                </>
                {currentItems ? null : <p>No data to show</p>}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName='page__num'
                previousLinkClassName='page__num'
                nextLinkClassName='page__num'
                activeLinkClassName='active'
            />
        </>
    )
}

export default User