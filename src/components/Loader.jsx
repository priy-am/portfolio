import React from 'react'

const Loader = () => {
    return (
        <>
            <div className=" absolute flex justify-center items-center left-[45%] top-[40%]">
                <div className="loader border-x-2 border-solid border-black dark:border-white rounded-full h-20 w-20 animate-spin"></div>
            </div>
        </>
    )
}

export default Loader
