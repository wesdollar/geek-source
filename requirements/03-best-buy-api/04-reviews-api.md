# The Reviews API
 The Best Buy Reviews API is used to return reviews for a given Product

 ## Get reviews for Product SKU
 `https://api.bestbuy.com/v1/reviews(sku=4580243)?apiKey=YOUR_API_KEY&show=comment,id,rating,reviewer.name,sku,submissionTime,title&callback=JSON_CALLBACK&format=json`

<details>
<summary>Click to show response</summary>
<p>

```json
{
    "from": 1,
    "to": 10,
    "currentPage": 1,
    "total": 35,
    "totalPages": 4,
    "queryTime": "0.036",
    "totalTime": "0.064",
    "partial": false,
    "canonicalUrl": "/v1/reviews(sku=4580243)?show=comment,id,rating,reviewer.name,sku,submissionTime,title&format=json&apiKey=wjfj6cvuvjas4hmrnj8dhvtf",
    "reviews": [
        {
            "comment": "This is the 3rd Logitech surround sound system I have purchased. You cannot get a better system for the money. You actually would have to pay 3 to 4 times the amount. I like to pair my z906 system with a Creative sound card. The creative software is great for equalizing the sound to fit what ever room you put these in. The bass is amazing. I have to set the sub woofer way down, so as to not disturb the neighbors. I whole heatedly give this product the git recommendation!",
            "id": 228257419,
            "rating": 5,
            "reviewer": [
                {
                    "name": "gitonwiddit"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2020-05-01T15:55:23",
            "title": "Best surround sound system for the buck."
        },
        {
            "comment": "Of course you need a bit of space to support a 6 speaker setup, and you need a way to get a pair of speakers behind you effectively. Logitech does include extremely long rear cables, and I've had them wrapping entire (small) rooms before, but if you can get passed that, this kit makes for an outstanding 5.1 PC sound system. I end up running the hardware at about half volume, and the OS at like 20%, and it's plenty loud, and the quality is spot on. It was raining in a game once, and I wasn't sure if it was the speakers, or if it was outside a nearby window. And don't try and suggest that 2 speakers in a headset of double the price can compare to a solid 5.1 setup like this, you can tell the direction of the sound, and that just doesn't happen with a headset. Only request I have is that the volume knob control box was a bit heavier so it didn't slide around. In the end it's just on the corner of my desk and I use the remote if I ever need to change anything.",
            "id": 228183354,
            "rating": 5,
            "reviewer": [
                {
                    "name": null
                }
            ],
            "sku": 4580243,
            "submissionTime": "2020-04-30T20:59:18",
            "title": "Logitech doesn't mess around"
        },
        {
            "comment": "5.1 surround in games is epic, you can hear exactly where enemies are. The sub in this set is huge, bass you can feel in your chest, your walls, your neighbor's walls. I've never heard computer speakers this clean, no noise no hiss no distortion... just pure sound. I've heard things in music that I never knew were there. If you're connecting these to a PC/TV use the optical input for a completely digital signal to the amp.\n\nSooo good. The price is worth it. Just buy them. Make yourself happy.",
            "id": 227826073,
            "rating": 5,
            "reviewer": [
                {
                    "name": "Jerbear"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2020-04-24T15:51:54",
            "title": "Best computer speakers on the market."
        },
        {
            "comment": "These speakers for the price are amazing. Best Buy has super fast shipping also. I definitely recommend Best Buy!!",
            "id": 227397452,
            "rating": 5,
            "reviewer": [
                {
                    "name": "JDrizzle"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2020-04-17T15:12:18",
            "title": "High End Surround Sound For A Great Price"
        },
        {
            "comment": "Music.  Or if you're plugging it into the computer. This is louder and has more bass . my neighbors can hear me \nI would not advise purchasing if you live in a condo or apartment. For the money is blows every soundbar or other systems for half the cost. \nSystem rocks!!!",
            "id": 224867573,
            "rating": 5,
            "reviewer": [
                {
                    "name": "Buster724072"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2020-02-07T17:25:44",
            "title": "So far excellent 5.1 surround"
        },
        {
            "comment": "Great all around speaker system. It replaced the two older Logitech systems that I had. One was for my computer setup and the other one was for my TV/DVD/PS setup. It sounds great and has plenty of bass, enough to sake the dishes in the kitchen when turned up.",
            "id": 223818242,
            "rating": 5,
            "reviewer": [
                {
                    "name": "bobg"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2020-01-04T12:06:07",
            "title": "Great all around speaker system"
        },
        {
            "comment": "Its great sounds my son enjoying it, its 5 star my son connected to his computer and its like a real boombox sounds",
            "id": 223307684,
            "rating": 5,
            "reviewer": [
                {
                    "name": "Amor"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2019-12-20T17:13:23",
            "title": "My son enjoying his fistt logitic speaker"
        },
        {
            "comment": "This is NOT a high end system, but it will fill a room with solid sound.  If you use it for TV, movies, etc.; it will more than satisfy you.  If you are a demanding audio purest, this is not the system for you.\n\nThe extreme ends of the frequency range are not as full as higher end systems.  Car chases and explosions sound great, but concert class audio will not be near live performance quality.\n\nLower review complaining of the system failing after a few hours of LOUD use are putting demand on this system it was never meant to meet.  You also need to make sure the sub woofer and control unit have good ventilation to prevent over heating.",
            "id": 221760689,
            "rating": 5,
            "reviewer": [
                {
                    "name": "Bruno"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2019-10-23T14:33:53",
            "title": "Good Budget Home Theater System"
        },
        {
            "comment": "Crisp and clean audio great for a gaming PC. When playing single player games I hate having to wear headsets so this was a great option. Highs and lows work wonderfully. Having a remote as well is a very nice option.",
            "id": 221588024,
            "rating": 5,
            "reviewer": [
                {
                    "name": "CougarKnight"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2019-10-17T15:56:14",
            "title": "Beautiful PC speaker system"
        },
        {
            "comment": "Great sound, blows my old setup out of the water with ease. Just need to get some wall mount brackets and I'm good to go. Nice having a remote control.",
            "id": 220743045,
            "rating": 5,
            "reviewer": [
                {
                    "name": "WhiteChocolate"
                }
            ],
            "sku": 4580243,
            "submissionTime": "2019-09-13T22:53:42",
            "title": "Perfect"
        }
    ]
}
```
</p>
</details>
