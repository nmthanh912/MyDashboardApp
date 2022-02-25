import React from 'react'
import DoughnutChart from '../../charts/DoughnutChart'

// Import utilities
import {tailwindConfig} from '../../utils/Utils'

export default function PowerChart() {
    const chartData = {
        labels: ['United States', 'Italy', 'Other'],
        datasets: [
            {
                label: 'Top Countries',
                data: [35, 30, 35],
                backgroundColor: [
                    tailwindConfig().theme.colors.orange[500],
                    tailwindConfig().theme.colors.yellow[400],
                    tailwindConfig().theme.colors.orange[800],
                ],
                hoverBackgroundColor: [
                    tailwindConfig().theme.colors.orange[600],
                    tailwindConfig().theme.colors.yellow[500],
                    tailwindConfig().theme.colors.orange[900],
                ],
                hoverBorderColor: tailwindConfig().theme.colors.white,
            },
        ],
    }

    return (
        <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200'>
            <header className='px-5 py-4 border-b border-slate-100 bg-yellow-500'>
                <h2 className='font-semibold text-slate-800 text-white'>
                    Power Chart
                </h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <DoughnutChart data={chartData} width={389} height={260} />
        </div>
    )
}
