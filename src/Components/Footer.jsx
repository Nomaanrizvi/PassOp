import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='min-h-[8vh] bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
                <div className='logo text-2xl font-bold'>
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/&gt;</span>
                </div>

                <div className='text-xs font-bold'>
                    All RIGHTS RESERVED @2025 BY NOMAAN RIZVI
                </div>
            </div>
        </>
    )
}

export default Footer
