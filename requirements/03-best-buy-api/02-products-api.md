# The Products API
 The Best Buy Product API is used to return information about a product or list of products.

## Getting a Single Product
```https://api.bestbuy.com/v1/products/5005633.json?apiKey=YOUR_API_KEY```

<details>
<p>
  <summary>Click to show response</summary>

  ```json
  {
    "sku": 5005633,
    "score": null,
    "productId": null,
    "name": "Canon - EOS 80D DSLR Camera with 18-135mm IS USM Lens - Black",
    "source": null,
    "type": "HardGood",
    "startDate": "2016-02-18",
    "new": false,
    "active": true,
    "lowPriceGuarantee": true,
    "activeUpdateDate": "2018-04-20T10:09:59",
    "regularPrice": 1399.99,
    "salePrice": 1149.99,
    "clearance": false,
    "onSale": true,
    "planPrice": null,
    "priceWithPlan": [],
    "contracts": [],
    "priceRestriction": null,
    "priceUpdateDate": "2020-04-27T00:01:00",
    "digital": false,
    "preowned": false,
    "carriers": [],
    "planFeatures": [],
    "devices": [],
    "carrierPlans": [],
    "technologyCode": null,
    "carrierModelNumber": null,
    "earlyTerminationFees": [],
    "monthlyRecurringCharge": "",
    "monthlyRecurringChargeGrandTotal": "",
    "activationCharge": "",
    "minutePrice": "",
    "planCategory": null,
    "planType": null,
    "familyIndividualCode": null,
    "validFrom": null,
    "validUntil": null,
    "carrierPlan": null,
    "outletCenter": null,
    "secondaryMarket": null,
    "frequentlyPurchasedWith": [],
    "accessories": [],
    "relatedProducts": [],
    "requiredParts": [],
    "techSupportPlans": [],
    "crossSell": [],
    "salesRankShortTerm": 6260,
    "salesRankMediumTerm": 6277,
    "salesRankLongTerm": 5943,
    "bestSellingRank": 6091,
    "url": "https://api.bestbuy.com/click/-/5005633/pdp",
    "spin360Url": null,
    "mobileUrl": "https://api.bestbuy.com/click/-/5005633/pdp",
    "affiliateUrl": null,
    "addToCartUrl": "https://api.bestbuy.com/click/-/5005633/cart",
    "affiliateAddToCartUrl": null,
    "linkShareAffiliateUrl": "",
    "linkShareAffiliateAddToCartUrl": "",
    "upc": "013803271843",
    "productTemplate": "Digital_Cameras",
    "categoryPath": [
        {
            "id": "cat00000",
            "name": "Best Buy"
        },
        {
            "id": "abcat0400000",
            "name": "Cameras & Camcorders"
        },
        {
            "id": "abcat0401000",
            "name": "Digital Cameras"
        },
        {
            "id": "abcat0401005",
            "name": "Digital SLR Cameras"
        },
        {
            "id": "pcmcat180400050000",
            "name": "DSLR Body & Lens"
        }
    ],
    "alternateCategories": [],
    "lists": [],
    "customerReviewCount": 827,
    "customerReviewAverage": 4.8,
    "customerTopRated": true,
    "format": null,
    "freeShipping": true,
    "freeShippingEligible": true,
    "inStoreAvailability": true,
    "inStoreAvailabilityText": "Store Pickup: Available at most stores",
    "inStoreAvailabilityUpdateDate": "2019-01-16T10:53:15",
    "itemUpdateDate": "2020-05-04T03:05:25",
    "onlineAvailability": true,
    "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
    "onlineAvailabilityUpdateDate": "2018-11-07T02:29:13",
    "releaseDate": "2016-03-25",
    "shippingCost": 0,
    "shipping": [
        {
            "ground": "",
            "secondDay": "",
            "nextDay": 0,
            "vendorDelivery": ""
        }
    ],
    "shippingLevelsOfService": [
        {
            "serviceLevelId": 6,
            "serviceLevelName": "One Day",
            "unitShippingPrice": 0
        }
    ],
    "specialOrder": false,
    "shortDescription": "24.2-megapixel APS-C format CMOS sensorISO 100&#8211;16,000, expandable to 25,600Shooting speeds up to 7 fpsBuilt-in Wi-Fi45 focus points (45 cross-type)Built-in NFC",
    "class": "CAMERAS - ILC",
    "classId": 363,
    "subclass": "DSLR CAMERAS",
    "subclassId": 205,
    "department": "PHOTO/COMMODITIES",
    "departmentId": 5,
    "protectionPlanTerm": "CAN",
    "protectionPlanType": null,
    "protectionPlanLowPrice": "",
    "protectionPlanHighPrice": "",
    "buybackPlans": [],
    "protectionPlans": [],
    "protectionPlanDetails": [],
    "productFamilies": [],
    "productVariations": [
        {
            "sku": "5005626",
            "variations": [
                {
                    "name": "Digital_Cameras_and_Camcorders:Product_Set",
                    "value": "Body Only"
                }
            ]
        },
        {
            "sku": "5005633",
            "variations": [
                {
                    "name": "Digital_Cameras_and_Camcorders:Product_Set",
                    "value": "w/ 18-135mm Lens"
                }
            ]
        },
        {
            "sku": "5005642",
            "variations": [
                {
                    "name": "Digital_Cameras_and_Camcorders:Product_Set",
                    "value": "w/ 18-55mm Lens"
                }
            ]
        }
    ],
    "aspectRatio": null,
    "screenFormat": null,
    "lengthInMinutes": null,
    "mpaaRating": null,
    "plot": null,
    "studio": null,
    "theatricalReleaseDate": null,
    "description": null,
    "manufacturer": "Canon",
    "modelNumber": "1263C006",
    "images": [
        {
            "rel": "Front_Zoom",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "991",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_sd.jpg",
            "primary": true
        },
        {
            "rel": "Front_Thumbnail",
            "unitOfMeasure": "pixels",
            "width": "54",
            "height": "54",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_s.gif",
            "primary": false
        },
        {
            "rel": "Left_Zoom",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "955",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633ld.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_1",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "322",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv1a.jpg",
            "primary": false
        },
        {
            "rel": "Left_Standard",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "478",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633le.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_2",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "325",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv2a.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_12",
            "unitOfMeasure": "pixels",
            "width": "427",
            "height": "500",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv12a.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_11",
            "unitOfMeasure": "pixels",
            "width": "413",
            "height": "500",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv11a.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_16",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "327",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv16a.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_15",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "312",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv15a.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_14",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "331",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv14a.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Standard_13",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "393",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv13a.jpg",
            "primary": false
        },
        {
            "rel": "Front_Detail",
            "unitOfMeasure": "pixels",
            "width": "105",
            "height": "104",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_sc.jpg",
            "primary": false
        },
        {
            "rel": "Top_Zoom",
            "unitOfMeasure": "pixels",
            "width": "844",
            "height": "1000",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_td.jpg",
            "primary": false
        },
        {
            "rel": "Top_Standard",
            "unitOfMeasure": "pixels",
            "width": "422",
            "height": "500",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_ta.jpg",
            "primary": false
        },
        {
            "rel": "Front_Large",
            "unitOfMeasure": "pixels",
            "width": "161",
            "height": "160",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_sb.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_1",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "644",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv1d.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_2",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "650",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv2d.jpg",
            "primary": false
        },
        {
            "rel": "Front_Medium",
            "unitOfMeasure": "pixels",
            "width": "70",
            "height": "69",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633fp.gif",
            "primary": false
        },
        {
            "rel": "Front_Standard",
            "unitOfMeasure": "pixels",
            "width": "500",
            "height": "496",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_sa.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_11",
            "unitOfMeasure": "pixels",
            "width": "826",
            "height": "1000",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv11d.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_12",
            "unitOfMeasure": "pixels",
            "width": "854",
            "height": "1000",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv12d.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_13",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "786",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv13d.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_14",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "662",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv14d.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_15",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "624",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv15d.jpg",
            "primary": false
        },
        {
            "rel": "Alt_View_Zoom_16",
            "unitOfMeasure": "pixels",
            "width": "1000",
            "height": "654",
            "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv16d.jpg",
            "primary": false
        }
    ],
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_sa.jpg",
    "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_sd.jpg",
    "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633fp.gif",
    "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_s.gif",
    "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_sb.jpg",
    "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633cv1d.jpg",
    "angleImage": null,
    "backViewImage": null,
    "energyGuideImage": null,
    "leftViewImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633ld.jpg",
    "accessoriesImage": null,
    "remoteControlImage": null,
    "rightViewImage": null,
    "topViewImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5005/5005633_td.jpg",
    "albumTitle": "EOS 80D DSLR Camera with 18-135mm IS USM Lens",
    "artistName": null,
    "artistId": null,
    "originalReleaseDate": null,
    "parentalAdvisory": null,
    "mediaCount": null,
    "monoStereo": null,
    "studioLive": null,
    "condition": "New",
    "inStorePickup": true,
    "friendsAndFamilyPickup": true,
    "homeDelivery": false,
    "quantityLimit": 5,
    "fulfilledBy": null,
    "members": [],
    "bundledIn": [
        {
            "sku": 9999265200050012
        },
        {
            "sku": 9999270000050002
        }
    ],
    "albumLabel": null,
    "genre": null,
    "color": "Black",
    "depth": "3.09 inches",
    "dollarSavings": 250,
    "percentSavings": "17.86",
    "tradeInValue": "",
    "height": "4.14 inches",
    "orderable": "Available",
    "weight": "25.8 pounds",
    "shippingWeight": 4.7,
    "width": "5.47 inches",
    "warrantyLabor": "1 year",
    "warrantyParts": "1 year",
    "softwareAge": null,
    "softwareGrade": null,
    "platform": null,
    "numberOfPlayers": null,
    "softwareNumberOfPlayers": null,
    "esrbRating": null,
    "longDescription": "Get great performance with the Canon EOS 80D lens kit. It combines a 24.2-megapixel sensor with an 18-135mm lens to get you closer to the action than ever before, and image stabilization reduces the effects of hand shake. Enjoy ultra-precise focusing and high-definition video for maximum versatility from this Canon EOS 80D lens kit. .",
    "includedItemList": [
        {
            "includedItem": "Canon EOS 80D DSLR Camera"
        },
        {
            "includedItem": "18-135mm IS USM lens"
        },
        {
            "includedItem": "eyecup"
        },
        {
            "includedItem": "camera cover"
        },
        {
            "includedItem": "wide strap"
        },
        {
            "includedItem": "battery pack (LP-E6N)"
        },
        {
            "includedItem": "battery charger (LC-E6)"
        },
        {
            "includedItem": "Owner's Manual"
        }
    ],
    "marketplace": null,
    "listingId": null,
    "sellerId": null,
    "shippingRestrictions": null,
    "proposition65WarningMessage": null,
    "proposition65WarningType": "01",
    "displayType": "LCD touch screen",
    "screenSizeIn": 3
}
```
</p>
</details>

<br>

## Get Products for a given Category
```https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=YOUR_API_KEY&format=json```
<details>
<p>
  <summary>Click to show response</summary>

  ```json
  {
  "from": 1,
  "to": 10,
  "currentPage": 1,
  "total": 758,
  "totalPages": 76,
  "queryTime": "0.013",
  "totalTime": "0.080",
  "partial": false,
  "canonicalUrl": "/v1/products((categoryPath.id=abcat0502000))?format=json&apiKey=ma6v7d7sxqmp6tbsssu7rcas",
  "products": [
    {
      "sku": 4598989,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook® - 12\" Display - Intel Core M3 - 8GB Memory - 256GB Flash Storage (Latest Model) - Silver",
      "source": null,
      "type": "HardGood",
      "startDate": "2017-06-05",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2020-05-04T20:45:43",
      "regularPrice": 1299.99,
      "salePrice": 1234.99,
      "clearance": true,
      "onSale": true,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2019-10-18T00:01:40",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": 24457,
      "salesRankMediumTerm": 24059,
      "salesRankLongTerm": 11167,
      "bestSellingRank": 12262,
      "url": "https://api.bestbuy.com/click/-/4598989/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/4598989/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/4598989/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190198203373",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat748300603823",
          "name": "MacBook"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 1215,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2020-05-04T20:45:43",
      "itemUpdateDate": "2020-05-06T06:49:54",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Backordered: Usually ships in 3-4 weeks",
      "onlineAvailabilityUpdateDate": "2020-05-04T20:45:43",
      "releaseDate": "2015-03-12",
      "shippingCost": 0,
      "shipping": [
        {
          "ground": 0,
          "secondDay": 15.94,
          "nextDay": 27.94,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 5,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 27.94
        },
        {
          "serviceLevelId": 3,
          "serviceLevelName": "Two Day",
          "unitShippingPrice": 15.94
        },
        {
          "serviceLevelId": 1,
          "serviceLevelName": "Standard",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "Intel Core m3 processor Intel HD Graphics 615Fast SSD storageUp to 10 hours of battery life&#178;802.11ac Wi-FiForce Touch Trackpad",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "MB ",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MNYH2LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "576",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_sd.jpg",
          "primary": true
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "127",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_sb.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_13",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "202",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv13a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "202",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "309",
          "height": "500",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "493",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "60",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_sc.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "40",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "288",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "619",
          "height": "1000",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "987",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv10d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_13",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "404",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv13d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "404",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "31",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_s.gif",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598989cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook® - 12\" Display - Intel Core M3 - 8GB Memory - 256GB Flash Storage (Latest Model)",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": true,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Silver",
      "depth": "7.74 inches",
      "dollarSavings": 65,
      "percentSavings": "5.0",
      "tradeInValue": "",
      "height": "0.14 inches",
      "orderable": "Available",
      "weight": "2.03 pounds",
      "shippingWeight": 4.6,
      "width": "11.04 inches",
      "warrantyLabor": "1 year limited",
      "warrantyParts": "1 year limited",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook delivers more performance in the lightest and thinnest Mac notebook ever. With new seventh-generation Intel Core processors,12-inch Retina display,&#185; a full-size keyboard, force-sensing trackpad, versatile USB-C port, and all-day battery life,&#186; MacBook features big thinking in an impossibly compact form.",
      "includedItemList": [
        {
          "includedItem": "29W USB-C Power Adapter"
        },
        {
          "includedItem": "MacBook (Latest Model) - 12\" Display - Intel Core m3 - 8 GB Memory - 256GB Flash Storage"
        },
        {
          "includedItem": "USB-C Charge Cable (2 m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "01",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": true,
      "ethernetPort": false,
      "hdmiOutputs": 0,
      "ieee1394FirewirePort": false,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 12
    },
    {
      "sku": 4599600,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD - Silver",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-06-21T08:49:18",
      "regularPrice": 1799.99,
      "salePrice": 1649.99,
      "clearance": false,
      "onSale": true,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-05-04T00:01:24",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/4599600/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/4599600/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/4599600/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199114456",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 718,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2019-06-21T09:13:46",
      "itemUpdateDate": "2020-05-06T07:07:05",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2019-06-21T09:13:46",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": "",
          "secondDay": "",
          "nextDay": 0,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 6,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with a new eighth-generation quad-core Intel processor. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "13-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "4599600",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599700",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "4599800",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599901",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363210",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363215",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363217",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363221",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363223",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363233",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363236",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363239",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363241",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363254",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV992LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "579",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_sd.jpg",
          "primary": true
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "31",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "127",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_sb.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "41",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "289",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "469",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "253",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "466",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_14",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "225",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv14a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_13",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "341",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv13a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "507",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "938",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_13",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "681",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv13d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_14",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "450",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv14d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "61",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_sc.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "932",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv10d.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599600cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Silver",
      "depth": "8.36 inches",
      "dollarSavings": 150,
      "percentSavings": "8.33",
      "tradeInValue": "",
      "height": "0.59 inches",
      "orderable": "Available",
      "weight": "3.02 pounds",
      "shippingWeight": 5.65,
      "width": "11.97 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has a new eighth-generation quad-core Intel processor with Turbo Boost up to 4.1GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful 13-inch notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "61W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD"
        },
        {
          "includedItem": "USB-C charge cable (2m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 13.3
    },
    {
      "sku": 4599700,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD - Space Gray",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-06-21T08:49:18",
      "regularPrice": 1799.99,
      "salePrice": 1649.99,
      "clearance": false,
      "onSale": true,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-05-04T00:01:09",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/4599700/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/4599700/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/4599700/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199112216",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 718,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2019-06-21T09:13:46",
      "itemUpdateDate": "2020-05-06T07:08:06",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2019-06-21T09:13:46",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": "",
          "secondDay": "",
          "nextDay": 0,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 10,
          "serviceLevelName": "Same Day",
          "unitShippingPrice": 5.99
        },
        {
          "serviceLevelId": 6,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with a new eighth-generation quad-core Intel processor. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "13-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "4599600",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599700",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "4599800",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599901",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363210",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363215",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363217",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363221",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363223",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363233",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363236",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363239",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363241",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363254",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV962LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "579",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_sd.jpg",
          "primary": true
        },
        {
          "rel": "Alt_View_Standard_14",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "225",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv14a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_13",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "341",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv13a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "469",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "253",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "492",
          "height": "500",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "61",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_sc.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "41",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "289",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "507",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "983",
          "height": "1000",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv10d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_14",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "450",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv14d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_13",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "681",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv13d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "938",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "31",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "127",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_sb.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599700cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Space Gray",
      "depth": "8.36 inches",
      "dollarSavings": 150,
      "percentSavings": "8.33",
      "tradeInValue": "",
      "height": "0.59 inches",
      "orderable": "Available",
      "weight": "3.02 pounds",
      "shippingWeight": 5.5,
      "width": "11.97 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has a new eighth-generation quad-core Intel processor with Turbo Boost up to 4.1GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful 13-inch notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "61W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD"
        },
        {
          "includedItem": "USB-C charge cable (2m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 13.3
    },
    {
      "sku": 4599800,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 512GB SSD - Silver",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-06-21T08:49:53",
      "regularPrice": 1999.99,
      "salePrice": 1849.99,
      "clearance": false,
      "onSale": true,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-05-04T00:00:57",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/4599800/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/4599800/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/4599800/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199115354",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 335,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2019-12-09T15:16:14",
      "itemUpdateDate": "2020-05-04T03:05:56",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2019-12-03T00:26:14",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": 0,
          "secondDay": 16.93,
          "nextDay": 29.93,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 5,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 29.93
        },
        {
          "serviceLevelId": 3,
          "serviceLevelName": "Two Day",
          "unitShippingPrice": 16.93
        },
        {
          "serviceLevelId": 2,
          "serviceLevelName": "Standard",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with a new eighth-generation quad-core Intel processor. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "13-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "4599600",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599700",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "4599800",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599901",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363210",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363215",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363217",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363221",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363223",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363233",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363236",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363239",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363241",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363254",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV9A2LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "579",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_sd.jpg",
          "primary": true
        },
        {
          "rel": "Alt_View_Standard_14",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "225",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv14a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_13",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "341",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv13a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "469",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "253",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "466",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "61",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_sc.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "41",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "289",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "507",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "932",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv10d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_14",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "450",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv14d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_13",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "681",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv13d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "938",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "31",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "127",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_sb.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599800cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 512GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Silver",
      "depth": "8.36 inches",
      "dollarSavings": 150,
      "percentSavings": "7.5",
      "tradeInValue": "",
      "height": "0.59 inches",
      "orderable": "Available",
      "weight": "3.02 pounds",
      "shippingWeight": 5.6,
      "width": "11.97 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has a new eighth-generation quad-core Intel processor with Turbo Boost up to 4.1GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful 13-inch notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "61W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 512GB SSD"
        },
        {
          "includedItem": "USB-C charge cable (2m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 13.3
    },
    {
      "sku": 4599901,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 512GB SSD - Space Gray",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-06-21T08:49:18",
      "regularPrice": 1999.99,
      "salePrice": 1849.99,
      "clearance": false,
      "onSale": true,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-05-04T00:00:50",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/4599901/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/4599901/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/4599901/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199113091",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 335,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2019-06-21T09:13:46",
      "itemUpdateDate": "2020-05-04T03:07:02",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2019-06-21T09:13:46",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": "",
          "secondDay": "",
          "nextDay": 0,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 6,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with a new eighth-generation quad-core Intel processor. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "13-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "4599600",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599700",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "4599800",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "4599901",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "8GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363210",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363215",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363217",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363221",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363223",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363233",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363236",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i7"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363239",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363241",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "6363254",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i5"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV972LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "579",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_sd.jpg",
          "primary": true
        },
        {
          "rel": "Alt_View_Standard_14",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "225",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv14a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_13",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "341",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv13a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "469",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "253",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "492",
          "height": "500",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "61",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_sc.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "41",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "289",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "507",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "983",
          "height": "1000",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv10d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_14",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "450",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv14d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_13",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "681",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv13d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "938",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "31",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "127",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_sb.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4599/4599901cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 512GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Space Gray",
      "depth": "8.36 inches",
      "dollarSavings": 150,
      "percentSavings": "7.5",
      "tradeInValue": "",
      "height": "0.59 inches",
      "orderable": "Available",
      "weight": "3.02 pounds",
      "shippingWeight": 5.7,
      "width": "11.97 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has a new eighth-generation quad-core Intel processor with Turbo Boost up to 4.1GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful 13-inch notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "61W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro - 13\" Display with Touch Bar - Intel Core i5 - 8GB Memory - 512GB SSD"
        },
        {
          "includedItem": "USB-C charge cable (2m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 13.3
    },
    {
      "sku": 4600301,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro 15.4\" Display with Touch Bar - Intel Core i7 - 16GB Memory - AMD Radeon Pro 555X - 256GB SSD - Silver",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-06-21T08:49:33",
      "regularPrice": 2399.99,
      "salePrice": 2399.99,
      "clearance": false,
      "onSale": false,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-04-26T00:00:50",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/4600301/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/4600301/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/4600301/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199114487",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 721,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2020-01-09T12:27:11",
      "itemUpdateDate": "2020-05-06T02:04:02",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2020-04-28T03:24:34",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": 0,
          "secondDay": 18.91,
          "nextDay": 33.91,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 5,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 33.91
        },
        {
          "serviceLevelId": 3,
          "serviceLevelName": "Two Day",
          "unitShippingPrice": 18.91
        },
        {
          "serviceLevelId": 1,
          "serviceLevelName": "Standard",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with new ninth-generation 6-core Intel processors. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "15-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "4600301",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "5430541",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363234",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV922LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "648",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_sd.jpg",
          "primary": true
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "35",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "142",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_sb.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "45",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "324",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "460",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "416",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "496",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "831",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "921",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "68",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_sc.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "993",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301cv10d.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4600/4600301cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro 15.4\" Display with Touch Bar - Intel Core i7 - 16GB Memory - AMD Radeon Pro 555X - 256GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 5,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Silver",
      "depth": "9.48 inches",
      "dollarSavings": 0,
      "percentSavings": "0.0",
      "tradeInValue": "",
      "height": "0.61 inches",
      "orderable": "Available",
      "weight": "4.02 pounds",
      "shippingWeight": 7.1,
      "width": "13.8 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has new ninth-generation 6-core Intel processor. Turbo Boost up to 4.5GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "87W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro 15.4\" Laptop - Intel Core i7 - 16GB Memory - AMD Radeon Pro 555X - 256GB Solid-State Drive"
        },
        {
          "includedItem": "USB-C Charge Cable (2 m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 15.4
    },
    {
      "sku": 4766300,
      "score": null,
      "productId": 1219816700697,
      "name": "Samsung - Geek Squad Certified Refurbished ATIV Book 9 Spin 13.3\" Touch-Screen Laptop - Intel Core i7 - 8GB Memory - 256GB SSD - Pure Black",
      "source": "bestbuy",
      "type": "HardGood",
      "startDate": "2015-12-20",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2020-04-27T20:45:54",
      "regularPrice": 1199.99,
      "salePrice": 1199.99,
      "clearance": false,
      "onSale": false,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2017-03-08T15:38:52",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": 77814,
      "bestSellingRank": 82242,
      "url": "https://api.bestbuy.com/click/-/4766300/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/4766300/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/4766300/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "400047663006",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat219300050014",
          "name": "Refurbished Laptops"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 4,
      "customerReviewAverage": 3.8,
      "customerTopRated": false,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": false,
      "inStoreAvailabilityText": "Store Pickup: Not Available",
      "inStoreAvailabilityUpdateDate": "2017-03-08T15:38:52",
      "itemUpdateDate": "2020-05-06T03:12:04",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Not Available",
      "onlineAvailabilityUpdateDate": "2020-04-27T20:45:54",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": 0,
          "secondDay": 15.94,
          "nextDay": 27.94,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 5,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 27.94
        },
        {
          "serviceLevelId": 3,
          "serviceLevelName": "Two Day",
          "unitShippingPrice": 15.94
        },
        {
          "serviceLevelId": 2,
          "serviceLevelName": "Standard",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "Windows 10Technical details: 6th Gen Intel&#174; Core&#8482; i7 processor; 13.3\" display; 8GB memory; 256GB solid state driveSpecial features: Bluetooth; touch screen; backlit keyboard; HDMI outputNote: DVD/CD drive not included",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "GSRF LAPTOPS",
      "subclassId": 670,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "GSR",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Samsung",
      "modelNumber": "GSRF-NP940X3L-K01US",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "782",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_sd.jpg",
          "primary": true
        },
        {
          "rel": "Alt_View_Standard_3",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "418",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300cv3a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_1",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "350",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300cv1a.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "55",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "82",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_sc.jpg",
          "primary": false
        },
        {
          "rel": "Left_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "500",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300le.jpg",
          "primary": false
        },
        {
          "rel": "Left_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "999",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300ld.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_1",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "699",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300cv1d.jpg",
          "primary": false
        },
        {
          "rel": "Angle_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "631",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_rd.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_3",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "835",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300cv3d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "391",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_sa.jpg",
          "primary": false
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "42",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_s.gif",
          "primary": false
        },
        {
          "rel": "Angle_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "315",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_ra.jpg",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "205",
          "height": "160",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_sb.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300cv1d.jpg",
      "angleImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300_rd.jpg",
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4766/4766300ld.jpg",
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "Geek Squad Certified Refurbished ATIV Book 9 Spin 13.3\" Touch-Screen Laptop - Intel Core i7 - 8GB Memory - 256GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "Refurbished",
      "inStorePickup": false,
      "friendsAndFamilyPickup": true,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": "BestBuy.com",
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Pure Black",
      "depth": "8.69 inches",
      "dollarSavings": 0,
      "percentSavings": "0.0",
      "tradeInValue": "",
      "height": "0.59 inches",
      "orderable": "Available",
      "weight": "2.87 pounds",
      "shippingWeight": 4.85,
      "width": "12.39 inches",
      "warrantyLabor": "1 year",
      "warrantyParts": "1 year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "Geek Squad&#174; Certified Refurbished Samsung ATIV Book 9 Spin Laptop: Stay connected and productive wherever you go with this efficient laptop, which features Wireless-AC networking speeds for rapid Internet access. The 13.3\" touch screen makes it easy to swipe through features, and the backlit keyboard lets you type in dim lighting.  Learn more about Geek Squad Certified Refurbished products &#8250;",
      "includedItemList": [
        {
          "includedItem": "Geek Squad Certified Refurbished ATIV Book 9 Spin 13.3\" Touch-Screen Laptop - Intel Core i7 - 8GB Memory - 256GB SSD"
        },
        {
          "includedItem": "Power cord"
        }
      ],
      "marketplace": false,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluetoothEnabled": true,
      "displayType": "Touchscreen LED",
      "driveCapacityGb": 256,
      "energyStarQualified": false,
      "hdmiOutputs": 1,
      "mobileOperatingSystem": "Windows 10",
      "screenSizeIn": 13.3,
      "usbPort": true
    },
    {
      "sku": 5430541,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro 15.4\" Display with Touch Bar - Intel Core i7 - 16GB Memory - AMD Radeon Pro 555X - 256GB SSD - Space Gray",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-12-30T12:00:49",
      "regularPrice": 2399.99,
      "salePrice": 2399.99,
      "clearance": false,
      "onSale": false,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-04-16T00:01:11",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/5430541/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/5430541/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/5430541/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199112681",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 721,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": false,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2020-04-29T14:47:14",
      "itemUpdateDate": "2020-05-06T06:17:40",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2020-05-06T06:17:40",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": 0,
          "secondDay": 18.91,
          "nextDay": 33.91,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 5,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 33.91
        },
        {
          "serviceLevelId": 3,
          "serviceLevelName": "Two Day",
          "unitShippingPrice": 18.91
        },
        {
          "serviceLevelId": 1,
          "serviceLevelName": "Standard",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with new ninth-generation 6-core Intel processors. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "15-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "4600301",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "5430541",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "256GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363234",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV902LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "651",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_sd.jpg",
          "primary": true
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "460",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "416",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "478",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "68",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_sc.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "46",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "325",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "831",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "955",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541cv10d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "921",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "35",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "143",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_sb.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430541cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro 15.4\" Display with Touch Bar - Intel Core i7 - 16GB Memory - AMD Radeon Pro 555X - 256GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": false,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Space Gray",
      "depth": "9.48 inches",
      "dollarSavings": 0,
      "percentSavings": "0.0",
      "tradeInValue": "",
      "height": "0.61 inches",
      "orderable": "Available",
      "weight": "4.02 pounds",
      "shippingWeight": 7.1,
      "width": "13.8 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has new ninth-generation 6-core Intel processor. Turbo Boost up to 4.5GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "87W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro 15.4\" Laptop - Intel Core i7 - 16GB Memory - AMD Radeon Pro 555X - 256GB Solid-State Drive"
        },
        {
          "includedItem": "USB-C Charge Cable (2 m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 15.4
    },
    {
      "sku": 5430569,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro 15.4\" Display with Touch Bar - Intel Core i9 - 16GB Memory - AMD Radeon Pro 560X - 512GB SSD - Silver",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-06-21T08:49:18",
      "regularPrice": 2799.99,
      "salePrice": 2799.99,
      "clearance": false,
      "onSale": false,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-04-16T00:01:09",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/5430569/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/5430569/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/5430569/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199115385",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 599,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2020-01-09T12:33:17",
      "itemUpdateDate": "2020-05-06T07:09:34",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2020-01-09T13:00:48",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": "",
          "secondDay": 0,
          "nextDay": 31.92,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 5,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 31.92
        },
        {
          "serviceLevelId": 14,
          "serviceLevelName": "Two Day",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with new ninth-generation 8-core Intel processors. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "15-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "5430569",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "5430578",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6358843",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "32GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363229",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "32GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "2000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6396098",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "32GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV932LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "648",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_sd.jpg",
          "primary": true
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "35",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "142",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_sb.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "45",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "324",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "460",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "416",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "496",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "831",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "921",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "68",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_sc.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "993",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569cv10d.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430569cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro 15.4\" Display with Touch Bar - Intel Core i9 - 16GB Memory - AMD Radeon Pro 560X - 512GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Silver",
      "depth": "9.48 inches",
      "dollarSavings": 0,
      "percentSavings": "0.0",
      "tradeInValue": "",
      "height": "0.61 inches",
      "orderable": "Available",
      "weight": "4.02 pounds",
      "shippingWeight": 6.4,
      "width": "13.8 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has new ninth-generation 8-core Intel processor. Turbo Boost up to 4.8GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "87W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro 15.4\" Laptop - Intel Core i9 - 16GB Memory - AMD Radeon Pro 560X - 512GB Solid-State Drive"
        },
        {
          "includedItem": "USB-C Charge Cable (2 m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 15.4
    },
    {
      "sku": 5430578,
      "score": null,
      "productId": null,
      "name": "Apple - MacBook Pro 15.4\" Display with Touch Bar - Intel Core i9 - 16GB Memory - AMD Radeon Pro 560X - 512GB SSD - Space Gray",
      "source": null,
      "type": "HardGood",
      "startDate": "2019-05-21",
      "new": false,
      "active": true,
      "lowPriceGuarantee": false,
      "activeUpdateDate": "2019-06-21T08:49:48",
      "regularPrice": 2799.99,
      "salePrice": 2799.99,
      "clearance": false,
      "onSale": false,
      "planPrice": null,
      "priceWithPlan": [],
      "contracts": [],
      "priceRestriction": null,
      "priceUpdateDate": "2020-04-16T00:00:52",
      "digital": false,
      "preowned": false,
      "carriers": [],
      "planFeatures": [],
      "devices": [],
      "carrierPlans": [],
      "technologyCode": null,
      "carrierModelNumber": null,
      "earlyTerminationFees": [],
      "monthlyRecurringCharge": "",
      "monthlyRecurringChargeGrandTotal": "",
      "activationCharge": "",
      "minutePrice": "",
      "planCategory": null,
      "planType": null,
      "familyIndividualCode": null,
      "validFrom": null,
      "validUntil": null,
      "carrierPlan": null,
      "outletCenter": null,
      "secondaryMarket": null,
      "frequentlyPurchasedWith": [],
      "accessories": [],
      "relatedProducts": [],
      "requiredParts": [],
      "techSupportPlans": [],
      "crossSell": [],
      "salesRankShortTerm": null,
      "salesRankMediumTerm": null,
      "salesRankLongTerm": null,
      "bestSellingRank": null,
      "url": "https://api.bestbuy.com/click/-/5430578/pdp",
      "spin360Url": null,
      "mobileUrl": "https://api.bestbuy.com/click/-/5430578/pdp",
      "affiliateUrl": null,
      "addToCartUrl": "https://api.bestbuy.com/click/-/5430578/cart",
      "affiliateAddToCartUrl": null,
      "linkShareAffiliateUrl": "",
      "linkShareAffiliateAddToCartUrl": "",
      "upc": "190199113589",
      "productTemplate": "Laptop_Computers",
      "categoryPath": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "abcat0500000",
          "name": "Computers & Tablets"
        },
        {
          "id": "abcat0502000",
          "name": "Laptops"
        },
        {
          "id": "pcmcat138500050001",
          "name": "All Laptops"
        },
        {
          "id": "pcmcat247400050001",
          "name": "MacBooks"
        },
        {
          "id": "pcmcat378600050009",
          "name": "MacBook Pro"
        }
      ],
      "alternateCategories": [],
      "lists": [],
      "customerReviewCount": 599,
      "customerReviewAverage": 4.8,
      "customerTopRated": true,
      "format": null,
      "freeShipping": true,
      "freeShippingEligible": true,
      "inStoreAvailability": true,
      "inStoreAvailabilityText": "Store Pickup:",
      "inStoreAvailabilityUpdateDate": "2020-01-09T13:07:42",
      "itemUpdateDate": "2020-05-06T07:09:34",
      "onlineAvailability": true,
      "onlineAvailabilityText": "Shipping: Usually ships in 1 business day",
      "onlineAvailabilityUpdateDate": "2020-01-09T13:07:42",
      "releaseDate": null,
      "shippingCost": 0,
      "shipping": [
        {
          "ground": "",
          "secondDay": "",
          "nextDay": 0,
          "vendorDelivery": ""
        }
      ],
      "shippingLevelsOfService": [
        {
          "serviceLevelId": 6,
          "serviceLevelName": "One Day",
          "unitShippingPrice": 0
        }
      ],
      "specialOrder": false,
      "shortDescription": "MacBook Pro with new ninth-generation 8-core Intel processors. Power your best work.",
      "class": "MOBILE COMPUTING",
      "classId": 140,
      "subclass": "APPLE",
      "subclassId": 5075,
      "department": "COMPUTERS",
      "departmentId": 6,
      "protectionPlanTerm": "15-",
      "protectionPlanType": null,
      "protectionPlanLowPrice": "",
      "protectionPlanHighPrice": "",
      "buybackPlans": [],
      "protectionPlans": [],
      "protectionPlanDetails": [],
      "productFamilies": [],
      "productVariations": [
        {
          "sku": "5430569",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Silver"
            }
          ]
        },
        {
          "sku": "5430578",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "16GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "512GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6358843",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 8th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "32GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6363229",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "32GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "2000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        },
        {
          "sku": "6396098",
          "variations": [
            {
              "name": "Desktop_and_Laptop_Computers:Processor_Model",
              "value": "Intel 9th Generation Core i9"
            },
            {
              "name": "Desktop_and_Laptop_Computers:System_Memory_RAM",
              "value": "32GB"
            },
            {
              "name": "Desktop_and_Laptop_Computers:Total_Storage_Capacity",
              "value": "1000GB"
            },
            {
              "name": "Electronics:Color",
              "value": "Space Gray"
            }
          ]
        }
      ],
      "aspectRatio": null,
      "screenFormat": null,
      "lengthInMinutes": null,
      "mpaaRating": null,
      "plot": null,
      "studio": null,
      "theatricalReleaseDate": null,
      "description": null,
      "manufacturer": "Apple",
      "modelNumber": "MV912LL/A",
      "images": [
        {
          "rel": "Front_Zoom",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "651",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_sd.jpg",
          "primary": true
        },
        {
          "rel": "Alt_View_Standard_12",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "460",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578cv12a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_11",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "416",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578cv11a.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Standard_10",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "478",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578cv10a.jpg",
          "primary": false
        },
        {
          "rel": "Front_Detail",
          "unitOfMeasure": "pixels",
          "width": "105",
          "height": "68",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_sc.jpg",
          "primary": false
        },
        {
          "rel": "Front_Medium",
          "unitOfMeasure": "pixels",
          "width": "70",
          "height": "46",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578fp.gif",
          "primary": false
        },
        {
          "rel": "Front_Standard",
          "unitOfMeasure": "pixels",
          "width": "500",
          "height": "325",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_sa.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_11",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "831",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578cv11d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_10",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "955",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578cv10d.jpg",
          "primary": false
        },
        {
          "rel": "Alt_View_Zoom_12",
          "unitOfMeasure": "pixels",
          "width": "1000",
          "height": "921",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578cv12d.jpg",
          "primary": false
        },
        {
          "rel": "Front_Thumbnail",
          "unitOfMeasure": "pixels",
          "width": "54",
          "height": "35",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_s.gif",
          "primary": false
        },
        {
          "rel": "Front_Large",
          "unitOfMeasure": "pixels",
          "width": "220",
          "height": "143",
          "href": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_sb.jpg",
          "primary": false
        }
      ],
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_sa.jpg",
      "largeFrontImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_sd.jpg",
      "mediumImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578fp.gif",
      "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_s.gif",
      "largeImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578_sb.jpg",
      "alternateViewsImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5430/5430578cv10d.jpg",
      "angleImage": null,
      "backViewImage": null,
      "energyGuideImage": null,
      "leftViewImage": null,
      "accessoriesImage": null,
      "remoteControlImage": null,
      "rightViewImage": null,
      "topViewImage": null,
      "albumTitle": "MacBook Pro 15.4\" Display with Touch Bar - Intel Core i9 - 16GB Memory - AMD Radeon Pro 560X - 512GB SSD",
      "artistName": null,
      "artistId": null,
      "originalReleaseDate": null,
      "parentalAdvisory": null,
      "mediaCount": null,
      "monoStereo": null,
      "studioLive": null,
      "condition": "New",
      "inStorePickup": true,
      "friendsAndFamilyPickup": false,
      "homeDelivery": false,
      "quantityLimit": 2,
      "fulfilledBy": null,
      "members": [],
      "bundledIn": [],
      "albumLabel": null,
      "genre": null,
      "color": "Space Gray",
      "depth": "9.48 inches",
      "dollarSavings": 0,
      "percentSavings": "0.0",
      "tradeInValue": "",
      "height": "0.61 inches",
      "orderable": "Available",
      "weight": "4.02 pounds",
      "shippingWeight": 7.2,
      "width": "13.8 inches",
      "warrantyLabor": "1 Year",
      "warrantyParts": "1 Year",
      "softwareAge": null,
      "softwareGrade": null,
      "platform": null,
      "numberOfPlayers": null,
      "softwareNumberOfPlayers": null,
      "esrbRating": null,
      "longDescription": "MacBook Pro has new ninth-generation 8-core Intel processor. Turbo Boost up to 4.8GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful notebook. Pushed even further.",
      "includedItemList": [
        {
          "includedItem": "87W USB-C power adapter"
        },
        {
          "includedItem": "Apple MacBook Pro 15.4\" Laptop - Intel Core i9 - 16GB Memory - AMD Radeon Pro 560X - 512GB Solid-State Drive"
        },
        {
          "includedItem": "USB-C Charge Cable (2 m)"
        }
      ],
      "marketplace": null,
      "listingId": null,
      "sellerId": null,
      "shippingRestrictions": null,
      "proposition65WarningMessage": null,
      "proposition65WarningType": "05",
      "bluRayPlayer": false,
      "bluetoothEnabled": true,
      "displayType": "LED",
      "energyStarQualified": false,
      "headphoneJacks": true,
      "mobileOperatingSystem": "Mac OS",
      "screenSizeIn": 15.4
    }
  ]
}
```

</p>
</details>
<br>

> Pro Tip:  That second response is massive.  A good developer should use filters to only display exactly which attributes he/she plans to use.
