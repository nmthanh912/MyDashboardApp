import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import Icon from '../../images/icon-03.svg'
import {getAllDevice} from '../../services/deviceService'

export default function DeviceList() {
    const [deviceList, setDeviceList] = useState([])

    useEffect(async () => {
        const response = await getAllDevice()
        if (response) {
            setDeviceList(response.data)
        }
    }, [])

    return (
        <div className='col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200'>
            <header className='px-5 py-4 border-b border-slate-100 bg-yellow-500'>
                <h2 className='font-semibold text-slate-800 text-white'>Device List</h2>
            </header>
            <div className='p-3'>
                <table className='table-auto w-full'>
                    <thead className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm'>
                        <tr>
                            <th className='p-4'>
                                <div className='font-semibold text-left'>Device Name</div>
                            </th>
                            <th className='p-4'>
                                <div className='font-semibold text-left'>Description</div>
                            </th>
                            <th className='p-4'>
                                <div className='font-semibold text-left'></div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className='text-sm divide-y divide-slate-100'>
                        {deviceList.map((device, index) => {
                            return (
                                <tr key={index}>
                                    <td className='p-4'>
                                        <div className='flex items-center'>
                                            <img src={Icon} width='20' height='20' alt='Icon 03' className='mr-3' />
                                            <div className='grow flex justify-between'>
                                                <div className='self-center'>{device.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='p-4'>
                                        <div className='flex items-center'>
                                            <div className='grow flex justify-between'>
                                                <div className='self-center'>{device.description}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='p-4'>
                                        <div className='shrink-0 self-end ml-2'>
                                            {/* <a href={`/device?device=${device.name}`}>hello</a> */}
                                            <Link to={`/device`}>
                                                View
                                                <div
                                                    className='rounded-full shrink-0 bg-green-500 mr-3'
                                                    style={{
                                                        display: 'inline-block',
                                                        marginLeft: '10px',
                                                    }}
                                                >
                                                    <svg
                                                        className='w-7 h-7 fill-current text-green-50'
                                                        viewBox='0 0 36 36'
                                                        style={{
                                                            display: 'inline-block',
                                                        }}
                                                    >
                                                        <path d='M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z' />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
