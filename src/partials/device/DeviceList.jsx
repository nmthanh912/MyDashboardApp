import React from 'react'
import Icon from '../../images/icon-03.svg'

function DashboardCard12() {
    const deviceList = [
        {
            id: 1,
            name: 'Thiet bi PLC A',
            description: 'Do nhiet do',
        },
        {
            id: 2,
            name: 'Thiet bi PLC B',
            description: 'Do do am',
        },
        {
            id: 3,
            name: 'Thiet bi PLC C',
            description: 'Do ap suat',
        },
        {
            id: 4,
            name: 'Thiet bi PLC D',
            description: 'Do cuong do dong dien',
        },
        {
            id: 5,
            name: 'Thiet bi PLC E',
            description: 'Do dien ap',
        },
        {
            id: 6,
            name: 'Thiet bi PLC F',
            description: 'Do cong suat',
        },
    ]
    return (
        <div className='col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200'>
            <header className='px-5 py-4 border-b border-slate-100'>
                <h2 className='font-semibold text-slate-800'>Device List</h2>
            </header>
            <div className='p-3'>
                <header className='grow flex justify-between text-xs text-slate-400 bg-slate-50 rounded-sm font-semibold p-2'>
                    <div style={{marginLeft: '36px'}}>DEVICE NAME</div>
                    <div style={{width: '41%'}}>DESCRIPTION</div>
                    <div></div>
                </header>
                <div>
                    <ul className='my-1'>
                        {deviceList.map((device) => {
                            return (
                                <li
                                    className='flex px-2'
                                    style={{paddingBottom: '0.5rem'}}
                                >
                                    <div className='w-9 h-9'>
                                        <img
                                            src={Icon}
                                            width='20'
                                            height='20'
                                            alt='Icon 03'
                                            className='mt-2'
                                        />
                                    </div>
                                    <div className='grow flex items-center border-b border-slate-100 text-sm py-2'>
                                        <div className='grow flex justify-between'>
                                            <div className='self-center'>
                                                {device.name}
                                            </div>
                                            <div style={{width: '35%'}}>
                                                {device.description}
                                            </div>
                                            <div className='shrink-0 self-end ml-2'>
                                                <a
                                                    className='font-medium text-indigo-500 hover:text-indigo-600'
                                                    href='#0'
                                                >
                                                    View
                                                    <div
                                                        className='rounded-full shrink-0 bg-green-500 mr-3'
                                                        style={{
                                                            display:
                                                                'inline-block',
                                                            marginLeft: '10px',
                                                        }}
                                                    >
                                                        <svg
                                                            className='w-7 h-7 fill-current text-green-50'
                                                            viewBox='0 0 36 36'
                                                            style={{
                                                                display:
                                                                    'inline-block',
                                                            }}
                                                        >
                                                            <path d='M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z' />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard12
