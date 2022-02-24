import React from 'react'

function WelcomeBanner() {
    return (
        <div
            className='relative p-4 sm:p-2 rounded-sm overflow-hidden mb-8'
            style={{width: '65%'}}
        >
            {/* Content */}
            <div className='relative'>
                <h1 className='text-2xl md:text-3xl text-slate-800 font-bold mb-1' style={{color: '#f37e06'}}>
                    Monitor your device data
                </h1>
                <p style={{fontSize: '13px'}}>Here is what’s happening with your device today:</p>
            </div>
        </div>
    )
}

export default WelcomeBanner
