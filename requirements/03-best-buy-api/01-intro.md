# Introduction to the Best Buy APIs
 The Best Buy APIs provide us with just about everything we need data-wise to build an e-commerce application.

## The APIs we care most about
 * [Products API]
 * [Categories API]
 * [Reviews API]

## Querying the APIs
 The Best Buy APIs can refine, sort, and format data simply by using the appropriate query params in your request.
 
 | Param | Function | Sample |
| ------------ | ------------- | ------------- |
| apiKey | your Best Buy API key.  required for all API calls | https://api.bestbuy.com/v1/products?apiKey=YOUR_API_KEY |
| format | xml or json.  Specifies output format | https://api.bestbuy.com/v1/products?format=json&apiKey=YOUR_API_KEY |
| show | what attributes the API should return.  ```all``` will return all attributes | https://api.bestbuy.com/v1/products?show=name,sku,salePrice,department&apiKey=YOUR_API_KEY |
| sort | attribute.asc or attribute.desc | https://api.bestbuy.com/v1/products(categoryPath.name="All%20Flat-Screen%20TVs")?format=json&show=sku,name,salePrice&sort=salePrice&apiKey=YOUR_API_KEY |
| facets | returns summary info for product or category | https://api.bestbuy.com/v1/products(categoryPath.name="All%20Flat-Panel%20TVs")?format=json&show=sku,name,salePrice&facet=manufacturer,5&apiKey=YOUR_API_KEY |
| pageSize, page | for collections, how many items to return per page and which page you are viewing | https://api.bestbuy.com/v1/products(type=Movie)?format=json&show=sku,name,salePrice&pageSize=3&page=10&apiKey=YOUR_API_KEY |

## Digesting the Response

```https://api.bestbuy.com/v1/products?show=name,sku,salePrice,department&pageSize=3&format=json&apiKey=YOUR_API_KEY```
```
{
    "from": 1,
    "to": 3,
    "currentPage": 1,
    "total": 197806,
    "totalPages": 65936,
    "queryTime": "0.025",
    "totalTime": "0.033",
    "partial": false,
    "canonicalUrl": "/v1/products?show=name,sku,salePrice,department&pageSize=3&format=json&apiKey=ma6v7d7sxqmp6tbsssu7rcas",
    "products": [
        {
            "name": "Spy Kids: All the Time in the World [Includes Digital Copy] [Blu-ray] [2011]",
            "sku": 1000006,
            "salePrice": 12.99,
            "department": "VIDEO/COMPACT DISC"
        },
        {
            "name": "4-Year Standard Geek Squad Protection",
            "sku": 1000016,
            "salePrice": 49.99,
            "department": "WARRANTY"
        },
        {
            "name": "4-Year Standard Geek Squad Protection",
            "sku": 1000034,
            "salePrice": 59.99,
            "department": "WARRANTY"
        }
    ]
}
```
Above, you see a generic query to return the first 3 products listed on the API.  We have asked for the name, sku, salePrice, and department for each product.  The products are returned in a products array in the response, but it also contains several attributes to assist with pagination.