module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SHOPIFY_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
    NEXT_PUBLIC_SHOPFY_API: process.env.NEXT_PUBLIC_SHOPFY_API
  },
  images: {
    domains: ['cdn.shopify.com']
  }
}
