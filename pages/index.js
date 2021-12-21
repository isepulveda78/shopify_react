import Layout from '../components/Layout'
import { storefront } from '../utils/index'
const staticProducts = [
  {
    id: 1,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$13',
    description: '3 sizes available',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt: 'Focus Paper Refill'
  },
  {
    id: 2,
    name: 'Paper Box',
    href: '#',
    price: '$15',
    description: '10 sizes available',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper Box'
  },
  {
    id: 3,
    name: 'Paper Boxes',
    href: '#',
    price: '$45',
    description: '10 sizes available',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: 'Paper Boxes'
  }
]


export default function Home({products}) {
  return (
    <Layout>
            <div className='max-w-2xl mx-auto pt-24 px-4 sm:pt-8 sm:px-6 lg:max-w-7xl lg:px-8'>
              <h2 id="products-heading" className='sr-only'>Products</h2>
              <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8'>
                {products.map((product) => (
                  <a key={product.id} href={product.href} className='group'>
                    <div className='w-full aspect-[4/3] rounded-lg overflow-hidden'>
                      <img src={product.imageSrc} alt={product.imageAlt} />
                    </div>
                    <div className='mt-4 flex items-center justify-between text-base font-medium text-gray-900'>
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className='mt-1 text-sm italic text-gray-500'>{product.description}</p>
                  </a>
                ))}
              </div>
            </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const { data } = await storefront()
  return {
    props: {
      //Return Products from the API 
      products: data.products
    }
  }
}

const productsQuery = `query Products{
  products(first: 3){
    edges{
      node{
        title
        handle
        tags
        priceRange{
          minVariantPrice{
            amount
          }
        }
        images(first: 1){
          edges{
            node{
              transformedSrc
              altText
            }
          }
        }
      }
    }
  }
}`