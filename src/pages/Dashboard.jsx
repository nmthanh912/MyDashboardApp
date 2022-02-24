import React from 'react'
import Header from '../partials/Header'

import DashboardCard04 from '../partials/dashboard/DashboardCard04'
import AmpereChart from '../partials/dashboard/AmpereChart'
import VoltChart from '../partials/dashboard/VoltChart'
import PowerChart from '../partials/dashboard/PowerChart'
import EventList from '../partials/dashboard/EventList'
import Datepicker from '../partials/actions/Datepicker'
import WelcomeBanner from '../partials/dashboard/WelcomeBanner'

export default function Dashboard() {
    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                {/*  Site header */}
                <Header />

                <main>
                    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
                        {/* Dashboard actions */}
                        <div className='sm:flex sm:justify-between sm:items-center mb-8'>
                            <WelcomeBanner />

                            <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
                                <Datepicker />
                                {/* Add view button backgroundColor: 'rgb(249,162,71)'},*/}
                                <button className='btn bg-yellow-500 hover:bg-yellow-600 text-white'
                                >
                                    <svg
                                        className='w-4 h-4 fill-current opacity-50 shrink-0'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                                    </svg>
                                    <span className='hidden xs:block ml-2'>
                                        Add view
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className='grid grid-cols-12 gap-6'>
                            <PowerChart />
                            <EventList />
                            <AmpereChart />
                            <VoltChart />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
