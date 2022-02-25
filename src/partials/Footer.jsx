export default function Footer() {
    return (
        <footer
            className='bg-white border-b border-slate-200 z-30'
            style={{
                backgroundColor: '#222a45',
                position: 'inherit',
                bottom: '0px',
                width: '100%',
            }}
        >
            <div className='px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 -mb-px'>
                    <div className='flex'></div>
                    <div
                        className='whitespace-nowrap text-sm flex items-center text-white font-medium'
                        style={{fontWeight: '300'}}
                    >
                        Designed and Developed by Minh Thanh
                    </div>
                </div>
            </div>
        </footer>
    )
}
