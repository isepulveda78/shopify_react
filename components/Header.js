import Link from 'next/link'

export default function Header() {
    return (
        <header className='bg-white text-gray-100 shadow w-full'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <Link href='/'>
                <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
                    <span className='ml-3 text-xl text-black'>Shopify Commerce</span>
                </a>
            </Link>
            <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
            
            </nav>
        </div>
    </header>
    )
}
