const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
const storefrontAccess = process.env.NEXT_PUBLIC_SHOPFY_API

export async function storefront(query, variables = {}){
    const response = await fetch(domain, {
        endpoint: URL,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Shopify-Storefront-Access-Token": storefrontAccess
        },
        body: JSON.stringify({query, variables})
    })
    return response.json() //Add error handling
}