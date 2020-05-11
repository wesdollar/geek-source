# The Categories API
 The Best Buy Category API is used to return subcategories for a given category and is used to further drill down into nested subcategories.  It is reccomended to use abcat0300000 as your top level category.

 ## Get subcategories for a given category:

 ```https://api.bestbuy.com/v1/categories(id=abcat0300000)?apiKey=YOUR_API_KEY&format=json```

 <details>
 <p>
  <summary>Click to show response</summary>

  ```json
  {
    "from": 1,
    "to": 10,
    "currentPage": 1,
    "total": 4232,
    "totalPages": 424,
    "queryTime": "0.040",
    "totalTime": "0.056",
    "partial": false,
    "canonicalUrl": "/v1/categories?format=json&apiKey=wjfj6cvuvjas4hmrnj8dhvtf",
    "categories": [
        {
            "id": "abcat0010000",
            "name": "Gift Ideas",
            "active": true,
            "url": "https://www.bestbuy.com/site/electronics/gift-ideas/abcat0010000.c?id=abcat0010000&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0010000",
                    "name": "Gift Ideas"
                }
            ],
            "subCategories": [
                {
                    "id": "pcmcat1496256957402",
                    "name": "Top Tech Gifts"
                },
                {
                    "id": "pcmcat748301108075",
                    "name": "Stocking Stuffers"
                },
                {
                    "id": "pcmcat1487279818011",
                    "name": "Mother's Day Gift Ideas"
                },
                {
                    "id": "pcmcat1487867427335",
                    "name": "Father's Day Gift Ideas"
                },
                {
                    "id": "pcmcat1487280226740",
                    "name": "Graduation Gift Ideas"
                },
                {
                    "id": "pcmcat1506957944904",
                    "name": "Christmas Gift Ideas"
                },
                {
                    "id": "pcmcat1540482602263",
                    "name": "Housewarming Gifts"
                },
                {
                    "id": "pcmcat84000050000",
                    "name": "Wedding Gifts"
                },
                {
                    "id": "pcmcat94300050028",
                    "name": "Birthday Gifts"
                },
                {
                    "id": "pcmcat84000050004",
                    "name": "Baby Shower Gifts"
                },
                {
                    "id": "pcmcat84000050001",
                    "name": "Anniversary Gifts"
                },
                {
                    "id": "pcmcat140000050037",
                    "name": "Computing Made Easy"
                },
                {
                    "id": "pcmcat140000050039",
                    "name": "Simple GPS Navigation"
                },
                {
                    "id": "pcmcat140000050040",
                    "name": "Playing Video Games"
                },
                {
                    "id": "pcmcat140000050041",
                    "name": "Watching HDTV"
                },
                {
                    "id": "pcmcat140000050042",
                    "name": "Enjoying Favorite Movies"
                },
                {
                    "id": "abcat0012000",
                    "name": "Him"
                },
                {
                    "id": "abcat0011000",
                    "name": "Her"
                },
                {
                    "id": "abcat0013000",
                    "name": "Teens"
                },
                {
                    "id": "abcat0014000",
                    "name": "Kids"
                },
                {
                    "id": "pcmcat84000050003",
                    "name": "Graduations"
                },
                {
                    "id": "abcat0020004",
                    "name": "Unique Gifts"
                },
                {
                    "id": "pcmcat111900050004",
                    "name": "Pink and Red Gifts"
                },
                {
                    "id": "abcat0020006",
                    "name": "Prepaid Cards"
                },
                {
                    "id": "pcmcat231900050003",
                    "name": "eGift Cards"
                },
                {
                    "id": "pcmcat253700050028",
                    "name": "QP Test Category"
                },
                {
                    "id": "pcmcat312700050000",
                    "name": "Our Favorite Gift Ideas"
                },
                {
                    "id": "pcmcat327600050005",
                    "name": "Easter Made Easy"
                },
                {
                    "id": "pcmcat327600050006",
                    "name": "Brunches Made Easy"
                },
                {
                    "id": "pcmcat332300050004",
                    "name": "Grads Gifting"
                },
                {
                    "id": "pcmcat748300579354",
                    "name": "Family Gift Ideas"
                },
                {
                    "id": "pcmcat1503499229560",
                    "name": "Explore Geek Gift Ideas"
                },
                {
                    "id": "pcmcat1505508677933",
                    "name": "Explore Top Tech Gift Ideas"
                },
                {
                    "id": "pcmcat1505761915169",
                    "name": "Explore Great Tech Gifts for Him"
                },
                {
                    "id": "pcmcat1507834419293",
                    "name": "Employee Picks"
                },
                {
                    "id": "pcmcat1508430906956",
                    "name": "Employee Picks"
                },
                {
                    "id": "pcmcat140000050035",
                    "name": "Capturing Photos & Videos"
                },
                {
                    "id": "pcmcat140000050036",
                    "name": "Listening to Digital Music"
                },
                {
                    "id": "pcmcat342800050014",
                    "name": "Wedding Registry"
                }
            ]
        },
        {
            "id": "abcat0100000",
            "name": "TV & Home Theater",
            "active": true,
            "url": "https://www.bestbuy.com/site/electronics/tv-home-theater/abcat0100000.c?id=abcat0100000&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                }
            ],
            "subCategories": [
                {
                    "id": "abcat0101000",
                    "name": "TVs"
                },
                {
                    "id": "abcat0103000",
                    "name": "Smart TVs & Devices"
                },
                {
                    "id": "pcmcat158900050008",
                    "name": "Projectors & Screens"
                },
                {
                    "id": "abcat0106000",
                    "name": "TV Stands, Mounts & Furniture"
                },
                {
                    "id": "abcat0205007",
                    "name": "Sound Bars"
                },
                {
                    "id": "abcat0203000",
                    "name": "Home Theater Systems"
                },
                {
                    "id": "abcat0102000",
                    "name": "Blu-ray & DVD Players"
                },
                {
                    "id": "pcmcat161100050040",
                    "name": "Streaming Media Players"
                },
                {
                    "id": "abcat0107000",
                    "name": "TV & Home Theater Accessories"
                },
                {
                    "id": "abcat0105000",
                    "name": "TV & Internet Service Providers"
                },
                {
                    "id": "pcmcat200900050008",
                    "name": "Portable TV & Video"
                },
                {
                    "id": "pcmcat748300551037",
                    "name": "Free TV Shipping or Delivery"
                },
                {
                    "id": "pcmcat359600050007",
                    "name": "Top TV Deals"
                },
                {
                    "id": "pcmcat748301738096",
                    "name": "HDR TV: High Dynamic Range TV Technology"
                },
                {
                    "id": "pcmcat243200050000",
                    "name": "TV Antenna Basics"
                },
                {
                    "id": "pcmcat748302046035",
                    "name": "Cable TV Alternatives"
                },
                {
                    "id": "pcmcat1491615730278",
                    "name": "Learn about OLED TVs"
                },
                {
                    "id": "pcmcat1552506184212",
                    "name": "Learn About 8K TVs"
                },
                {
                    "id": "pcmcat1585083313850",
                    "name": "Upgrade Your Home Theater Experience"
                },
                {
                    "id": "pcmcat1585855051159",
                    "name": "Optimizing Your TV: Connect Your Laptop"
                }
            ]
        },
        {
            "id": "abcat0101000",
            "name": "TVs",
            "active": true,
            "url": "https://www.bestbuy.com/site/tv-home-theater/tvs/abcat0101000.c?id=abcat0101000&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0101000",
                    "name": "TVs"
                }
            ],
            "subCategories": [
                {
                    "id": "abcat0101001",
                    "name": "All Flat-Screen TVs"
                },
                {
                    "id": "pcmcat1513872418342",
                    "name": "32-Inch TVs"
                },
                {
                    "id": "pcmcat1514909744071",
                    "name": "40-Inch TVs"
                },
                {
                    "id": "pcmcat1522873788991",
                    "name": "43-Inch TVs"
                },
                {
                    "id": "pcmcat1514909922712",
                    "name": "50-Inch TVs"
                },
                {
                    "id": "pcmcat1514910111435",
                    "name": "55-Inch TVs"
                },
                {
                    "id": "pcmcat1514910288859",
                    "name": "60-Inch TVs"
                },
                {
                    "id": "pcmcat1514910447059",
                    "name": "65-Inch TVs"
                },
                {
                    "id": "pcmcat1539183029417",
                    "name": "70-Inch TVs"
                },
                {
                    "id": "pcmcat1514910595284",
                    "name": "75-Inch TVs"
                },
                {
                    "id": "pcmcat1571250794220",
                    "name": "85-Inch or Larger TVs"
                },
                {
                    "id": "pcmcat333800050003",
                    "name": "4K Ultra HD TVs"
                },
                {
                    "id": "pcmcat1552503373763",
                    "name": "8K TVs"
                },
                {
                    "id": "pcmcat220700050011",
                    "name": "Smart TVs"
                },
                {
                    "id": "pcmcat333800050004",
                    "name": "Curved TVs"
                },
                {
                    "id": "pcmcat205800050000",
                    "name": "3D TVs"
                },
                {
                    "id": "pcmcat193400050018",
                    "name": "LED TVs"
                },
                {
                    "id": "pcmcat301000050010",
                    "name": "OLED TVs"
                },
                {
                    "id": "pcmcat333800050005",
                    "name": "Outdoor TVs"
                },
                {
                    "id": "abcat0101005",
                    "name": "TV/DVD Combos"
                },
                {
                    "id": "pcmcat1539183860210",
                    "name": "TVs Under $500"
                },
                {
                    "id": "pcmcat748302046702",
                    "name": "Find the Perfect TV"
                },
                {
                    "id": "abcat0107000",
                    "name": "TV & Home Theater Accessories"
                },
                {
                    "id": "pcmcat138100050024",
                    "name": "TV & Home Theater Services"
                },
                {
                    "id": "pcmcat193400050017",
                    "name": "LCD TVs"
                },
                {
                    "id": "pcmcat193400050016",
                    "name": "Plasma TVs"
                },
                {
                    "id": "abcat0101003",
                    "name": "xFront Projectors"
                },
                {
                    "id": "abcat0101008",
                    "name": "xScreens"
                },
                {
                    "id": "abcat0101004",
                    "name": "xPortable"
                },
                {
                    "id": "abcat0101006",
                    "name": "Tube TVs"
                },
                {
                    "id": "abcat0101007",
                    "name": "Kid's TVs"
                },
                {
                    "id": "abcat0107001",
                    "name": "TV Accessories"
                }
            ]
        },
        {
            "id": "abcat0101001",
            "name": "All Flat-Screen TVs",
            "active": true,
            "url": "https://www.bestbuy.com/site/tvs/all-flat-screen-tvs/abcat0101001.c?id=abcat0101001&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0101000",
                    "name": "TVs"
                },
                {
                    "id": "abcat0101001",
                    "name": "All Flat-Screen TVs"
                }
            ],
            "subCategories": [
                {
                    "id": "pcmcat138100050024",
                    "name": "TV & Home Theater Services"
                },
                {
                    "id": "abcat0107001",
                    "name": "TV Accessories"
                }
            ]
        },
        {
            "id": "abcat0101005",
            "name": "TV/DVD Combos",
            "active": true,
            "url": "https://www.bestbuy.com/site/tvs/tv-dvd-combos/abcat0101005.c?id=abcat0101005&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0101000",
                    "name": "TVs"
                },
                {
                    "id": "abcat0101005",
                    "name": "TV/DVD Combos"
                }
            ],
            "subCategories": [
                {
                    "id": "abcat0107001",
                    "name": "TV Accessories"
                }
            ]
        },
        {
            "id": "abcat0102000",
            "name": "Blu-ray & DVD Players",
            "active": true,
            "url": "https://www.bestbuy.com/site/tv-home-theater/blu-ray-dvd-players/abcat0102000.c?id=abcat0102000&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0102000",
                    "name": "Blu-ray & DVD Players"
                }
            ],
            "subCategories": [
                {
                    "id": "abcat0102003",
                    "name": "Blu-ray Players"
                },
                {
                    "id": "abcat0102005",
                    "name": "DVD Players"
                },
                {
                    "id": "pcmcat219900050000",
                    "name": "Portable DVD Players"
                },
                {
                    "id": "pcmcat219300050005",
                    "name": "Portable Blu-ray Players"
                },
                {
                    "id": "abcat0102006",
                    "name": "DVD Recorders"
                },
                {
                    "id": "abcat0102007",
                    "name": "DVD/VCR Combos"
                },
                {
                    "id": "pcmcat219300050006",
                    "name": "Portable Blu-ray & DVD Players"
                },
                {
                    "id": "abcat0107002",
                    "name": "DVD Players & Recorder Accessories"
                },
                {
                    "id": "pcmcat220700050006",
                    "name": "Smart Blu-ray Players"
                },
                {
                    "id": "abcat0102001",
                    "name": "xBlu-ray & HD DVD"
                }
            ]
        },
        {
            "id": "abcat0102003",
            "name": "Blu-ray Players",
            "active": true,
            "url": "https://www.bestbuy.com/site/blu-ray-dvd-players/blu-ray-players/abcat0102003.c?id=abcat0102003&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0102000",
                    "name": "Blu-ray & DVD Players"
                },
                {
                    "id": "abcat0102003",
                    "name": "Blu-ray Players"
                }
            ],
            "subCategories": [
                {
                    "id": "pcmcat1569854077552",
                    "name": "4K Ultra HD Blu-ray Players"
                },
                {
                    "id": "pcmcat748301694302",
                    "name": "Streaming Blu-ray Players"
                },
                {
                    "id": "pcmcat205900050012",
                    "name": "3D Blu-ray Players"
                },
                {
                    "id": "pcmcat219300050004",
                    "name": "Standard Blu-ray Players"
                },
                {
                    "id": "pcmcat219300050005",
                    "name": "Portable Blu-ray Players"
                }
            ]
        },
        {
            "id": "abcat0102005",
            "name": "DVD Players",
            "active": true,
            "url": "https://www.bestbuy.com/site/blu-ray-dvd-players/dvd-players/abcat0102005.c?id=abcat0102005&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0102000",
                    "name": "Blu-ray & DVD Players"
                },
                {
                    "id": "abcat0102005",
                    "name": "DVD Players"
                }
            ],
            "subCategories": []
        },
        {
            "id": "abcat0104000",
            "name": "Digital TV Tuners & Converters",
            "active": true,
            "url": "https://www.bestbuy.com/site/tv-video-accessories/digital-tv-tuners-converters/abcat0104000.c?id=abcat0104000&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0107000",
                    "name": "TV & Home Theater Accessories"
                },
                {
                    "id": "abcat0104000",
                    "name": "Digital TV Tuners & Converters"
                }
            ],
            "subCategories": []
        },
        {
            "id": "abcat0105000",
            "name": "TV & Internet Service Providers",
            "active": true,
            "url": "https://www.bestbuy.com/site/tv-home-theater/tv-internet-service-providers/abcat0105000.c?id=abcat0105000&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0105000",
                    "name": "TV & Internet Service Providers"
                }
            ],
            "subCategories": [
                {
                    "id": "abcat0514000",
                    "name": "Internet Services"
                },
                {
                    "id": "pcmcat340700050003",
                    "name": "Home Connections"
                },
                {
                    "id": "pcmcat1496082266477",
                    "name": "DirecTV Internet & Cable"
                },
                {
                    "id": "pcmcat1526657269773",
                    "name": "Xfinity TV & Internet Service"
                },
                {
                    "id": "pcmcat382700050002",
                    "name": "Home Connections Comparison"
                },
                {
                    "id": "abcat0105001",
                    "name": "Satellite TV Service Providers"
                },
                {
                    "id": "pcmcat128700050036",
                    "name": "Upgrade DIRECTV"
                },
                {
                    "id": "abcat0105004",
                    "name": "Cable TV Service Providers"
                },
                {
                    "id": "pcmcat166000050027",
                    "name": "TiVo"
                },
                {
                    "id": "pcmcat186800050010",
                    "name": "Fiber Optic TV"
                },
                {
                    "id": "pcmcat383800050004",
                    "name": "Modem with New Service Offer"
                }
            ]
        }
    ]
}
```

</p>
</details>

 ## Search for Category by Name

```https://api.bestbuy.com/v1/categories(name=pizza*)?apiKey=YOUR_API_KEY&format=json```

<details>
<p>
  <summary>Click to show response</summary>

```json
{
    "from": 1,
    "to": 3,
    "currentPage": 1,
    "total": 3,
    "totalPages": 1,
    "queryTime": "0.033",
    "totalTime": "0.044",
    "partial": false,
    "canonicalUrl": "/v1/categories(name=\"pizza*\")?format=json&apiKey=wjfj6cvuvjas4hmrnj8dhvtf",
    "categories": [
        {
            "id": "abcat0912022",
            "name": "Toaster & Pizza Ovens",
            "active": true,
            "url": "https://www.bestbuy.com/site/small-appliances/toaster-ovens-pizza-ovens/abcat0912022.c?id=abcat0912022&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0912000",
                    "name": "Small Kitchen Appliances"
                },
                {
                    "id": "abcat0912022",
                    "name": "Toaster & Pizza Ovens"
                }
            ],
            "subCategories": [
                {
                    "id": "pcmcat334200050020",
                    "name": "Toaster Ovens"
                },
                {
                    "id": "pcmcat334200050021",
                    "name": "Pizza Ovens"
                }
            ]
        },
        {
            "id": "pcmcat334200050021",
            "name": "Pizza Ovens",
            "active": true,
            "url": "https://www.bestbuy.com/site/toaster-ovens-pizza-ovens/pizza-ovens/pcmcat334200050021.c?id=pcmcat334200050021&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0912000",
                    "name": "Small Kitchen Appliances"
                },
                {
                    "id": "abcat0912022",
                    "name": "Toaster & Pizza Ovens"
                },
                {
                    "id": "pcmcat334200050021",
                    "name": "Pizza Ovens"
                }
            ],
            "subCategories": []
        },
        {
            "id": "pcmcat374100050009",
            "name": "Cuisinart Toaster & Pizza Ovens",
            "active": true,
            "url": "https://www.bestbuy.com/site/cuisinart/cuisinart-toaster-pizza-ovens/pcmcat374100050009.c?id=pcmcat374100050009&cmp=RMX-cat",
            "path": [
                {
                    "id": "cat00000",
                    "name": "Best Buy"
                },
                {
                    "id": "pcmcat128500050004",
                    "name": "Name Brands"
                },
                {
                    "id": "pcmcat373900050004",
                    "name": "Cuisinart"
                },
                {
                    "id": "pcmcat374100050009",
                    "name": "Cuisinart Toaster & Pizza Ovens"
                }
            ],
            "subCategories": []
        }
    ]
}
```

</p>
</details>
