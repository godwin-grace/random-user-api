

import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <>
            <div className='fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-50'>
                <div className={`flex justify-center items-center w-24 m-auto`}>
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>

            </div>
        </>
    )
}

export default Spinner