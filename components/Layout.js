import Head from 'next/head'
import Header from './Header'

export default function Layout({title, children, keywords, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
            </Head>
            <Header />
            <div className='container mx-auto my-7'>{children}</div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Shopify Commerce',
    description: 'Headless Shopify',
    keywords: 'headless, shopify'
}