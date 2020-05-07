## Icons

All icons used through the design come to us by way of FontAwesome, except for the shopping cart icon, which is available in `assets/svg`. FontAwesome makes packages for both Angular ([angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome)) and React ([react-fontawesome](https://github.com/FortAwesome/react-fontawesome)) available for consumption. But, before you go coupling directly to FontAwesome...

> Pro Tip:
Rather than coupling directly to FontAwesome, create components for each icon, and consume FontAwesome via your custom component. Should you ever choose to replace the icon with something different, you only have to edit your custom component to swap the icon out throughout your app rather than replacing every use that references the FontAwesome icon directly. This is called coupling, and we always want to limit how coupled we are to third party offerings.

You'll also want to create a component for the shopping cart icon, that way you don't have to go snag the SVG code every time you need to use it. Be sure to clean the generated SVG code up, such as removing comments, ids, etc.

FontAwesome icons used:
* `search` (magnifying glass used in search box)
* `angle-down` (nav drop-down icon)
* `star` (product ratings)
    * regular style used to denote empty star
    * solid style used to denote filled star
    * for example, a four-star rating would be four solid stars, one empty star
* `star-half-alt` (partial ratings)
* `shipping-fast` (delivery truck used for shipping messages)
* `credit-card` (0% financing message)
* `headset` (tech support message)
* `cart-plus` (add to cart)
* `angle-left` & `angle-right`
    * used for left & right buttons on product scroller
    * `angle-right` used for shop by category items
* payment type icons:
    * `cc-visa`
    * `cc-mastercard`
    * `cc-amex`
    * `cc-apple-pay`
